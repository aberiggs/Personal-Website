import React, { createContext, useState } from "react";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <UserContext.Provider
      value={{
        showModal,
        setShowModal
      }}
    >
      {children}
    </UserContext.Provider>
  );
};