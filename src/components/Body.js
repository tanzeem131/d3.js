import React from "react";
import BarChart from "./BarChart";

const Body = ({ commentData }) => {
  return (
    <div>
      <BarChart data={commentData} />
    </div>
  );
};

export default Body;
