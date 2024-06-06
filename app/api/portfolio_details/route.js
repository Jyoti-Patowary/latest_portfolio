import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/app/utils/db";

export const GET = async (req) => {
  try {
    
    const db = await connectToDatabase();

    const collection = db.collection('case-studies');
    const data = await collection.find().toArray();

    // console.log(data);

    return NextResponse.json({ result: data }, { status: 200 });
   } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.error({ error: "Internal Server Error", status: 500 });
  }
  
};
