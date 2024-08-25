import React from "react";
import BarChart from "./BarChart";
import { useSelector } from "react-redux";

const Btn4 = () => {
  const mostCommented = useSelector((state) => state.mostCommented);
  return (
    <div>
      <BarChart data={mostCommented} />
    </div>
  );
};

export default Btn4;
