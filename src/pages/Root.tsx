import React from "react";
import { useOutlet } from "react-router-dom";
import Home from "./Home";

function Root() {
  const outlet = useOutlet();
  return <> {outlet || <Home />}</>;
}

export default Root;
