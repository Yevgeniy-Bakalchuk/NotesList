import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./addNote.module.scss";

function AddNote({ setNotes, notes }) {
  const [value, setValue] = useState("");

  function addNote() {
    setNotes([
      ...notes,
      {
        id: uuidv4(),
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }
  return (
    <div className={classes.form_container}>
      <input
        className={classes.form_input}
        placeholder="Enter note"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={classes.form_button} onClick={addNote}>
        AddNote
      </button>
    </div>
  );
}

export default AddNote;