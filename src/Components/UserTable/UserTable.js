import React from "react";
import PermissionDropdown from "../PermissionDropdown";
import "./UserTable.css";

const UserTable = ({
  users,
  onUserSelect,
  onPermissionChange,
  searchQuery,
}) => {
  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead className="user-table-header-container">
          <tr>
            {[
              "Serial Number",
              "Name",
              "Number of Notes", 
              "Last Note Made On",
              "Permission Type",
              "Actions",
            ].map((heading) => (
              <th key={heading} className="user-table-header">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="user-table-body-container">
          {users.map((user, index) => (
            <tr key={user.name} className="user-table-row">
              <td className="user-table-cell">{index + 1}</td>
              <td className="user-table-cell">{user.name}</td>
              <td className="user-table-cell">{user.notes.length}</td>
              <td className="user-table-cell">
                {user.notes[user.notes.length - 1]?.creationDate || "N/A"}
              </td>
              <td className="user-table-cell">
                <PermissionDropdown
                  currentPermission={user.permission || "Viewer"}
                  onChange={(newPermission) =>
                    onPermissionChange(user.name, newPermission)
                  }
                />
              </td>
              <td className="user-table-cell">
                <button
                  onClick={() => onUserSelect(user)}
                  className="user-table-button"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;