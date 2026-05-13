import React, { createContext, useContext, useState } from "react";

// ❌ BAD PATTERN — everything in one context
// Any change to filters, pagination, or theme re-renders ALL consumers

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [user] = useState({ name: "Roshini", role: "Engineer" });

  return (
    <AppContext.Provider
      value={{ theme, setTheme, filter, setFilter, page, setPage, user }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
