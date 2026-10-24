---
title: "AI Support Bot Deployment"
description: "Pay-per-query support bot that reduced resolution costs by 85% for a SaaS company."
category: "Support Bot"
tech: ["RAG", "Open-Source LLM", "Vector DB"]
year: 2024
role: "AI Engineering"
client: "CloudTask"
url: "https://cloudtask.com"
order: 4
featured: true
---

## Overview

CloudTask was spending $15,000/month on outsourced support agents handling 5,000
tickets. Each ticket cost $3-5 to resolve, and customers waited hours for answers.

## The challenge

- Build an AI agent that resolves 80% of support queries accurately
- Integrate with existing knowledge base and ticketing system
- Charge per-query so costs scale with business, not headcount

## Approach

We built a custom knowledge base from CloudTask's internal docs, product guides,
and past support tickets. A lightweight open-source LLM handles queries at $0.002
each, with RAG retrieval for accuracy. The system integrates with their existing
Zendesk workflow.

## Outcome

Resolution costs dropped to $0.40/query — a **90% reduction**. Human agents now
handle only escalated issues. CloudTask scaled support to 24/7 coverage without
hiring additional staff.
