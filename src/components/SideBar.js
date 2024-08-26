import React from "react";

const SideBar = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col items-center py-4 px-8">
      <div className="mb-8 text-3xl font-extrabold">User Name</div>
      <button className="w-full py-3 mb-4 bg-gray-800 hover:bg-gray-700 rounded-md">
        Home
      </button>
      <button className="w-full py-3 mb-4 bg-gray-800 hover:bg-gray-700 rounded-md">
        Explore
      </button>
      <button className="w-full py-3 mb-4 bg-gray-800 hover:bg-gray-700 rounded-md">
        Notifications
      </button>
      <button className="w-full py-3 mb-4 bg-gray-800 hover:bg-gray-700 rounded-md">
        Messages
      </button>
      <button className="w-full py-3 mb-4 bg-gray-800 hover:bg-gray-700 rounded-md">
        Profile
      </button>
      <button className="w-full py-3 mb-4 bg-gray-800 hover:bg-gray-700 rounded-md">
        Settings
      </button>
    </div>
  );
};

export default SideBar;
