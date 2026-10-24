---
title: "How to Build an AI Support Chatbot for $0 a Month"
description: "A practical walkthrough of building a production RAG chatbot using only free-tier services — Cloudflare Workers, Vectorize, Workers AI, and a free-tier LLM — with zero external database and zero monthly cost."
pubDate: 2026-07-19
tags: ["AI", "RAG", "Cloudflare Workers", "Chatbot", "Engineering"]
author: "Dogbro Engineering Team"
draft: false
---

## Can you really run an AI chatbot for free?

Yes — with the right architecture, a production-ready AI support chatbot can run entirely on free-tier infrastructure, with no monthly hosting bill and no external database.

This post breaks down the exact stack we used to add an AI-powered support chatbot to our website, the architectural decisions behind it, and a subtle bug that took longer to fix than the entire chatbot did to build.

## What stack does a $0 AI chatbot use?

The full pipeline runs on four free-tier services, all working together without a single paid subscription:

| Layer | Service | Free tier limit |
|---|---|---|
| Edge compute | Cloudflare Workers | 100,000 requests/day |
| Embeddings | Cloudflare Workers AI | Free (`bge-base-en-v1.5`) |
| Vector storage | Cloudflare Vectorize | 5M stored dimensions/month |
| Language model | Gemini Flash-Lite | Free tier, daily request quota |

No Pinecone. No Supabase. No dedicated vector database subscription. Text content and embeddings both live inside Vectorize, retrieved together in a single query.

## Why avoid an external vector database?

Early architecture drafts for this project used an external Postgres database with the pgvector extension. In testing, that approach introduced meaningfully higher latency — every chat request had to make a round trip to a separate database service outside the Cloudflare network.

Switching to Cloudflare Vectorize kept every part of the request — embedding generation, vector search, and metadata retrieval — inside the same edge network. The result is a simpler architecture with fewer moving parts and no cross-service latency.

## How does the RAG pipeline work?

The flow has two phases: a one-time ingestion step, and a real-time query step.

**Ingestion (run once, or whenever source documents change):**

1. Source documents (`.txt`, `.pdf`) are split into overlapping chunks
2. Each chunk is embedded using Workers AI's `bge-base-en-v1.5` model
3. Vectors are upserted into Vectorize, with the original text stored directly in each vector's metadata

**Query (runs on every user message):**

1. The user's question is embedded using the same model
2. Vectorize returns the top-k most similar chunks, including their original text
3. The retrieved text is passed as context to the LLM
4. The LLM streams its answer back to the browser over Server-Sent Events (SSE)

Storing the original text inside vector metadata — rather than in a separate table — removes an entire database lookup from the critical path.

## What was the hardest part of the build?

Not the AI. The hardest bug had nothing to do with embeddings, retrieval, or prompt design — it was in the plumbing that streams the response back to the browser.

Streaming an LLM response over SSE means reading the HTTP response body incrementally, chunk by chunk, as data arrives over the network. The assumption most implementations make — including our first version — is that each network chunk lines up neatly with one complete JSON event.

That assumption is wrong.

## Why did the chatbot only return one word?

After deploying the first version, every response from the chatbot displayed a single word — "To" — and then stopped, even though the underlying LLM was generating a full answer.

The cause: network chunks do not respect message boundaries. A single JSON payload like `{"text":"Today is..."}` can arrive split across two separate `read()` calls — for example `{"text":"Tod` in one chunk and `ay is..."}` in the next. Parsing each chunk independently means every JSON string that gets split mid-stream fails silently, and only the rare chunk that happens to contain a complete, self-contained JSON object gets displayed.

## How do you fix SSE streaming bugs like this?

The fix is to buffer incomplete lines across reads instead of parsing each chunk in isolation:

```js
let buffer = ''

while (true) {
  const { done, value } = await reader.read()
  if (done) break

  buffer += decoder.decode(value, { stream: true })
  const lines = buffer.split('\n')
  buffer = lines.pop() || ''   // keep the incomplete tail for the next read

  for (const line of lines) {
    // process only complete lines here
  }
}
```

The key change: after splitting on newlines, the last element might be an incomplete line that got cut off mid-chunk. Instead of processing it immediately, it's held back and prepended to the next chunk of incoming data. Only fully-formed lines get parsed.

This same bug pattern applies to any streaming API — not just Gemini, and not just this project. Any code that does `chunk.split('\n')` inside a `while (true)` read loop without carrying a buffer across iterations is at risk of silently dropping data.

## Is this architecture production-ready?

For low-to-moderate traffic — the kind most small business websites see — yes. All four services (Workers, Workers AI, Vectorize, and Gemini's free tier) have daily or monthly request quotas well above what a typical support chatbot needs.

The tradeoffs worth knowing about:

- Vectorize's free tier is explicitly positioned for prototyping — Cloudflare's own documentation frames it as suitable for experimentation, with paid tiers for larger-scale production use
- Free-tier LLMs are periodically deprecated and replaced with newer models, so pinning a model version as a configurable variable (rather than hardcoding it) avoids surprise outages
- There's no built-in analytics or conversation logging — that has to be added separately if you need it

## Takeaway

A capable, RAG-powered AI chatbot doesn't require a database subscription, a vector database bill, or a paid LLM API to get started. The architecture that ended up working best was also the simplest one: fewer services, fewer network hops, and careful handling of the one place — streaming — where most implementations quietly break.

---

*Building something similar? We help companies design and ship AI-powered tools like this one — from architecture through deployment. [Get in touch](/contact) to talk through your use case.*
