import { Metadata } from "next";
import SignIn from "@/components/auth/signin";

export const metadata: Metadata = {
    title: "Sign In",
    description: "Sign in to your account",
};

export default function SignInPage() {
    return <SignIn />;
}