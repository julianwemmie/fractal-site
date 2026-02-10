---
title: Two Things Claude Struggled With Today
date: 2026-02-09
excerpt: Two things Claude struggled with today.
---

Today marked the beginning of week 2 at Fractal Tech. After spending most of last week coding by hand (like they did in the Neolithic era, I presume), it came as a relief to jump back into working with Claude Code. The goal was to tinker with agentic harnesses, figuring out how to shape them with various agent prompts and skills to fit our needs. We had Claude interview us, analyze our past conversations, quiz us, and we added skills. I had it simplify my git review process and added a browser agent to let it navigate the web. Really, all you have to do is add a couple of markdown files, but it almost feels like adding attachments to your mech suit. It's empowering. Sometimes it seems like you could do just about anything with Claude, and maybe you can given the right prompt.

But for today's blog, I wanted to come back down to earth and highlight some of the things Claude was good at, and some things it struggled with.

## Customizing Claude

You can add a `CLAUDE.md` file to change Claude's base prompt. You're not really changing its system prompt, but it's the first thing Claude sees on a new session, and it pays more attention to `CLAUDE.md` than to regular messages, so you can meaningfully shape its personality. Beyond that, you can add skills, markdown files that "teach" Claude how to do more things. In reality you're not modifying Claude at all. You're just supplying the right context at the right time. It saves you from having to retype a bunch of instructions. But at the end of the day, it's just a markdown file and maybe some scripts.

## What Claude Was Good At: Interviewing Me

Claude was surprisingly good at interviewing me. I had it sit down and ask me questions at length in order to create a `CLAUDE.md` file tailored to me. It did a solid job of asking detailed questions and threading similar themes throughout the conversation. That surprised me, that it was so good at getting me to open up and talk about things I maybe wouldn't normally talk about, and at providing structure around a conversation. For something that "just" predicts the next token, it made for a pretty thoughtful interviewer.

## Struggle #1: Claude Only Knows What You Give It

As part of our tinkering with Claude Code, we had it extract, ingest, and analyze our conversations from last week. We asked it a couple of questions, things like "How did the user prompt?" and "How well did the user solve problems using LLMs?" and "How could the user improve their prompting?" Reasonable, informative questions, but I found the framing was off in the context of last week's project.

Claude's analysis was basically that I only used it as a shortcut for Google, and that my debugging prompting was lacking. I'll admit, that's technically true, but it misses the reason for those things. The more I think about it, I'm coming to realize that what Claude was saying was actually correct given the prompt, but the result wasn't useful. It said I needed to learn how to prompt more strategically, think bigger picture. That I gave incomplete information, or was sometimes rude. I think that's correct, but not the full story.

Taken in isolation, I think someone could come to that conclusion, but it completely missed the reasoning I did *without* LLMs. The planning I did, the diagrams I drew. My goal for the week was to code tic-tac-toe using minimal generated code or assistance. Basically, use LLMs as if it were 2024. Claude's analysis missed all of that context because it never had it. **Claude only knows what you tell it.**

## Struggle #2: PerimeterX and the Zillow Captcha

One of the skills I added was the ability to use a browser. Claude can click, move things around, take screenshots, and generally it's pretty good at navigating websites. But sometimes sites put up barriers to block bots, and that's exactly what I ran into.

I tried to get Claude to pull some housing data from Zillow, but it immediately got blocked by a captcha. It wasn't one of those weird "rotate the shape" or "interpret this warped text" challenges. It was just a simple "hold here for a couple of seconds." I figured Claude would knock it out of the park.

It could not. After about thirty minutes of spinning its wheels, it just couldn't crack it. I even added a dedicated captcha skill to deal with PerimeterX's advanced captcha system, but still no luck. PerimeterX is apparently one of the trickiest bot-detection systems out there, even though it *appears* simple. What Claude told me is that it's an embedded iframe that captures all kinds of data about browser usage (cookies, mouse and keyboard behavior, and more) then uses that to determine if it's a human on the other end.

I'm sure we could break it eventually, but today was not that day. Claude 0, PerimeterX 1.
