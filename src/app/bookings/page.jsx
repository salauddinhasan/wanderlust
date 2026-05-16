"use client";

import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import Image from "next/image";

const ProfilePage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await authClient.getSession();
        if (!session?.data?.user) {
          router.push("/login"); // লগইন না থাকলে রিডাইরেক্ট করবে
        } else {
          setUser(session.data.user);
        }
      } catch (error) {
        console.error("Session fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [router]);

  const handleLogout = async () => {
    await authClient.signOut();
    alert("Logged out successfully!");
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-xl text-gray-500 animate-pulse">
          Loading profile...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>

        {user ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-cyan-400 shadow-md">
              <Image
                src={
                  user.image ||
                  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                }
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-2">
              <h2 className="text-xl font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-gray-500 text-sm mt-1">{user.email}</p>
            </div>

            <hr className="w-full my-4 border-gray-200" />

            <Button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 rounded-xl transition-all duration-200"
            >
              Log Out
            </Button>
          </div>
        ) : (
          <p className="text-gray-500">No user data available.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
