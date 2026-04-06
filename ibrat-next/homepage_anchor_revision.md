# Homepage – Anchor Text Revision

## Prompt Used

```
You are editing the homepage.

GOAL:
Reduce over-optimization by avoiding multiple anchors pointing to the same page.

TASK:
Find this sentence in the "Learn How Brat Style Works" section:
"Once you understand the basics, you can use the main generator to create your own designs instantly."

REPLACE ONLY THE ANCHOR TEXT:
Change: "main generator"
TO ONE OF: "text generator tool" OR "create text designs"
```

---

**Date:** April 6, 2026  
**File:** `src/app/page.tsx`  
**Goal:** Reduce SEO over-optimization and unnatural repetition by replacing the anchor point to `/brat-text-generator`.

---

## Changes Made

### Learning Section Anchor Edit
Changed the contextual link from "main generator" to "text generator tool".

**Before:**
> Once you understand the basics, you can use the [main generator](/brat-text-generator) to create your own designs instantly.

**After:**
> Once you understand the basics, you can use the [text generator tool](/brat-text-generator) to create your own designs instantly.
