import React from "react";

const PermissionDropdown = ({ currentPermission, onChange }) => {
    return (
      <select
        value={currentPermission}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "5px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <option value="Viewer">Viewer</option>
        <option value="Editor">Editor</option>
        <option value="Creator">Creator</option>
        <option value="Admin">Admin</option>
      </select>
    );
  };
  

export default PermissionDropdown;
