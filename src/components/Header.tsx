import { Link } from "react-router-dom";
import logo from "../assets/QD_logo.svg"; // Adjust path if needed

const Header = () => {
  return (
    <header className="p-4 flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Quicktab Logo" className="h-10" />
        <span className="text-xl font-bold text-gray-800">QuickTab</span>
      </Link>
    </header>
  );
};

export default Header;
