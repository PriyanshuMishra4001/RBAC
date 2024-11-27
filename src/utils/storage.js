export const getStoredUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : null;
  };
  
  export const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };
  