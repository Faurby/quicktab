import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center py-20 px-4">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Welcome to
        </h1>
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Quicktab
        </h1>
      </div>
      <div className="space-x-4">
        <Link
          to="/new"
          className="relative inline-block text-lg font-semibold text-white px-6 py-3 rounded-lg overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-500 hover:brightness-110 hover:scale-105"
        >
          ➕ New Menu
        </Link>
        <Link
          to="/load"
          className="relative inline-block text-lg font-semibold text-white px-6 py-3 rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-500 hover:brightness-110 hover:scale-105"
        >
          📂 Load Existing Menu
        </Link>
      </div>
    </div>
  );
};

export default Home;
