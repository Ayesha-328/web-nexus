"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import ProfilePic from "../assets/pic.png";

export function Hero() {
  return (
    <div className="h-[40rem] w-full bg-neutral-950 relative overflow-hidden flex items-center justify-center mt-5">
      {/* Big Profile Image */}
      <img
        src={ProfilePic}
        alt="profile"
        className="absolute h-[40rem] w-[40rem] object-cover rounded-full z-10 translate-y-[-7rem]"
      />

      {/* Text behind image */}
      <h2 className="absolute z-0 font-bold text-3xl  translate-y-[-16rem]">Would you like to speak</h2>
      <h1 className="absolute z-0 font-extrabold md:text-[10rem] text-[6rem]md:text-9xl text-9xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mb-6 tracking-tight  translate-y-[-12rem]">
        Shabanaaa
      </h1>

      <BackgroundBeams />
    </div>
  );
}
