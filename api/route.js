import { connectMongoDB } from "@/app/mongodb";

export async function GET(req) {
  try {
    await connectMongoDB();
    return new Response("MongoDB Connected Successfully!", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to connect to MongoDB", { status: 500 });
  }
}
