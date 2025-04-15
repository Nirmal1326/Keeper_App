import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
function CreateArea(Props) {
  const [addNote, setAddNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setAddNote((temp) => {
      return {
        ...temp,
        [name]: value
      };
    });
  }
  function handleSubmit(event) {
    Props.OnAdd(addNote);
    event.preventDefault();
    setAddNote({ title: "", content: "" });
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={addNote.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={addNote.content}
          placeholder="Take a note..."
          rows="3"
        />

        <button onClick={handleSubmit}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
