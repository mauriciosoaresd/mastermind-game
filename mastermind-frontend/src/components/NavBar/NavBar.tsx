"use client";
import Link from "next/link";
import GameIcon from "../MastermindIcon/MastermindIcon";
import NavbarSkeleton from "../NavbarSkeleton/NavbarSkeleton";
import { logIn, stopLoading, logOut } from "@/app/redux/features/auth-slice";
import { AppDispatch, useAppSelector } from "@/app/redux/store";
import { decodeJwt } from "@/utils/decodeJwt";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UserAvatar from "../UserAvatar/UserAvatar";

export default function NavBar() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useAppSelector((state) => state.authReducer.value.loading);
  const [userData, setUserData] = useState<UserPayload | null>(null);
  const user = useAppSelector((state) => state.authReducer.value.userData);

  const handleLogout = () => {
    fetch("/api/auth/google", { method: "DELETE" }).then(async () => {
      dispatch(logOut());
      setUserData(null);
      dispatch(stopLoading());
    });
  };

  useEffect(() => {
    async function getData() {
      fetch("/api/auth/google").then(async (response) => {
        if (response.status === 200) {
          const { token } = await response.json();
          const { picture, sub, email } = decodeJwt(token);
          setUserData({ username: sub, pictureUrl: picture, email });
          dispatch(logIn({ pictureUrl: picture, username: sub, email }));
        }
        dispatch(stopLoading());
      });
    }
    if (!userData) {
      getData();
    }
  }, [user]);

  return (
    <nav className="flex justify-between items-center w-full my-3 sm:px-8">
      <Link
        href={"/"}
        className="font-bold text-lg flex group transition ease-in-out delay-150 ml-2"
      >
        <GameIcon className={"group-hover:text-red"} />
        <h1 className="flex tracking-widest text-center items-center group-hover:text-white sm:pl-2">
          Mastermind
        </h1>
      </Link>

      <div className="flex gap-4 items-center text-sm tracking-widest font-bold">
        {loading == true ? (
          <NavbarSkeleton />
        ) : userData != null ? (
          <div className="flex">
            <h1 className="hidden sm:block font-light my-auto">
              Welcome, {userData.username}
            </h1>
            {
              <UserAvatar url={userData.pictureUrl} />
            }
            <button
              onClick={() => handleLogout()}
              className="border-solid border-2 font-bold rounded-full py-2 px-2 transition ease-in-out delay-150 hover:scale-110 hover:bg-pink hover:border-pink hover:text-red"
            >
              LOGOUT
            </button>
          </div>
        ) : (
          <Link
            href={"/login"}
            className="border-solid border-2 rounded-full py-2 px-6 transition ease-in-out delay-150 hover:scale-110 hover:bg-pink hover:border-pink hover:text-red"
          >
            LOGIN
          </Link>
        )}
      </div>
    </nav>
  );
}
