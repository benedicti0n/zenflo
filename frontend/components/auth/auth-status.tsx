"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AuthStatus() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <Button variant="outline" onClick={() => signOut()}>
                Sign In
            </Button>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
                        <AvatarFallback>{session.user?.name?.charAt(0) || "?"}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem className="flex-col items-start">
                    <div className="text-sm font-medium">{session.user?.name}</div>
                    <div className="text-xs text-gray-500">{session.user?.email}</div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                    Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}