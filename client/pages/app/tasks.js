import Navbar from "../../components/Navbar";
import { withAuth } from "../../services/auth";
import Seo from "../../components/Seo";

function Tasks() {
  return (
    <div>
      <Seo titles={["What to do", "Tasks"]} />
      <Navbar title="Tasks" />
    </div>
  );
}

export default withAuth(Tasks);
