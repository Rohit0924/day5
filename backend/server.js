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

app.listen(5000, () => {
  console.log("Backend Running");
});