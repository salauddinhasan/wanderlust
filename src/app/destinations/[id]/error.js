"use client";

import { useEffect } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-full text-red-500 animate-bounce mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Something Went Wrong!
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto">
        An error occurred while loading this page. Dont worry, its not your
        fault. You can try reloading the page.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          onClick={() => reset()}
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1"
        >
          Try Again
        </Button>

        <Link href="/">
          <Button
            variant="outline"
            className="border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
          >
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
