import { createContext, useContext, useState, useEffect } from "react";
import NewTask from "../components/NewTask";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSession } from "./auth";
import firebase from "firebase";

const storeContext = createContext({});

export const useStore = () => useContext(storeContext);

export const StoreWrapper = ({ children }) => {
  const { auth } = useSession();
  const [createTask, setCreateTask] = useState(false);

  function toggleCreateTask() {
    setCreateTask(!createTask);
  }

  async function getTasks() {
    const query = await firebase
      .firestore()
      .collection(`tasks`)
      .where("owner", "==", auth?.uid)
      .get();

    console.log(query);
  }

  useEffect(() => {
    if (auth?.uid) getTasks();
  }, [auth?.uid]);

  const [
    userTasks,
    loadingUserTasks,
    errorUserTasks,
  ] = useCollectionData(
    auth?.uid &&
      firebase
        .firestore()
        .collection(`tasks`)
        .where("owner", "==", auth.uid)
        .limit(5),
    { idField: "id" }
  );

  console.log(userTasks, loadingUserTasks, errorUserTasks);

  return (
    <storeContext.Provider
      value={{ createTask, toggleCreateTask, userTasks, loadingUserTasks }}
    >
      {children}
      <NewTask />
    </storeContext.Provider>
  );
};
