import { RiLoader5Line } from "react-icons/ri";

export default function Loading() {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center">
      <RiLoader5Line size={30} className="loader" />
      <h6 className="mt-3">Loading</h6>
    </div>
  );
}
