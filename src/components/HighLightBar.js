import React from "react";

const HighLightBar = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center gap-8">
      <div className="text-3xl font-extrabold">Highlights</div>
      <div className="w-72 h-64 bg-[#F03AEC] rounded-xl transform -translate-x-6"></div>
      <div className="w-64 h-44 bg-[#29E2E7] rounded-xl transform translate-x-6"></div>
      <div className="w-80 h-72 bg-green-500 rounded-xl transform -translate-x-6"></div>
    </div>
  );
};

export default HighLightBar;
