import Head from "next/head";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Seo
        titles={["Tiny Task", "Coming Soon"]}
        desc="We are under development but you can expect that we will have an awesome
        product ready soon."
      />
      <h3>Tiny Task</h3>
      <p>
        We are under development but you can expect that we will have an awesome
        product ready soon.
      </p>
    </div>
  );
}
