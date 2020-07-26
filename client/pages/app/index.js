import { withAuth, useSession, logoutHandler } from "../../services/auth";
import NewTask from "../../components/NewTask";
import { useEffect, useState } from "react";
import firebase from "firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Task from "../../components/Task";
import moment from "moment";
import { RiAddBoxLine, RiDashboardLine } from "react-icons/ri";
import greet from "greeting-time";
import Navbar from "../../components/Navbar";

const filters = [
  {
    name: "2 Weeks",
    filter: moment().subtract(2, "weeks").valueOf(),
  },
  {
    name: "10 Min",
    filter: moment().subtract(10, "minute").valueOf(),
  },
];

function TasksPage() {
  const { auth, profile } = useSession();

  const [currentFilter, setCurrentFilter] = useState(0);

  const [
    data,
    dataLoading,
    dataError,
  ] = useCollectionData(
    firebase
      .firestore()
      .collection(`tasks`)
      .where("owner", "==", auth.uid)
      .where("createdAt", ">=", filters[currentFilter].filter)
      .orderBy("createdAt", "desc"),
    { idField: "id" }
  );

  console.log(dataError);

  return (
    <>
      <Navbar />
      {/* <div className="container">
        <NewTask />
        <div>
          {filters.map((filter, index) => (
            <button onClick={() => setCurrentFilter(index)}>
              {filter.name}
            </button>
          ))}
        </div>
        {dataLoading ? (
          <div>loading</div>
        ) : data.length ? (
          data.map((item) => <Task {...item} />)
        ) : (
          <div>No Tasks </div>
        )}
      </div> */}
    </>
  );
}

export default withAuth(TasksPage);
