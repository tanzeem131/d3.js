import React from "react";
import BarChart from "./BarChart";
import { useSelector } from "react-redux";

const Btn2 = () => {
  const likeData = useSelector((state) => state.likeData);
  return (
    <div>
      <BarChart data={likeData} />
    </div>
  );
};

export default Btn2;
