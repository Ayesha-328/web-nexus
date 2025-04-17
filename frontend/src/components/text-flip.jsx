"use client";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { motion } from "motion/react";
// import { cn } from "@/utils/cn";
import { cn } from "@/lib/utils";


export default function ContainerTextFlipDemo() {
  const words = ["Scroll ✨", "Laugh 💀", "Repeat 💀✨"];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6 max-w-2xl text-left text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100"
      )}
      layout>
      <div className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mb-6 tracking-tight">
      Welcome to the Vibe Dump... <ContainerTextFlip words={words} />
        {/* <Blips /> */}
      </div>
    </motion.h1>
  );
}
