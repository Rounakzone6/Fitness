import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { logo } from "../assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center max-w-[90%] mx-auto py-4 justify-between">
        <img src={logo} alt="logo" />
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaX /> : <FaBars />}
        </div>
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <li className="cursor-pointer hover:text-blue-500">Home</li>
          <li className="cursor-pointer hover:text-blue-500">Courses</li>
          <li className="cursor-pointer hover:text-blue-500">About</li>
          <li className="cursor-pointer hover:text-blue-500">Schedules</li>
          <li className="cursor-pointer hover:text-blue-500">Pricing</li>
          <li className="cursor-pointer hover:text-blue-500">Contact</li>
        </ul>
      </div>
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 text-lg font-medium px-6 pb-4">
          <li className="cursor-pointer hover:text-blue-500">Home</li>
          <li className="cursor-pointer hover:text-blue-500">Courses</li>
          <li className="cursor-pointer hover:text-blue-500">About</li>
          <li className="cursor-pointer hover:text-blue-500">Schedules</li>
          <li className="cursor-pointer hover:text-blue-500">Pricing</li>
          <li className="cursor-pointer hover:text-blue-500">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
