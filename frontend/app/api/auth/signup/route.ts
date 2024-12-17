import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { name, email, password } = await request.json();

    if (!email || !password) {
        return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword,
            },
        });

        return NextResponse.json({ user }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }
}
