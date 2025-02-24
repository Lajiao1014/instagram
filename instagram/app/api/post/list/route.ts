import { NextResponse } from "next/server";
import Post from "../../../db/Schema";
import mongoose from "mongoose";

export async function GET(request: Request) {


    mongoose.connect(process.env.MONGO_URI || '');

    const posts = await Post.find();

    return NextResponse.json({ posts: posts });
}        