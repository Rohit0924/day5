const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/notes");

const NoteSchema = new mongoose.Schema({
  text: String,
});

const Note = mongoose.model("Note", NoteSchema);

app.get("/api/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.post("/api/notes", async (req, res) => {

  const note = new Note({
    text: req.body.text,
  });

  await note.save();

  res.json(note);
});

app.listen(5000, () => {
  console.log("Backend Running");
});