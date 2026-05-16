import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { TbCalendarRepeat } from "react-icons/tb";

const DestinationCard = ({ destination }) => {
  const {
    _id,
    destinationName,
    country,
    duration,
    departureDate,
    imageUrl,
    description,
    price,
  } = destination;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <Image
          src={imageUrl?.trim()}
          fill
          sizes="100vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          alt={destinationName}
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {duration} Days
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        {/* Location */}
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <CiLocationOn size={18} />
          <p>{country}</p>
        </div>

        {/* Name & Price */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-gray-800">{destinationName}</h1>
          <p className="text-cyan-500 font-bold text-lg">${price}</p>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <IoCalendarNumberSharp className="text-cyan-500" />
          <p>
            {duration} Days / {duration - 1} Nights
          </p>
        </div>

        {/* Departure */}
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <TbCalendarRepeat className="text-cyan-500" />
          <p>Departure: {departureDate}</p>
        </div>

        {/* Button */}
        <Link href={`/destinations/${_id}`}>
          <Button className="w-full bg-gradient-to-r  text-white font-semibold rounded-xl mt-1 hover:opacity-90 transition-opacity">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
