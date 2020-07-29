import Button from "./Button";
import firebase from "firebase";
import moment from "moment";
import { RiCheckboxCircleLine, RiCheckbox } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import CheckIcon from "./CheckIcon";

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
    <div className="flex py-3 items-center hover:bg-blue-100 px-2 rounded">
      <CheckIcon complete={complete} onClick={handleComplete} />
      <div className="flex-grow">
        <h6>{title}</h6>
      </div>
      <p className="text-xs text-gray-600">{moment(createdAt).fromNow()}</p>
    </div>
  );
}
