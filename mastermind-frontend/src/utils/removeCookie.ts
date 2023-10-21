import { NextResponse } from "next/server";

export const removeCookie = () => {
    const res = NextResponse.json({}, { status: 401, statusText: "Token expired or invalid" })
    res.cookies.delete("token");
    return res;
}