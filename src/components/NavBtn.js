import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MockData from "../utils/MockData.json";
import { useDispatch } from "react-redux";
import {
  setCommentData,
  setLikeData,
  setMostLiked,
  setMostCommented,
} from "../utils/action";

const NavBtn = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { data } = MockData.business_discovery.media;
    dispatch(
      setCommentData(data.map((item) => item.comments_count).slice(0, 7))
    );
    dispatch(setLikeData(data.map((item) => item.like_count).slice(0, 7)));
    dispatch(
      setMostLiked(
        data
          .map((item) => item.like_count)
          .sort((a, b) => b - a)
          .slice(0, 7)
      )
    );
    dispatch(
      setMostCommented(
        data
          .map((item) => item.comments_count)
          .sort((a, b) => b - a)
          .slice(0, 7)
      )
    );
  }, [dispatch]);

  return (
    <div className="flex gap-4">
      <Link to={"/Btn1"}>
        <button className="p-2 hover:scale-105 text-white border-2 w-fit border-gray-800 rounded-full">
          Recent post vs comments
        </button>
      </Link>
      <Link to={"/Btn2"}>
        <button className="p-2 hover:scale-105 text-white border-2 w-fit border-gray-800 rounded-full">
          Recent post vs likes
        </button>
      </Link>
      <Link to={"/Btn3"}>
        <button className="p-2 hover:scale-105 text-white border-2 w-fit border-gray-800 rounded-full">
          Most Liked post
        </button>
      </Link>
      <Link to={"/Btn4"}>
        <button className="p-2 hover:scale-105 text-white border-2 w-fit border-gray-800 rounded-full">
          Most commented post
        </button>
      </Link>
    </div>
  );
};

export default NavBtn;
