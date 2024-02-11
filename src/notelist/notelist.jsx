import React from "react";
import Note from "../note/note";
import "./notelist.css";

class NoteList extends React.Component {
  render() {
    const notes = [
      { title: "Nota 1", content: "Contenido de la nota 1" },
      { title: "Nota 2", content: "Contenido de la nota 2" },
    ];
    return (
      <div className="note-list">
        {notes.map((note, index) => (
          <Note key={index} title={note.title} content={note.content} />
        ))}
      </div>
    );
  }
}

export default NoteList;
