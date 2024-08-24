import React from "react";
import BarChart from "./BarChart";

const Btn3 = ({ mostLiked }) => {
  return (
    <div>
      <BarChart data={mostLiked} />
    </div>
  );
};

export default Btn3;
