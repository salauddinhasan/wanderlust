import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import DestinationCard from "./DestinationCard";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/featured`, {
    cache: "no-store",
  });
  const destinations = await res.json();

  return (
    <div className="mt-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-between p-5">
        <div>
          <h1>Featured Destinations</h1>
          <p>Handpicked travel experiences for the adventure seekers</p>
        </div>
        <div>
          <Link href={"/destinations"}>
            <Button
              variant="outline"
              className="border-2 border-teal-200 rounded-lg"
            >
              ALL DESTINATIONS
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4  gap-5">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
