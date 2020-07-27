import { useState } from "react";
import { useSession } from "../services/auth";
import Button from "./Button";
import ReactDOM from "react-dom";
import firebase from "firebase";
import { useStore } from "../services/store";
import Seo from "./Seo";
import { RiCloseLine } from "react-icons/ri";

export default function () {
  const { createTask, toggleCreateTask } = useStore();
  const [root] = useState(() => (process.browser ? document.body : null));
  const { auth } = useSession();
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    setIsLoading(true);
    await firebase.firestore().collection("tasks").add({
      title: title,
      owner: auth.uid,
      complete: false,
      createdAt: new Date().valueOf(),
      editedAt: new Date().valueOf(),
    });
    setTitle("");
    toggleCreateTask();
    setIsLoading(false);
  }

  if (root && createTask) {
    return ReactDOM.createPortal(
      <>
        <Seo titles={["Create Task", "Tasks"]} />
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-light container max-w-3xl">
          <div className="flex justify-end m-3">
            <button
              onClick={() => {
                setTitle("");
                toggleCreateTask();
              }}
            >
              <RiCloseLine size={30} />
            </button>
          </div>
          <input
            value={title}
            className="mt-3 md:mt-10 mb-5 bg-transparent border-none focus:outline-none p-0 rounded-none text-xl"
            placeholder="I want to..."
            onChange={(e) => setTitle(e.target.value)}
            disabled={isLoading}
          />
          <Button disabled={isLoading} onClick={handleSubmit}>
            Create
          </Button>
        </div>
      </>,
      root
    );
  }

  return null;
}
