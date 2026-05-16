import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { TbCalendarRepeat } from "react-icons/tb";
import { MdOutlineAttachMoney } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { EditModal } from "@/components/EditModal";
import { DeleteAlert } from "@/components/DeleteAlert";
import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/destination/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
      // authorization: 'logged in'
    },
  });
  const destination = await res.json();
  const {
    destinationName,
    country,
    duration,
    departureDate,
    imageUrl,
    description,
    price,
    category,
  } = destination;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-end gap-2 pb-5">
        <EditModal destination={destination} />
        <DeleteAlert destination={destination} />
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-xl">
        <Image
          src={imageUrl}
          fill
          className="object-cover"
          alt={destinationName}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Overlay Text */}
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-1 text-sm text-white/80 mb-1">
            <CiLocationOn size={18} />
            <p>{country}</p>
          </div>
          <h1 className="text-4xl font-black">{destinationName}</h1>
          {category && (
            <span className="mt-2 inline-block bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
          )}
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center gap-1">
          <MdOutlineAttachMoney size={28} className="text-cyan-500" />
          <p className="text-xs text-gray-400">Price</p>
          <p className="text-lg font-bold text-gray-800">${price}</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center gap-1">
          <IoCalendarNumberSharp size={24} className="text-cyan-500" />
          <p className="text-xs text-gray-400">Duration</p>
          <p className="text-lg font-bold text-gray-800">{duration} Days</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center gap-1">
          <TbCalendarRepeat size={24} className="text-cyan-500" />
          <p className="text-xs text-gray-400">Departure</p>
          <p className="text-lg font-bold text-gray-800">{departureDate}</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center gap-1">
          <HiOutlineUserGroup size={24} className="text-cyan-500" />
          <p className="text-xs text-gray-400">Nights</p>
          <p className="text-lg font-bold text-gray-800">
            {duration - 1} Nights
          </p>
        </div>
      </div>

      {/* Description & Book */}
      <div className="mt-8 bg-white rounded-3xl shadow p-8 flex flex-col md:flex-row gap-8 items-start">
        {/* Description */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            About This Trip
          </h2>
          <p className="text-gray-500 leading-relaxed">{description}</p>
        </div>

        {/* Book Box */}
        <div>
          <BookingCard destination={destination} />
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
