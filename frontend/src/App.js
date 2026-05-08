import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const fetchNotes = async () => {
    const res = await axios.get("/api/notes");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async () => {

    if (!text) return;

    await axios.post("/api/notes", {
      text,
    });

    setText("");

    fetchNotes();
  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Smart Notes App</h1>

      <input
        type="text"
        placeholder="Enter Note"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addNote}>
        Add Note
      </button>

      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            {note.text}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;