const fs = require("fs").promises;
const path = require("path");

const FILE = path.join(__dirname, "..", "notes.json");

// A simple queue mechanism to prevent race conditions during concurrent writes
let writeQueue = Promise.resolve();

async function load() {
  try {
    const rawData = await fs.readFile(FILE, "utf8");
    return JSON.parse(rawData);
  } catch (error) {
    // Return default structure if file doesn't exist or is corrupted
    return { nextId: 1, notes: [] };
  }
}

async function save(data) {
  // Chain the write operation to the queue so sequential saves don't overlap
  writeQueue = writeQueue.then(async () => {
    await fs.writeFile(FILE, JSON.stringify(data, null, 2), "utf8");
  });
  return writeQueue;
}

async function all() {
  const data = await load();
  return data.notes;
}

async function add(text) {
  const data = await load();
  const note = { id: data.nextId, text };
  
  data.notes.push(note);
  data.nextId += 1;
  
  await save(data);
  return note;
}

async function remove(id) {
  const data = await load();
  const beforeLength = data.notes.length;
  
  data.notes = data.notes.filter((n) => n.id !== Number(id)); // Coerced to Number for safety
  
  if (data.notes.length < beforeLength) {
    await save(data);
    return true;
  }
  return false;
}

module.exports = { all, add, remove };
