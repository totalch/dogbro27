---
title: "E-Commerce AI Content Pipeline"
description: "Automated product description generation at scale for a leading e-commerce platform."
category: "AI Content"
tech: ["Llama 3", "Fine-tuning", "Astro"]
year: 2024
role: "AI Engineering & Product"
client: "ShopGlobal"
url: "https://shopglobal.com"
order: 1
featured: true
---

## Overview

ShopGlobal needed to generate 50,000+ product descriptions monthly without
copyright issues or hiring a large content team. Their previous solution used
GPT-4 APIs at $2,000+/month and still had SEO quality problems.

## The challenge

- Must generate unique, SEO-optimized product copy at scale
- Zero copyright risk — client had been burned by AI-generated copyright claims
- Keep costs under $500/month for the entire catalog

## Approach

We fine-tuned a Llama 3 model on Wikipedia + Common Crawl public domain data,
then built an Astro-based CMS that auto-generates descriptions per product
category. The system runs on commodity GPUs — inference cost is $0.03/description.

## Outcome

**$0 copyright issues.** Monthly content spend dropped from $2,000 to $11.
ShopGlobal scaled to 100,000+ products without adding content staff.
