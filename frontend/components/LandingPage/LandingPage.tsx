"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      {session ? (
        <div className="flex justify-between items-center w-[350px] h-full">
          <div className="flex gap-3">
            <img
              src={session?.user?.image!}
              alt={session?.user?.name!}
              className="border p-2 rounded-full w-20 h-20"
            />
            <p className="text-base">{session?.user?.name}</p>
          </div>
          <button
            className="p-3 rounded-xl shadow-xl bg-red-700 hover:bg-red-800"
            onClick={() => signOut()}
          >
            Log out
          </button>
        </div>
      ) : (
        <button className="p-3 rounded-xl shadow-xl bg-gray-700 hover:bg-gray-800">
          <Link href="/login">Sign In</Link>
        </button>
      )}
    </div>
  );
};

export default LandingPage;
