import React, { useEffect, useState } from "react";
import "./App.css";
import { Note } from "./models/note";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const res = await fetch("http://localhost:5000/api/notes", {
          method: "GET",
        });
        const data = await res.json();
        setNotes(data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
    loadNotes();
  }, []);

  return <div className="App">{JSON.stringify(notes)}</div>;
}

export default App;
