import Button from "./Button";
import firebase from "firebase";
import moment from "moment";

export default function Task({ id, title, createdAt, complete }) {
  function handleComplete() {
    return firebase
      .firestore()
      .collection(`tasks`)
      .doc(id)
      .update({ complete: !complete, editedAt: new Date().valueOf() });
  }
  function handleDelete() {
    return firebase.firestore().collection(`tasks`).doc(id).delete();
  }
  return (
    <div>
      <h6>{title}</h6>
      <div>{complete ? "done" : "no finished"}</div>
      <div>{moment(createdAt).fromNow()}</div>
      <Button onClick={handleComplete}>Complete</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
}
