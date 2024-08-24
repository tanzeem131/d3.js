import React from "react";
import BarChart from "./BarChart";

const Btn1 = ({ commentData }) => {
  console.log(commentData);
  return (
    <div>
      <BarChart data={commentData} />
    </div>
  );
};

export default Btn1;
