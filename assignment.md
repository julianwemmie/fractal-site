### Assignment

Explore claude code by making a personal site. How can we improve claude code as a harness? What are skills? How do we add / create skills? What security measure can we put in place? Hooks? 

The goal is to create a personal site with claude and then write a blog post about how you did it. 

A couple different phases.
 - Phase 1: Improve claude to help you make this site e.g. skills, hooks, etc.
 - Phase 2: Execution. Implement the site.
 - Phase 3: Deploy the site. 

 ### Planning

 - I've got claude code already, no biggie.
 - Need to add a couple of skills for web, meaning frontend design etc. Probably add playwright mcp. Add a couple of hooks to avoid nuking my mac. We can use hooks for that.
- I want my site to be all purpose. This includes contact info, resume, blog posts, projects, and probably something else I can't forsee. 
- I want my site to be easy to use (writing and publishing blog posts should be fairly straight forward), but highly extendable in case I want to host projects or whatever.
- I've already got a domain so that's taken care of.
- What do I want my site to look like? On one hand I really like minimal sites if I'm reading, for example, a blog post or whatever; they're easy to maintain. But they're a little boring tbh. Not bad, but not sure if that's what I want right now. I think a big goal for my site, if I were to actually use it, is to be mobile friendly. 
- What other designs or angles beside minimalistic could be fun? Maybe retro? or idk. We'll figure it out.
- I explored some styles that might be out there a little bit like maybe a website that's like an impressionist painting, or maybe something that's like an analog film stip or something. But that might be a little too much to get done right now. I think I'll go ahead with a more minimalistic style for now and once we have the site up and running then we'll figure out some styling.
- I have this simple art explorer project which I think would be nice to add to the site: https://github.com/julianwemmie/chicago-art-institute-explorer

- I'm at a point where I can start making some decisions about tech stack. I think the two natural options are either nextjs or vite. Nextjs comes with a lot of batteries included and it would be dead simple to host with vercel, but I kinda have to give in to the nextjs ecosystem and it might be overkill for my site. Vite is simpler, but might need some work with seo and server side rendering etc. I'm not really concerned with seo right now, so I think I'll go with vite.
- One requirement I have for the site is that it should be as simple as possible to publish posts. I'm thinking we have some sort of markdown processor that converts it to html, then we can serve that with vite. So then I can write in whatever markdown editor I want and that can be our post. 

- Can't settle on one design so let's do all of them. Each time the user loads the page, we should choose a random theme/design.
