import Link from "next/link";
import {
  RiAddBoxLine,
  RiCalendar2Line,
  RiDashboardLine,
  RiTaskLine,
} from "react-icons/ri";

export default function Navbar({ title }) {
  return (
    <div className="container max-w-3xl flex mt-3 md:mt-10 mb-5 items-center">
      <h5 className="flex-grow">{title}</h5>
      <div className="grid-flow-col gap-3 border-t sm:border-none items-center absolute bottom-0 right-0 left-0 bg-light grid justify-center sm:relative">
        <Link href="/app">
          <a className="px-5 pt-3 pb-5 sm:p-2">
            <RiDashboardLine size={25} />
          </a>
        </Link>
        <Link href="/app/calendar">
          <a className="px-5 pt-3 pb-5 sm:p-2">
            <RiCalendar2Line size={25} />
          </a>
        </Link>
        <Link href="/app/tasks">
          <a className="px-5 pt-3 pb-5 sm:p-2">
            <RiTaskLine size={25} />
          </a>
        </Link>
        <button className="px-5 pt-3 pb-5 sm:p-2">
          <RiAddBoxLine size={25} />
        </button>
      </div>
      {/* <button onClick={logoutHandler}>Logout</button> */}
    </div>
  );
}
