import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/dist/client/components/headers";
import { removeCookie } from "@/utils/removeCookie";

const BASE_URL = process.env.BACKEND_URL;

export async function POST(request: NextRequest) {
  const { GOOGLE_JWT } = await request.json();

  return fetch(`${BASE_URL}/oauth/google`, {
    method: "POST",
    body: JSON.stringify({ value: GOOGLE_JWT }),
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${GOOGLE_JWT}`,
    }),
  }).then(async (response) => {
    if (response.status === 200) {
      const { value } = await response.json();
      const res = NextResponse.json({ token: value });
      res.cookies.set({
        name: "token",
        value: value!,
        httpOnly: true,
        sameSite: "strict",
      });

      return res;
    }
    return NextResponse.json({}, { status: response.status });
  });
}

export async function GET(request: NextRequest) {
  const jwt: string | undefined = cookies().get("token")?.value;
  if (jwt === undefined) {
    return NextResponse.json({}, { status: 500, statusText: "No Token" });
  } else {
    const options = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      }),
    };
    return fetch(`${BASE_URL}/jwt-check`, options).then(
      async (response: ResponseObject) => {
        if (response.status === 200) {
          return NextResponse.json({ token: jwt }, { status: 200 });
        }
        if (response.status === 401) {
          return removeCookie();
        }
        return NextResponse.json(
          {},
          { status: 500, statusText: "Server Error" }
        );
      }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const jwt: string | undefined = cookies().get("token")?.value;
  if (jwt === undefined) {
    return NextResponse.json({}, { status: 500, statusText: "No Token" });
  }
  return removeCookie();
}
