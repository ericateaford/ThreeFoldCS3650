import React from 'react';

const Note = ({ note }) => {
  return (
    <div style={styles.noteContainer}>
      <p>{note.text}</p>
    </div>
  );
};

const styles = {
  noteContainer: {
    border: '1px solid #ddd',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
};

export default Note;
