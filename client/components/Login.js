import { FaGoogle } from "react-icons/fa";
import Seo from "./Seo";
import { googleLoginHandler } from "../services/auth";
import Button from "./Button";

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Seo titles={["Login", "My.Church"]} />
      <div className="text-center w-full max-w-xs p-2">
        <h1 className="text-4xl md:text-5xl">Sign In</h1>
        <p>Let's get you up and running...</p>
        <div className="py-5">
          <Button onClick={googleLoginHandler}>
            <FaGoogle className="mr-2" /> Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
