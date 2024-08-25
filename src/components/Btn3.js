import React from "react";
import BarChart from "./BarChart";
import { useSelector } from "react-redux";

const Btn3 = () => {
  const mostLiked = useSelector((state) => state.mostLiked);
  return (
    <div>
      <BarChart data={mostLiked} />
    </div>
  );
};

export default Btn3;
