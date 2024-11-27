import React, { useState, useEffect } from "react";
import "./UserActionsPopup.css";

const UserActionsPopup = ({
  user,
  onClose,
  onDelete,
  onChangeName,
  onAddNote,
  onDeleteNote,
  onEditNote,
}) => {
  const [localUser, setLocalUser] = useState(user);
  const [newNote, setNewNote] = useState({
    heading: "",
    type: "",
    content: "",
  });
  const [editingNote, setEditingNote] = useState(null);
  const [isNameDialogOpen, setNameDialogOpen] = useState(false);
  const [newName, setNewName] = useState(user.name);

  useEffect(() => {
    setLocalUser(user);
    setNewName(user.name);
  }, [user]);

  const handleAddNote = () => {
    if (newNote.heading && newNote.type && newNote.content) {
      const noteWithDate = { ...newNote, creationDate: new Date().toISOString().split("T")[0] };
      const updatedNotes = [...localUser.notes, noteWithDate];
      setLocalUser({ ...localUser, notes: updatedNotes });
      onAddNote(user.name, noteWithDate);
      setNewNote({ heading: "", type: "", content: "" });
    } else {
      alert("All fields are required for a new note!");
    }
  };

  const handleEditNote = () => {
    if (editingNote) {
      const updatedNotes = localUser.notes.map((note, index) =>
        index === editingNote.index ? editingNote : note
      );
      setLocalUser({ ...localUser, notes: updatedNotes });
      onEditNote(user.name, editingNote);
      setEditingNote(null);
    }
  };

  const handleDeleteNote = (noteIndex) => {
    const updatedNotes = localUser.notes.filter((_, index) => index !== noteIndex);
    setLocalUser({ ...localUser, notes: updatedNotes });
    onDeleteNote(user.name, noteIndex);
  };

  const handleChangeName = () => {
    if (newName.trim()) {
      setLocalUser({ ...localUser, name: newName });
      onChangeName(user.name, newName);
      setNameDialogOpen(false);
    }
  };

  return (
    <div className="user-actions-popup">
      <h2>{localUser.name}'s Actions</h2>
      <div className="buttons">
        <button className="change-name" onClick={() => setNameDialogOpen(true)}>
          Change Name
        </button>
        <button className="delete-user" onClick={() => onDelete(user.name)}>
          Delete User
        </button>
      </div>

      <h3>Notes</h3>
      <table>
        <thead>
          <tr>
            <th>Heading</th>
            <th>Type</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {localUser.notes.map((note, index) => (
            <tr key={index}>
              <td>{note.heading}</td>
              <td>{note.type}</td>
              <td>{note.content}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => setEditingNote({ ...note, index })}
                >
                  Edit
                </button>
                <button
                  className="delete-note-btn"
                  onClick={() => handleDeleteNote(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Note</h3>
      <div className="add-note">
        <input
          type="text"
          placeholder="Heading"
          value={newNote.heading}
          onChange={(e) => setNewNote({ ...newNote, heading: e.target.value })}
        />
        <select
          value={newNote.type}
          onChange={(e) => setNewNote({ ...newNote, type: e.target.value })}
        >
          <option value="">Select Type</option>
          <option value="Important">Important</option>
          <option value="Personal">Personal</option>
          <option value="General">General</option>
        </select>
        <textarea
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        />
        <button className="add-note-btn" onClick={handleAddNote}>
          Add Note
        </button>
      </div>

      {editingNote && (
        <div className="edit-note-dialog">
          <h3>Edit Note</h3>
          <input
            type="text"
            value={editingNote.heading}
            onChange={(e) => setEditingNote({ ...editingNote, heading: e.target.value })}
          />
          <textarea
            value={editingNote.content}
            onChange={(e) => setEditingNote({ ...editingNote, content: e.target.value })}
          />
          <select
            value={editingNote.type}
            onChange={(e) => setEditingNote({ ...editingNote, type: e.target.value })}
          >
            <option value="Important">Important</option>
            <option value="Personal">Personal</option>
            <option value="General">General</option>
          </select>
          <div className="edit-buttons">
            <button className="save-btn" onClick={handleEditNote}>Save</button>
            <button className="cancel-btn" onClick={() => setEditingNote(null)}>Cancel</button>
          </div>
        </div>
      )}

      {isNameDialogOpen && (
        <div className="name-dialog">
          <h3>Change Name</h3>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <div className="buttons">
            <button className="save-btn" onClick={handleChangeName}>Save</button>
            <button className="cancel-btn" onClick={() => setNameDialogOpen(false)}>Cancel</button>
          </div>
        </div>
      )}

      <button className="close-btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default UserActionsPopup;
