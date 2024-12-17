"use client";

import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <div className="p-8">
      <h1>Welcome to the App</h1>
      <button onClick={() => signOut()} className="bg-red-500 text-white py-2 px-4 mt-4">Sign Out</button>
    </div>
  );
}
