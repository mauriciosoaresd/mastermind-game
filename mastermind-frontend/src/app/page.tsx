"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          Play for FREE now!
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          This is a free game where you can challenge your friends and rise up in global
          ranking.
        </p>
        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <Link
            href="https://github.com/mauriciosoaresd/mastermind-game"
            className="bg-red rounded-full px-5 py-2 hover:scale-105"
          >
            View on GitHub
          </Link>
          <Link
            href={"/gamepage"}
            className="border-solid border-2 rounded-full py-2 px-6 hover:scale-105 hover:bg-white hover:text-red hover:border-white hover:font-extrabold"
          >
            Play
          </Link>
        </div>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex flex-col mt-auto">
        <img src="mastermind-board.png" alt="mastermind image" className="py-12 px-6" />
      </div>
    </main>
  );
}
