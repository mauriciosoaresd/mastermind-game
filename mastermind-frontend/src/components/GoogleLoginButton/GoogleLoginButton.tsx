import Script from "next/script";
import { logIn } from "../../app/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/redux/store";
import { decodeJwt } from "@/utils/decodeJwt";
import { useRouter } from "next/navigation";

export default function GoogleLoginButton() {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    
    return <div id="googleDiv">
    <Script
      src="https://accounts.google.com/gsi/client"
      id="google"
      defer
      strategy="afterInteractive"
      onReady={() => {
        const { google } = window as any;
        new google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: (response: any) => {
            fetch("/api/auth/google", {
              method: "POST",
              body: JSON.stringify({ GOOGLE_JWT: response.credential }),
            }).then(async (jwt) => {
                const { token } = await jwt.json();
                const { picture, sub, email } = decodeJwt(token);

                dispatch(logIn({ pictureUrl: picture, username: sub, email }));
              }).then(() => {
                router.push("/");
              });
          },
        });

        google.accounts.id.renderButton(document.getElementById("googleDiv"),{
            theme: "outline",
            size: "large",
            shape: "pill",
          });
      }}
    />
  </div>
}