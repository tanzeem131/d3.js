import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MockData from "../utils/MockData.json";

const NavBtn = () => {
  const [commentData, setCommentData] = useState(
    MockData.business_discovery.media.data
      .map((item) => item.comments_count)
      .slice(0, 7)
  );
  const [likeData, setLikeData] = useState(
    MockData.business_discovery.media.data
      .map((item) => item.like_count)
      .slice(0, 7)
  );
  const [mostLiked, setMostLiked] = useState(
    MockData.business_discovery.media.data
      .map((item) => item.like_count)
      .sort((a, b) => b - a)
      .slice(0, 7)
  );
  const [mostCommented, setMostCommented] = useState(
    MockData.business_discovery.media.data
      .map((item) => item.like_count)
      .sort((a, b) => b - a)
      .slice(0, 7)
  );

  return (
    <div className="mt-8 flex gap-4 justify-center">
      <button
        className="p-1 hover:bg-orange-400 border-2 border-orange-900 rounded-full"
        onClick={() =>
          setCommentData(commentData.filter((value) => value > 4000))
        }
      >
        <Link to={"/Btn1"}>Most commented post</Link>
      </button>
      <button
        className="p-1 hover:bg-orange-500 border-2 border-orange-900 rounded-full"
        onClick={() => setLikeData(likeData.filter((value) => value > 400000))}
      >
        <Link to={"/Btn2"}>Most liked post</Link>
      </button>
      <button
        className="p-1 hover:bg-orange-400 border-2 border-orange-900 rounded-full"
        onClick={() => setMostLiked(mostLiked.filter((value) => value > 4000))}
      >
        <Link to={"/Btn3"}>Most recent commented post</Link>
      </button>
      <button
        className="p-1 hover:bg-orange-500 border-2 border-orange-900 rounded-full"
        onClick={() =>
          setMostCommented(mostCommented.filter((value) => value > 400000))
        }
      >
        <Link to={"/Btn4"}>Most recent liked post</Link>
      </button>
    </div>
  );
};

export default NavBtn;
