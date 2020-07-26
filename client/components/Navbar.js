import greet from "greeting-time";
import { RiAddBoxLine, RiDashboardLine } from "react-icons/ri";
import { useSession } from "../services/auth";
import Link from "next/link";

export default function Navbar() {
  const { profile } = useSession();

  return (
    <div className="container flex mt-10 mb-5 items-center">
      <h5 className="flex-grow">
        {greet(new Date())} {profile?.name}
      </h5>
      <div className="flex items-center">
        <Link href="/app">
          <a className="mr-2">
            <RiDashboardLine size={25} />
          </a>
        </Link>
        <button>
          <RiAddBoxLine size={25} />
        </button>
      </div>
      {/* <button onClick={logoutHandler}>Logout</button> */}
    </div>
  );
}
