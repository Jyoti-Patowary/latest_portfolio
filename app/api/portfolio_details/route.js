import { NextResponse } from "next/server";
import connectToDatabase from "@/app/utils/db";
import { fallbackProjects } from "@/app/data/portfolioData";

export const dynamic = "force-dynamic";

export const GET = async () => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("case-studies");
    const data = await collection.find().toArray();

    if (data && data.length > 0) {
      // Normalize MongoDB _id and ensure image paths are clean
      const normalizedData = data.map((item) => ({
        ...item,
        _id: item._id?.toString?.() || String(item._id),
      }));

      return NextResponse.json(
        { result: normalizedData },
        {
          status: 200,
          headers: {
            "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
          },
        }
      );
    }

    return NextResponse.json(
      { result: fallbackProjects },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch (error) {
    // Graceful fallback to rich local datasets on DB timeout or network isolation
    return NextResponse.json(
      { result: fallbackProjects },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  }
};
