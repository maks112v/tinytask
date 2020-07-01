import { useState } from "react";
import { useSession } from "../services/auth";
import Button from "./Button";

import firebase from "firebase";

export default function () {
  const { auth } = useSession();
  const [title, setTitle] = useState("");

  function handleSubmit() {
    return firebase.firestore().collection("tasks").add({
      title: title,
      owner: auth.uid,
      complete: false,
      createdAt: new Date().valueOf(),
      editedAt: new Date().valueOf(),
    });
  }
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button onClick={handleSubmit}>Create</Button>
    </div>
  );
}
