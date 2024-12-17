"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        if (res.ok) {
            router.push("/auth/signin");
        } else {
            alert("Signup failed");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl mb-4">Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2" />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2" />
                <button type="submit" className="bg-green-500 text-white py-2 px-4">Sign Up</button>
            </form>
        </div>
    );
}
