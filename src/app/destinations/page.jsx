import DestinationCard from "@/components/DestinationCard";
import React from "react";

const DestinationPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/destination`, {
    cache: 'no-store'
  });
  const destinations = await res.json();

  return (
    <div className="max-w-7xl mx-auto p-3">
      <h1 className="text-3xl font-bold py-5 text-gray-700">DestinationPage</h1>

      <div className="grid grid-cols-4 items-center gap-5">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination}/>
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
