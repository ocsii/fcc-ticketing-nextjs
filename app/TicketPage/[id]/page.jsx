import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch ticket");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      id: "",
      title: "",
      description: "",
      status: "open",
      priority: "low",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  return <TicketForm />;
};

export default TicketPage;
