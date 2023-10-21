import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/dist/client/components/headers";
import { removeCookie } from "@/utils/removeCookie";

const BASE_URL = process.env.BACKEND_URL;

export async function POST(request: NextRequest) {
  const data = await request.json();
  const jwt: string | undefined = cookies().get("token")?.value;

  if (jwt === undefined) {
    return removeCookie();
  } else {
    return fetch(`${BASE_URL}/mastermind/set-score`, {
      method: "POST",
      body: JSON.stringify({ ...data, finishTime: new Date().getTime() }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      }),
    });
  }
}

export async function GET(request: NextRequest) {
  return fetch(`${BASE_URL}/mastermind/highscore`, {
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
}
