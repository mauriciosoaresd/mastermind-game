"use client";

import GoogleLoginButton from "@/components/GoogleLoginButton/GoogleLoginButton";
import MicrosoftLoginButton from "@/components/MicrosoftLoginButton/MicrosoftLoginButton";

export default function Login() {
  return (
    <div className="items-center mt-20">
      <div className="h-max mx-auto mt-2 flex flex-col items-center bg-red rounded-lg">
        <h1 className="text-xl font-bold text-center p-8">
          Sign in to your account
        </h1>
        <div className="bg-black shadow-xl p-10 flex flex-col gap-4 text-sm">
          <MicrosoftLoginButton />
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
}
