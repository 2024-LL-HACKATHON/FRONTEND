import React from "react";
import { useOutlet } from "react-router-dom";
import Landing from "./Landing/Landing";

function Home() {
  const outlet = useOutlet();
  return <> {outlet || <Landing />}</>;
}

export default Home;
