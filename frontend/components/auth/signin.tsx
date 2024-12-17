"use client";

import { signIn } from "next-auth/react";
import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignIn() {
    return (
        <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
            <Card className="w-[350px]">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Welcome back</CardTitle>
                    <CardDescription>
                        Choose your preferred sign in method
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <Button
                        variant="outline"
                        onClick={() => signIn("github", { callbackUrl: "/" })}
                        className="w-full"
                    >
                        <Github className="mr-2 h-4 w-4" />
                        Github
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => signIn("google", { callbackUrl: "/" })}
                        className="w-full"
                    >
                        <Mail className="mr-2 h-4 w-4" />
                        Google
                    </Button>
                </CardContent>
                <CardFooter>
                    <p className="text-sm text-muted-foreground text-center w-full">
                        By clicking continue, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}