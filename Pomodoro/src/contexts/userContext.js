import { createContext, useState, useContext } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setNewUser = (user) => {
    setUser(user);
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setNewUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
export const useUserContext = () => useContext(UserContext);
