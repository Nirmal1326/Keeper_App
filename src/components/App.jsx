import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNote] = useState([]);

  function addNote(Newnote) {
    setNote((prevValue) => {
      return [...prevValue, Newnote];
    });
  }
  function deleteNote(id) {
    setNote((prevValue) => {
      return prevValue.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea OnAdd={addNote} />
      {notes.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
