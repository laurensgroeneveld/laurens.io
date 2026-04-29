---
title: Change the defaults
description: Don't be beholden by whatever defaults were chosen for you. Make that mouse pointer big!
date: 2026-04-28
---

Most software comes with sensible defaults out-of-the-box. Generally those were chosen so that the average user can immediately start using the software, without lengthy configurations. But what if you're not an average user, and the defaults don't cut it? Or what if the default is [just plain wrong](/blog/light-theme)? Then it's time to change the defaults, and not to be beholden by whatever was chosen by the developer at one point.

## My customizations
I'll list a few things that I change in my OS and software, some of which might be controversial. That's OK, they're certainly my personal preferences :). Most of these can be found in my [dotfiles](https://github.com/laurensgroeneveld/dotfiles).

### Big mouse pointer
One of the first things most people remark on when they look at my screen. This was inspired by [this tweet](https://x.com/shanselman/status/1351315661880872962) from Scott Hanselman. In his words, "this is not about being old, this is about being awesome."

<figure>
    <img alt="A big mouse pointer" src="/images/bigpointer.png" class="block w-25">
    <figcaption>Yes, this is the actual size.</figcaption>
</figure>

### Light theme
Another contentious one. I've written [a blog post](/blog/light-theme) about it. It's anecdotally and scientifically better!

### Clean editor
In my code editor I try to keep things as clean as possible. That means

- No tabs
- Hide the sidebar by default
- Move the sidebar to the right so it doesn't push the code around when shown
- Disable unnecessary toolbars

<figure>
    <img alt="A screenshot of Visual Studio Code" src="/images/light-theme-editor.jpg" class="block">
    <figcaption>No unnecessary fluff in sight, just code.</figcaption>
</figure>

Most of this comes from Caleb Porzio's (of Alpine.js fame) [Make VS Code Awesome](https://makevscodeawesome.com/), which I recommend checking out. Not all customizations were to my taste, but the few listed above make it much easier to focus on the code.

### Commandline tools
There's a few built-in commands that I [change](https://github.com/laurensgroeneveld/dotfiles/blob/d1fa52d88a53505a33957806e776f3264d79e004/zsh/aliases.zsh#L59), such as [bat](https://github.com/sharkdp/bat) instead of `cat` and [prettyping](https://github.com/denilsonsa/prettyping) instead of `ping`.

### macOS
Customizing the default OS apps is something most users do I feel, if only to replace the default browser. Here's a few built-in apps that I [replace](https://github.com/laurensgroeneveld/dotfiles/blob/583be56a18480661fddea3777fba580dc12c54ad/Brewfile#L29):

- [Raycast](https://www.raycast.com/) instead of Spotlight - quite a common one nowadays.
- [Ghostty](https://ghostty.org/) instead of Terminal - this has replaced iTerm for me.
- [Zen](https://zen-browser.app/) as the default browser - it's the ergonomics of Arc, but based on Firefox.
- [Proton's apps](https://proton.me/) instead of Mail and iCloud - I use Proton for mail and storage, because I like their end-to-end encryption.

## In conclusion
I'm not sure if you're inspired to 100x your pointer size (but seriously, you should try it), but at least I hope I've inspired you to change the defaults!
