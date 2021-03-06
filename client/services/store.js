import firebase from 'firebase';
import { createContext, useContext, useEffect, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import NewTask from '../components/NewTask';
import { useSession } from './auth';

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
      .where('owner', '==', auth?.uid)
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
        .where('owner', '==', auth.uid)
        .orderBy('complete', 'asc')
        .orderBy('title', 'asc'),
    { idField: 'id' }
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
