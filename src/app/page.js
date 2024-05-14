import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Design from "./components/design";
import Team from "./components/team";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Design></Design>
      <Team></Team>
    </>
  );
}
