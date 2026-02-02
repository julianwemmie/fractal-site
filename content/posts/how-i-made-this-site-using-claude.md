---
title: How I Made This Site Using Claude
date: 2026-02-02
excerpt: Software engineer exploring AI and sustainable systems. Learning in public, building tools that matter.
---

*I kept log of my planning/thoughts during this project, and used it create blog post with Claude's help.*

---


# How I Made This Site Using Claude

I set out to explore Claude Code by making a personal site. The goal was to understand how we can improve Claude as a harness—what are skills? How do we add or create them? What security measures can we put in place? What role can hooks play? The real objective was to create a personal site with Claude and then write about how I did it.

## Planning & Exploration

I started with no site and needed to think through what I actually wanted. The challenge was multi-faceted:

**The Purpose**: I wanted my site to be all-purpose—contact info, resume, blog posts, projects, and probably something I couldn't foresee yet. But I also wanted it to be easy to use for writing and publishing blog posts, while remaining highly extensible.

**The Design Dilemma**: I really like minimal sites when I'm reading something, but they can be a little boring. I thought a big goal for my site should be mobile friendliness. I explored some wild styles—impressionist paintings, analog film strips—but realized that might be too much to tackle upfront. I decided to go with a more minimalistic style to start, knowing I could iterate on styling once the foundation was solid.

**The Tech Stack Decision**: I had two natural options: Next.js or Vite. Next.js came with batteries included and would've been dead simple to host on Vercel, but felt like overkill for my needs and locked me into the Next.js ecosystem. Vite was simpler, though it might need work with SEO and server-side rendering. Since I wasn't concerned with SEO right now, I chose Vite. The lack of immediate SEO concerns was a critical insight that eliminated a whole class of constraints.

**The Content Pipeline**: One requirement I had was that publishing posts should be as simple as possible. I decided to use a markdown processor that converts posts to HTML, then serve them with Vite. This meant I could write in any markdown editor I wanted—no databases, no admin panels needed. Just a new markdown file and I'm done.

**The Design Solution**: I couldn't settle on one design. So instead of choosing, I decided to show all of them. Each time a user loads the page, we choose a random theme or design. This keeps things fresh and lets me experiment with different visual directions without overcommitting to any one aesthetic.

## Improving Claude Code

Before jumping into execution, I worked on improving Claude Code itself to be a better harness for this work:

- Added skills for web development, specifically the frontend-design skill to help with UI prototyping and iteration
- Added Playwright MCP for automated testing and validation
- Added hooks to avoid accidentally nuking my system—essential safety guards around potentially destructive operations

## Building the Site

With the foundation in place, I implemented the site using Claude Code throughout. The frontend-design skill was invaluable here—I could describe what I wanted and get production-grade UI code back. Being able to iterate quickly on visual design saved me hours of manual styling work.

The architecture ended up being:
- Vite for the build system and static serving
- React for component management
- Markdown processor for blog posts
- Random design selector that picks a new theme on each page load
- Seven distinct design styles to cycle through

## What I Learned

Working on this taught me several things about using Claude effectively:

1. **Planning matters.** Taking time upfront to think through architecture and constraints made execution much smoother. Understanding what I didn't need (SEO) was as important as understanding what I did.

2. **Claude is great for exploration.** When uncertain about design directions or tech choices, Claude helped me think through trade-offs and make confident decisions.

3. **Keep it simple.** I resisted the urge to over-engineer. Vite instead of Next.js, static markdown instead of a full CMS, random themes instead of a complex theme switcher. Each choice kept the project manageable and actually enhanced the experience.

4. **Iterate on what matters.** The random theme system is a small detail, but it makes the site more enjoyable to build and visit. Knowing what to prioritize meant I could ship faster.

## What's Next

I've got a clean foundation that's easy to extend. I want to add project showcases and integrate my Chicago Art Institute explorer project. There are still more ambitious design directions to explore. Claude Code will continue to be invaluable for this work.

If you're building something and unsure where to start, I'd recommend spending time planning with Claude first. The clarity that comes from thinking through your constraints and options upfront is worth the investment.

---

**Note**: One thing I didn't get to was making each blog post a different design. I wanted the homepage to cycle through random designs on each load, but have individual blog posts stick to one design for readability. I ran out of time to implement that, but it's definitely on the roadmap.
