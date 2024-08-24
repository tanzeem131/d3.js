import React from "react";
import BarChart from "./BarChart";

const Btn4 = ({ mostCommented }) => {
  return (
    <div>
      <BarChart data={mostCommented} />
    </div>
  );
};

export default Btn4;
