import { withAuth, useSession, logoutHandler } from "../../services/auth";
import NewTask from "../../components/NewTask";
import { useEffect, useState } from "react";
import firebase from "firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Task from "../../components/Task";
import moment from "moment";
import {
  RiAddBoxLine,
  RiDashboardLine,
  RiCalendarEventLine,
  RiCheckLine,
} from "react-icons/ri";
import greet from "greeting-time";
import Navbar from "../../components/Navbar";
import Seo from "../../components/Seo";
import InfoTab from "../../components/InfoTab";
import { useStore } from "../../services/store";

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
  const { userTasks } = useStore();

  return (
    <>
      <Seo titles={["Dashboard", "Tasks"]} />
      <Navbar title={`${greet(new Date())}`} />
      <div
        className="container max-w-3xl grid gap-5"
        style={{ gridTemplateColumns: `repeat(auto-fill, minmax(300px, 1fr))` }}
      >
        <InfoTab
          title="Todo Tasks"
          subtitle={`55 Total Tasks • 4 Upcoming Tasks`}
          icon={RiCheckLine}
          bgColor="#E5E8F8"
          color="#5264CC"
          link="tasks"
        />
        <InfoTab
          title="Calendar Events"
          subtitle={`89 Total Events • 2 Upcoming Events`}
          icon={RiCalendarEventLine}
          bgColor="#FDE6E8"
          color="#F25562"
          link="calendar"
        />
      </div>
      <div
        className="container max-w-3xl grid gap-5"
        style={{ gridTemplateColumns: `repeat(auto-fill, minmax(300px, 1fr))` }}
      >
        <div>
          {userTasks?.map((item) => (
            <Task {...item} />
          ))}
        </div>
      </div>
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
