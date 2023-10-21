import { AppDispatch } from "@/app/redux/store";
import { decodeJwt } from "@/utils/decodeJwt";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "@/app/redux/features/auth-slice";
import { PublicClientApplication } from "@azure/msal-browser";
import MicrosoftIcon from "../MicrosoftIcon/MicrosoftIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export default function MicrosoftLoginButton() {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const msalInstance: PublicClientApplication = new PublicClientApplication({
    auth: {
      clientId: process.env.NEXT_PUBLIC_AZURE_APP_ID as string,
      redirectUri: process.env.NEXT_PUBLIC_AZURE_REDIRECT_URI,
    },
  });

  const handleLogin = async () => {
    await msalInstance.initialize();
    await msalInstance.clearCache();
    await msalInstance
      .loginPopup({ scopes: ["User.Read", "profile", "openid"] })
      .then((res) => {
        setLoading(true);
        fetch("/api/auth/microsoft", {
          method: "POST",
          body: JSON.stringify({ MICROSOFT_JWT: res.idToken }),
        })
          .then(async (jwt) => {
            const { token } = await jwt.json();
            const { picture, sub, email } = decodeJwt(token);

            dispatch(logIn({ pictureUrl: picture, username: sub, email }));
          })
          .finally(() => {
            setLoading(false);
            router.push("/");
          });
      });
  };

  return (
    <button className={`border-solid rounded-full bg-white text-red py-2 w-full flex leading-6 ${loading ? "cursor-wait" : "cursor-pointer"}`} onClick={() => !loading && handleLogin()}>
      {loading ? 
      <FontAwesomeIcon icon={faSpinner} size="xl" className="animate-spin m-auto"/>
      :
      (<>
          <MicrosoftIcon size="24" />
          Sign in with Microsoft
        </>
      )}
    </button>
  );
}
