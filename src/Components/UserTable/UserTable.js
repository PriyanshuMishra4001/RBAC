// import React, { useState } from "react";
// import PermissionDropdown from "../PermissionDropdown";
// import "./UserTable.css";

// const UserTable = ({
//   users,
//   onUserSelect,
//   onPermissionChange,
//   searchQuery,
// }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 11;

//   const paginatedUsers = users.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   const totalPages = Math.ceil(users.length / rowsPerPage);

//   return (
//     // <div className="user-table-container">
//     //   <table className="user-table">
//     //     <thead>
//     //       <tr>
//     //         {[
//     //           "Serial Number",
//     //           "Name",
//     //           "Number of Notes",
//     //           "Last Note Made On",
//     //           "Permission Type",
//     //           "Actions",
//     //         ].map((heading) => (
//     //           <th key={heading} className="user-table-header">
//     //             {heading}
//     //           </th>
//     //         ))}
//     //       </tr>
//     //     </thead>
//     //     <tbody>
//     //       {paginatedUsers.map((user, index) => (
//     //         <tr key={user.name} className="user-table-row">
//     //           <td className="user-table-cell">
//     //             {(currentPage - 1) * rowsPerPage + index + 1}
//     //           </td>
//     //           <td className="user-table-cell">{user.name}</td>
//     //           <td className="user-table-cell">{user.notes.length}</td>
//     //           <td className="user-table-cell">
//     //             {user.notes[user.notes.length - 1]?.creationDate || "N/A"}
//     //           </td>
//     //           <td className="user-table-cell">
//     //             <PermissionDropdown
//     //               currentPermission={user.permission || "Viewer"}
//     //               onChange={(newPermission) =>
//     //                 onPermissionChange(user.name, newPermission)
//     //               }
//     //             />
//     //           </td>
//     //           <td className="user-table-cell">
//     //             <button
//     //               onClick={() => onUserSelect(user)}
//     //               className="user-table-button"
//     //             >
//     //               View
//     //             </button>
//     //           </td>
//     //         </tr>
//     //       ))}
//     //     </tbody>
//     //   </table>
//     //   <div className="pagination">
//     //     {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//     //       <button
//     //         key={page}
//     //         onClick={() => setCurrentPage(page)}
//     //         className={`pagination-button ${
//     //           page === currentPage ? "active" : ""
//     //         }`}
//     //       >
//     //         {page}
//     //       </button>
//     //     ))}
//     //   </div>
//     // </div>
//     <div className="user-table-container">
//       <table className="user-table">
//         <thead>
//           <tr>
//             {[
//               "Serial Number",
//               "Name",
//               "Number of Notes",
//               "Last Note Made On",
//               "Permission Type",
//               "Actions",
//             ].map((heading) => (
//               <th key={heading} className="user-table-header">
//                 {heading}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedUsers.map((user, index) => (
//             <tr key={user.name} className="user-table-row">
//               <td className="user-table-cell">
//                 {(currentPage - 1) * rowsPerPage + index + 1}
//               </td>
//               <td className="user-table-cell">{user.name}</td>
//               <td className="user-table-cell">{user.notes.length}</td>
//               <td className="user-table-cell">
//                 {user.notes[user.notes.length - 1]?.creationDate || "N/A"}
//               </td>
//               <td className="user-table-cell">
//                 <PermissionDropdown
//                   currentPermission={user.permission || "Viewer"}
//                   onChange={(newPermission) =>
//                     onPermissionChange(user.name, newPermission)
//                   }
//                 />
//               </td>
//               <td className="user-table-cell">
//                 <button
//                   onClick={() => onUserSelect(user)}
//                   className="user-table-button"
//                 >
//                   View
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//           <button
//             key={page}
//             onClick={() => setCurrentPage(page)}
//             className={`pagination-button ${
//               page === currentPage ? "active" : ""
//             }`}
//           >
//             {page}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserTable;

// import React from "react";
// import PermissionDropdown from "../PermissionDropdown";
// import "./UserTable.css";

// const UserTable = ({
//   users,
//   onUserSelect,
//   onPermissionChange,
//   searchQuery,
// }) => {
//   return (
//     <div className="user-table-container">
//       <table className="user-table">
//         <thead>
//           <tr>
//             {[
//               "Serial Number",
//               "Name", 
//               "Number of Notes",
//               "Last Note Made On",
//               "Permission Type",
//               "Actions",
//             ].map((heading) => (
//               <th key={heading} className="user-table-header">
//                 {heading}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="user-table-body">
//           {users.map((user, index) => (
//             <tr key={user.name} className="user-table-row">
//               <td className="user-table-cell">{index + 1}</td>
//               <td className="user-table-cell">{user.name}</td>
//               <td className="user-table-cell">{user.notes.length}</td>
//               <td className="user-table-cell">
//                 {user.notes[user.notes.length - 1]?.creationDate || "N/A"}
//               </td>
//               <td className="user-table-cell">
//                 <PermissionDropdown
//                   currentPermission={user.permission || "Viewer"}
//                   onChange={(newPermission) =>
//                     onPermissionChange(user.name, newPermission)
//                   }
//                 />
//               </td>
//               <td className="user-table-cell">
//                 <button
//                   onClick={() => onUserSelect(user)}
//                   className="user-table-button"
//                 >
//                   View
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserTable;


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
        {/* Separate header to make it sticky */}
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
        
        {/* Scrollable body container */}
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