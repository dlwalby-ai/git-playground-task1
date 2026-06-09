# notes-cli

A tiny command-line notes tool. It's the practice repo for the Git unit of the Claude Code course — the app itself is just a safe sandbox for practising git with Claude.

## Commands
- `node notes.js add <text>` — add a note
- `node notes.js list` — list all notes
- `node notes.js delete <id>` — delete a note

## Layout
- `notes.js` — the command-line entry point
- `lib/store.js` — loads and saves notes (in `notes.json`)
- `lib/config.js` — app settings, like the session timeout
