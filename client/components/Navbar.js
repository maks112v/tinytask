import Link from "next/link";
import {
  RiAddBoxLine,
  RiCalendar2Line,
  RiDashboardLine,
  RiTaskLine,
} from "react-icons/ri";
import { useStore } from "../services/store";

export default function Navbar({ title }) {
  const { toggleCreateTask } = useStore();

  return (
    <div className="container max-w-3xl flex mt-5 md:mt-10 mb-5 items-center">
      <h5 className="flex-grow">{title}</h5>
      <div className="grid-flow-col gap-3 border-t sm:border-none items-center absolute bottom-0 right-0 left-0 bg-light grid justify-center sm:relative">
        <Link href="/app">
          <a className="px-5 pt-3 pb-5 sm:p-2 hover:opacity-75">
            <RiDashboardLine size={25} />
          </a>
        </Link>
        <Link href="/app/calendar">
          <a className="px-5 pt-3 pb-5 sm:p-2 hover:opacity-75">
            <RiCalendar2Line size={25} />
          </a>
        </Link>
        <Link href="/app/tasks">
          <a className="px-5 pt-3 pb-5 sm:p-2 hover:opacity-75">
            <RiTaskLine size={25} />
          </a>
        </Link>
        <button
          onClick={toggleCreateTask}
          className="px-5 pt-3 pb-5 sm:p-2 hover:opacity-75"
        >
          <RiAddBoxLine size={25} />
        </button>
      </div>
      {/* <button onClick={logoutHandler}>Logout</button> */}
    </div>
  );
}
