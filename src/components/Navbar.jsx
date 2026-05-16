"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-100 bg-white shadow-sm">
      {/* Left - Nav Links */}
      <ul className="flex items-center gap-6 list-none">
        <li>
          <Link
            href="/"
            className="text-gray-600 hover:text-cyan-600 font-medium transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/destinations"
            className="text-gray-600 hover:text-cyan-600 font-medium transition-colors duration-200"
          >
            Destinations
          </Link>
        </li>
        <li>
          <Link
            href="/my-bookings"
            className="text-gray-600 hover:text-cyan-600 font-medium transition-colors duration-200"
          >
            My Bookings
          </Link>
        </li>
        <li>
          <Link
            href="/add-destination"
            className="text-gray-600 hover:text-cyan-600 font-medium transition-colors duration-200"
          >
            Add Destination
          </Link>
        </li>
      </ul>

      {/* Center - Logo */}
      <div className="flex items-center justify-center">
        <Image
          src="/assets/Wanderlast.png"
          height={150}
          width={150}
          alt="Wanderlust Logo"
          className="w-auto object-contain"
        />
      </div>

      {/* Right - Auth Links */}
      <ul className="flex items-center gap-4 list-none">
        <li>
          <Link
            href="/profile"
            className="text-gray-600 hover:text-cyan-600 font-medium transition-colors duration-200"
          >
            Profile
          </Link>
        </li>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <Image
                  src={user.image || "/assets/default-avatar.png"}  
                  className=" rounded-full border object-cover"
                  alt="user"
                  width={40}
                  height={40}
                />
                {/* <span className="font-medium">{user.name}</span>{" "} */}
                <button
                  onClick={handleLogout}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full transition-colors duration-200"
                >
                  Logout
                </button>
                {/* ✅ displayName → name */}
              </div>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-600 hover:text-cyan-600">
                Login
              </Link>

              <Link
                href="/signup"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full transition-colors duration-200"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
