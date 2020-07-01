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
        <p>
          Don’t have an account?{" "}
          <a className="link" href="/beta">
            Get Started
          </a>
        </p>
        <div className="py-5">
          <Button onClick={googleLoginHandler}>
            <FaGoogle className="mr-2" /> Google
          </Button>
        </div>
      </div>
    </div>
  );
}
