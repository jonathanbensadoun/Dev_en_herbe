import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <h1 className="text-3xl text-white font-bold py-4">
        Welcome to Dev En Herbe !
      </h1>
      <img
        src="rocket.png"
        alt="image d'un astronaute sur une fusée"
        className="w-1/2 md:w-1/4 rounded-lg"
      />
      <button
        className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
        onClick={() => (window.location.href = "https://discord.gg/ySk47pwBVy")}
      >
        Join Discord
      </button>
    </div>
  );
};

export default Home;
