import React from "react";
import { useParams } from "react-router-dom";

function Verse() {
  const params = useParams();
  console.log("params", params);
  return <div>Verse</div>;
}

export default Verse;
