import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundTicketData = await Ticket.findOne({ _id: id });

  return NextResponse.json({ foundTicketData }, { status: 200 });
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await Ticket.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Ticket deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting ticket", error },
      { status: 500 }
    );
  }
}
