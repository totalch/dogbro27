---
title: "Writing Content That Scales"
description: "Conventions and structure that keep a growing AI content library maintainable."
pubDate: 2026-07-05
tags: ["Content", "Tutorial"]
author: "Dogbro Team"
---

A blog with five posts is easy. A blog with five hundred needs conventions. Here
are the ones baked into Dogbro's content platform.

## Keep frontmatter minimal but strict

Every post needs a `title`, a `description`, and a `pubDate`. The description is
not optional busywork — it powers both the card excerpt and the meta description
that search engines read.

```yaml
---
title: 'A Clear, Specific Title'
description: 'One sentence that would make you click.'
pubDate: 2026-07-05
tags: ['AI']
---
```

## Tag with intent

Tags are navigation, not decoration. Pick a small, reusable vocabulary and stick
to it. Five well-used tags beat fifty one-off ones. Dogbro slugifies tags for
you, so "Content Marketing" and "content-marketing" resolve to the same page.

## Let drafts breathe

Set `draft: true` and a post stays visible while you write locally but vanishes
from the production build. No branches, no half-finished pages going live.

## Why this matters for AI-generated content

When you're generating hundreds of articles, consistent structure ensures every
piece is SEO-optimized and properly categorized. Our platform enforces these
conventions automatically, so you can scale content without the maintenance headache.
