---
title: .filter(Boolean)
date: 2026-03-27
---

In JavaScript, using `.filter(Boolean)` on an array of strings will filter out all empty string values. Noticed this in a code review today. I'd probably prefer `.filter(v => v !== "")` for clarity, but it's kinda neat.
