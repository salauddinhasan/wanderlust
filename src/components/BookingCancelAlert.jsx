"use client";

import { AlertDialog, Button } from "@heroui/react";
import { FaDeleteLeft } from "react-icons/fa6";

export function BookingCancelAlert({ bookingId}) {
    console.log(bookingId)
  const handleCancelBooking = async () => {
    const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    alert("booking data delete successful");
    window.location.reload()
     
  };
  return (
    <AlertDialog>
      <Button variant="outline" className="text-red-500">
        <FaDeleteLeft /> Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> 
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={ handleCancelBooking} slot="close" variant="danger">
                Delete  
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
