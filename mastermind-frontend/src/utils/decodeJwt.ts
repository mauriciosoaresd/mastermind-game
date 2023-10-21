export const decodeJwt = (token: string)  => {
    const payload: DecodedJWT = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
    return payload;
}