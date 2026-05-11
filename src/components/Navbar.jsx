import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-100 bg-white shadow-sm">
      {/* Left - Nav Links */}
      <ul className="flex items-center gap-6">
        <Link href="/">
          <li className="text-gray-600 hover:text-cyan-600 cursor-pointer font-medium transition-colors duration-200 list-none">
            Home
          </li>
        </Link>
        <Link href="/destinations">
          <li className="text-gray-600 hover:text-cyan-600 cursor-pointer font-medium transition-colors duration-200 list-none">
            Destinations
          </li>
        </Link>
        <Link href="/bookings">
          <li className="text-gray-600 hover:text-cyan-600 cursor-pointer font-medium transition-colors duration-200 list-none">
            My Bookings
          </li>
        </Link>
        <Link href="/add-destination">
          <li className="text-gray-600 hover:text-cyan-600 cursor-pointer font-medium transition-colors duration-200 list-none">
            Add Destination
          </li>
        </Link>
      </ul>

      {/* Center - Logo */}
      <div className="flex items-center justify-center">
        <Image
          src="/assets/Wanderlast.png"
          height={150}
          width={150}
          alt="Wanderlust Logo"
          className="  w-auto object-contain"
        />
      </div>

      {/* Right - Auth Links */}
      <ul className="flex items-center gap-4">
        <Link href="/profile">
          <li className="text-gray-600 hover:text-cyan-600 cursor-pointer font-medium transition-colors duration-200 list-none">
            Profile
          </li>
        </Link>
        <Link href="/login">
          <li className="text-gray-600 hover:text-cyan-600 cursor-pointer font-medium transition-colors duration-200 list-none">
            Login
          </li>
        </Link>
        <Link href="/signup">
          <li className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full cursor-pointer font-medium transition-colors duration-200 list-none">
            Sign Up
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
