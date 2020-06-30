import Head from "next/head";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <div className="px-2">
      <Seo
        titles={["Tiny Task", "Coming Soon"]}
        desc="We are under development but you can expect that we will have an awesome
        product ready soon."
      />
      <div className="container mx-auto mt-20 bg-blue-200 grid md:grid-cols-2 p-5 md:p-10 rounded-lg items-center">
        <div>
          <h1 className="mb-4">Simplify your life.</h1>
          <h5>
            Regain clarity and calmness by getting all those tasks out of your
            head and onto your to-do list (no matter where you are or what
            device you use).
          </h5>
        </div>
        <div>
          <img
            className="w-full mt-5 md:m-0"
            style={{ maxHeight: 400 }}
            src="./tinytask.svg"
          />
        </div>
      </div>
    </div>
  );
}
