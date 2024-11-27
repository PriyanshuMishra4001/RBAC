import React, { useState, useEffect } from "react";
import UserTable from "../UserTable/UserTable.js";
import UserActionsPopup from "../Actions/UserActionsPopup.js";
import data from "../../data.json";
import { getStoredUsers, saveUsers } from "../../utils/storage.js";
import "./Dashboard.css";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const storedUsers = getStoredUsers();
    if (storedUsers && storedUsers.length > 0) {
      setUsers(storedUsers);
    } else {
      setUsers(data);
    }
  }, []);

  useEffect(() => {
    saveUsers(users);
  }, [users]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleDeleteUser = (userName) => {
    const updatedUsers = users.filter((user) => user.name !== userName);
    setUsers(updatedUsers);
    setSelectedUser(null);
  };

  const handleChangeName = (oldName, newName) => {
    const updatedUsers = users.map((user) =>
      user.name === oldName ? { ...user, name: newName } : user
    );
    setUsers(updatedUsers);
  };

  const handlePermissionChange = (userName, newPermission) => {
    const updatedUsers = users.map((user) =>
      user.name === userName ? { ...user, permission: newPermission } : user
    );
    setUsers(updatedUsers);
  };

  const handleAddNote = (userName, newNote) => {
    const updatedUsers = users.map((user) =>
      user.name === userName
        ? { ...user, notes: [...user.notes, newNote] }
        : user
    );
    setUsers(updatedUsers);
  };

  const handleEditNote = (userName, updatedNote) => {
    const updatedUsers = users.map((user) =>
      user.name === userName
        ? {
            ...user,
            notes: user.notes.map((note, index) =>
              index === updatedNote.index ? { ...updatedNote } : note
            ),
          }
        : user
    );
    setUsers(updatedUsers);
  };

  const handleDeleteNote = (userName, noteIndex) => {
    const updatedUsers = users.map((user) =>
      user.name === userName
        ? {
            ...user,
            notes: user.notes.filter((_, index) => index !== noteIndex),
          }
        : user
    );
    setUsers(updatedUsers);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery) ||
      user.notes.length.toString().includes(searchQuery) ||
      user.notes[user.notes.length - 1]?.creationDate.includes(searchQuery)
  );

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <input
        type="text"
        placeholder="Search by name, number of notes, or date..."
        value={searchQuery}
        onChange={handleSearch}
        className="dashboard-search"
      />
      <UserTable
        users={filteredUsers}
        onUserSelect={setSelectedUser}
        onPermissionChange={handlePermissionChange}
        searchQuery={searchQuery}
      />
      {selectedUser && (
        <UserActionsPopup
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onDelete={(userName) => handleDeleteUser(userName)}
          onChangeName={(oldName, newName) =>
            handleChangeName(oldName, newName)
          }
          onPermissionChange={(newPermission) =>
            handlePermissionChange(selectedUser.name, newPermission)
          }
          onAddNote={handleAddNote}
          onDeleteNote={handleDeleteNote}
          onEditNote={handleEditNote}
        />
      )}
    </div>
  );
};

export default Dashboard;
