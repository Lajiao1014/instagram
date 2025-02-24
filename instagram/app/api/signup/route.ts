import { NextResponse } from "next/server";
import User from "../../db/Schema";
import mongoose from "mongoose";
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password, fullName, lastName } = body;

        // 基本驗證
        if (!username || !password || !fullName || !lastName) {
            return NextResponse.json(
                { error: '所有欄位都是必填的' },
                { status: 400 }
            );
        }

        if (!mongoose.connection.readyState) {
            try {
                console.log('Connecting to MongoDB...', process.env.MONGO_URI);
                await mongoose.connect(process.env.MONGO_URI || '');
                console.log('Successfully connected to MongoDB');
            } catch (error) {
                console.error('MongoDB connection error:', error);
                throw error;
            }
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return NextResponse.json(
                { error: '此電子郵件已被註冊' },
                { status: 409 }
            );
        }

        const newUser = await User.create({
            username: username,
            password: password,
            firstName: fullName,
            lastName: lastName,
            createdAt: new Date()
        });

        return NextResponse.json(
            {
                message: '註冊成功',
                user: {
                    id: newUser._id,
                    lastname: newUser.lastname,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                }
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('註冊錯誤：', error);
        return NextResponse.json(
            { error: '註冊過程中發生錯誤' },
            { status: 500 }
        );
    }
}       