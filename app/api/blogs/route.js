import { NextResponse } from "next/server";
import connectToDatabase from "@/app/utils/db";
import { fallbackBlogs } from "@/app/data/portfolioData";

export const dynamic = "force-static";
export const revalidate = 3600;

export const GET = async () => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("blogs");
    const data = await collection.find().toArray();

    if (data && data.length > 0) {
      return NextResponse.json(
        { result: data },
        {
          status: 200,
          headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
        }
      );
    }
    return NextResponse.json(
      { result: fallbackBlogs },
      {
        status: 200,
        headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { result: fallbackBlogs },
      {
        status: 200,
        headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
      }
    );
  }
};
