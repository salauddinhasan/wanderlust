import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-extrabold text-teal-500 drop-shadow-[0_0_15px_rgba(20,184,166,0.3)] animate-pulse">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-4 text-gray-800 dark:text-gray-100">
        Page Not Found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md">
        Oops! The destination you are looking for doesnt exist or has been moved
        to another coordinate.
      </p>

      <div className="mt-8">
        <Link href="/">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
