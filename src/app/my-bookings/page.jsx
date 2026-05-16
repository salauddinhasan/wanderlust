import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
      headers: await headers(),
    });

  const user = session?.user;

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/booking/${user?.id}`,  {
     headers: {
      authorization: `Bearer ${token}`
     }
  });

  const bookings = await res.json();

  return (
    <div className="max-w-6xl mx-auto px-4 ">
      <h1 className="text-3xl font-bold mb-2">My Bookings</h1>

      <p className="text-gray-500 mb-8">Manage and view your travel bookings</p>

      <div className="space-y-8 p-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="border rounded-2xl p-4 flex flex-col md:flex-row gap-5 shadow-sm"
          >
            <Image
              src={booking.imageUrl}
              alt={booking.destinationName}
              width={250}
              height={200}
              className="rounded-xl object-cover"
            />

            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">
                {booking.destinationName}
              </h2>

              <p className="text-gray-600">Date: {booking.departureDate}</p>

              <p className="text-gray-600">Booking ID: {booking._id}</p>

              <p className="text-cyan-600 font-bold text-lg mt-2">
                ${booking.price}
              </p>

              <div className="mt-4">
                <BookingCancelAlert bookingId={booking._id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;
