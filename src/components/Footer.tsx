import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed right-2 bottom-4 text-2xl">
      <Link
        to="/about"
        className="px-4 py-2 border-2 border-gray-800 rounded-2xl hover:bg-gray-100 transition-all"
      >
        ?
      </Link>
    </div>
  );
};

export default Footer;
