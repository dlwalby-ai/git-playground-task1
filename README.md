## Unit 4 Git playground

A tiny command-line notes tool, used as the practice repo for Unit 4 (Git). The app is a safe sandbox for doing real Git work with Claude. The task below is something you run here with Claude; follow the steps and submit the link it asks for.

### The app
- `node notes.js add <text>` — add a note
- `node notes.js list` — list all notes
- `node notes.js delete <id>` — delete a note

Layout: `notes.js` is the entry point, `lib/store.js` loads and saves notes (in `notes.json`), and `lib/config.js` holds app settings.

### Set up
1. Make sure you have your own copy of this repo (created from the lesson on the platform).
2. Clone it locally, and run `gh auth login` so Claude can open pull requests through the `gh` CLI.
3. Open Claude Code in the cloned folder.

### Lesson 1 task — let Claude read your repo
Goal: instead of reading a diff yourself, have Claude tell you what changed, then commit a summary.

1. Make a few small edits across a couple of files — change a line, add a short function, rename a variable. Slip in at least one change you might plausibly forget, like a stray edit in a second file.
2. Create a file `notes.md` and write one line predicting what you changed, from memory.
3. Ask Claude: *'Summarize what I've changed, and flag anything that looks unintended.'* Paste its summary into `notes.md` under your prediction, then add a sentence on whether it caught the stray change.
4. Have Claude commit `notes.md` on a new branch — tell it *'commit this on a main branch and push it.'*
5. Create a PR and submit it.
