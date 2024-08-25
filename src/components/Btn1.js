import React from "react";
import BarChart from "./BarChart";
import { useSelector } from "react-redux";

const Btn1 = () => {
  const commentData = useSelector((state) => state.commentData);
  return (
    <div>
      <BarChart data={commentData} />
    </div>
  );
};

export default Btn1;
