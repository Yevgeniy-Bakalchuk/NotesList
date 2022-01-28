import React, { useState } from "react";
import AddNote from "./AddNote/AddNote";
import Header from "./Header/Header";
import NotesList from "./NotesList/NotesList";
import { Container } from "react-bootstrap";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <Container>
        <Header />
        <AddNote notes={notes} setNotes={setNotes} />
        <NotesList notes={notes} setNotes={setNotes} />
      </Container>
    </>
  );
}

export default App;