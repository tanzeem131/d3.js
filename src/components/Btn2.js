import React from "react";
import BarChart from "./BarChart";

const Btn2 = ({ likeData }) => {
  return (
    <div>
      <BarChart data={likeData} />
    </div>
  );
};

export default Btn2;
