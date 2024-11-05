import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <img
        src="/src/assets/rocket.png"
        alt="Placeholder Image"
        className="w-1/2 md:w-1/4 rounded-lg"
      />
      <button
        className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
        onClick={() => (window.location.href = "https://discord.gg/ckNy9GeK")}
      >
        Join Discord
      </button>
    </div>
  );
};

export default Home;
