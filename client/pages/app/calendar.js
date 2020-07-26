import Navbar from "../../components/Navbar";
import { withAuth } from "../../services/auth";
import Seo from "../../components/Seo";

function Calendar() {
  return (
    <div>
      <Seo titles={["Calendar", "Tasks"]} />
      <Navbar title="Calendar" />
    </div>
  );
}

export default withAuth(Calendar);
