import Footer from './components/Footer.js'
import Header from './components/Header.js' 
import React from 'react';
import Note from './components/Note.js';




const Notes = () => {
  // Static list of notes
  const notes = [
    { id: 1, text: "Buy groceries" },
    { id: 2, text: "Finish React project" },
    { id: 3, text: "Read a book" },
    { id: 4, text: "Call mom" }
  ];

  return (
    <div>
      <Header />
      <h1>My Notes</h1>
      <div>
        {notes.length === 0 ? (
          <p>No notes available!</p>
        ) : (
          notes.map((note) => (
            <Note key={note.id} note={note} />
          ))
        )}
        <button type="button" class="btn btn-dark btn-lg mb-3">Add a Note</button>
        <Footer/>
      </div>
    </div>
  );
}; 

export default Notes;