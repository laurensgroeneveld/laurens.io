---
title: Changing .vscode settings.json locally when it's checked into Git
date: 2020-08-25
tags: post
---
Since I often have multiple Visual Studio Code projects open at the same time, I need an easy way to distinguish between them. Luckily there's [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) by John Papa, which lets you change the window frame color for different workspaces by setting a key in the `.vscode/settings.json`. Perfect!

However, in my current project the `settings.json` is checked into Git, to share some common settings. Whether or not that's a good idea [is debatable](https://stackoverflow.com/a/32979933), but unfortunately I couldn't just change that without impacting all other developers on the projects.

Luckily there's a simple solution: VS Code has the concept of [workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces), which do not necessarily have to be folders. By clicking **File > Add Folder to Workspace** you can save a separate `.code-workspace` file. This is just a JSON file with, amongst others, the local `settings`. So I created a workspace with just this project, and then could change my window colors with Peacock at will. Problem solved!

**TL;DR** Create a [multi-root workspace](https://code.visualstudio.com/docs/editor/multi-root-workspaces) in VS Code to work around the local `.vscode` folder.