import { createContext, useContext, useState } from "react";
import NewTask from "../components/NewTask";

const storeContext = createContext({});

export const useStore = () => useContext(storeContext);

export const StoreWrapper = ({ children }) => {
  const [createTask, setCreateTask] = useState(false);

  function toggleCreateTask() {
    setCreateTask(!createTask);
  }

  return (
    <storeContext.Provider value={{ createTask, toggleCreateTask }}>
      {children}
      <NewTask />
    </storeContext.Provider>
  );
};
