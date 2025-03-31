import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);

    return NextResponse.json(
      { message: "Ticket created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating ticket", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  console.log("Fetching tickets");
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching tickets", error },
      { status: 500 }
    );
  }
}
