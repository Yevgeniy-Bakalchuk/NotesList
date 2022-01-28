import React, { useState } from "react";
import classes from "./notesList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faTrash,
  faEdit,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";

function NotesList({ notes, setNotes }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  function deleteNote(id) {
    let newNote = [...notes].filter((item) => item.id != id);
    setNotes(newNote);
  }

  function statusNote(id) {
    let newNote = [...notes].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setNotes(newNote);
  }

  function editNote(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveNote(id) {
    let newNote = [...notes].map((item) => {
      if (item.id == id) {
        item.title = value;
      }
      return item;
    });
    setNotes(newNote);
    setEdit(null);
  }
  
  function deleteSelectNotes() {
    let newNote = [...notes].filter((item) => item.status == true);
    setNotes(newNote);
  }

  return (
    <div className={classes.notes_container}>
      <button
        className={classes.deleteSelected}
        onClick={() => deleteSelectNotes()}
      >
        Delete done notes
      </button>
      {notes.map((item) => (
        <div className={classes.notes_block} key={item.id}>
          {edit == item.id ? (
            <div>
              <input onChange={(e) => setValue(e.target.value)} value={value} />
            </div>
          ) : (
            <div className={!item.status ? classes.closeItem : " "}>
              {item.title}
            </div>
          )}
          {edit == item.id ? (
            <div>
              <button
                className={classes.button_save}
                onClick={() => saveNote(item.id)}
              >
                <FontAwesomeIcon icon={faSave} />
              </button>
            </div>
          ) : (
            <div className={classes.notes_buttons}>
              <button
                className={classes.button_delete}
                onClick={() => deleteNote(item.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button
                className={classes.button_status}
                onClick={() => statusNote(item.id)}
              >
                {item.status ? (
                  <FontAwesomeIcon icon={faLockOpen} />
                ) : (
                  <FontAwesomeIcon icon={faLock} />
                )}
              </button>
              <button
                className={classes.button_edit}
                onClick={() => editNote(item.id, item.title)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default NotesList;