import Navbar from "../../components/Navbar";
import { withAuth } from "../../services/auth";
import Seo from "../../components/Seo";
import Task from "../../components/Task";
import { useStore } from "../../services/store";

function Tasks() {
  const { userTasks } = useStore();
  return (
    <div>
      <Seo titles={["What to do", "Tasks"]} />
      <Navbar title="Tasks" />
      <div className="container max-w-3xl">
        {userTasks?.map((item) => (
          <Task {...item} />
        ))}
      </div>
    </div>
  );
}

export default withAuth(Tasks);
