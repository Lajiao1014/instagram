import { NextResponse } from "next/server";
import User from "../../db/Schema";
import mongoose from "mongoose";

export async function POST(request: Request) {
    try {
        // 確保資料庫連接
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

        // 解析請求體
        const body = await request.json();
        const { username, password, firstName, lastName } = body;

        // 基本驗證
        if (!username || !password || !firstName || !lastName) {
            return NextResponse.json(
                { error: '所有欄位都必須填寫' },
                { status: 400 }
            );
        }

        // 檢查電子郵件是否已存在
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return NextResponse.json(
                { error: '此電子郵件已被註冊' },
                { status: 409 }
            );
        }

        // 創建新用戶
        const newUser = await User.create({
            username,
            password,
            firstName,
            lastName,
            createdAt: new Date()
        });

        return NextResponse.json(
            {
                message: '註冊成功',
                user: {
                    id: newUser._id,
                    username: newUser.username,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName
                }
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('註冊錯誤:', error);
        return NextResponse.json(
            { error: '註冊過程中發生錯誤' },
            { status: 500 }
        );
    }
}       