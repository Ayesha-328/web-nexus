"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

export function Cards() {
  const cardData = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzl1QVuK_PRhmgEHEdTAF4w41tFtbM2wv-VVX0alsmDAuvs0eG2I3yA0VQRj73b8xpLQ&usqp=CAU",
      title: "🍕 Chill Girl Eating Pizza (Total Mood)",
      description: `Serving sass with every slice.
She’s unbothered, stylish, and living her best life — whether it’s a pizza party or a solo vibe night. You don’t need approval when you’ve got confidence, cat-eye shades, and a killer ‘fit.
Just vibes. Zero regrets.
✨ Stay snacc, stay savage.`,
      buttonText: "I’m in 🤙",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZ3tVZGm16x1Geg7NCLsp7XwCW9uQr3-93Q&s",
      title: "😎 Neon Girliee with Serious Attitude",
      description: `Main character mode: activated.
This look is giving futuristic pop queen with a dash of “don’t talk to me unless it’s about fashion or world domination.”
The colors? Loud. The energy? Untouchable.
Glow up season, 24/7.
💅 Be bold. Be extra. Be you.`,
      buttonText: "Catch the vibe 🚀",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREXlnDws-QtXjH2s6zA9T1e0Ds_YGASc3vv_UZcVQv5__e-1rMm3FOzV06AEKxM7Jd8Uw&usqp=CAU",
      title: "🌈 Psychedelic Wonderland Energy",
      description: `Reality called. We hit decline.
Float through your day like you’re in a music video. This card is a trip — literally.
Color explosions, retro chaos, and “I’m not from this planet” energy.
Trippy but make it aesthetic.
🪐 You're not late, you're just on cosmic time.`,
      buttonText: "Shop the chaos 💥",
    },
  ];

  return (
    <div>
      <div className="flex gap-5 flex-wrap justify-center items-center mt-10">
        {cardData.map((item, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
          >
            <div className="w-full h-[250px] overflow-hidden rounded-xl">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-semibold">
              {item.title}
            </p>

            <p className="text-sm whitespace-pre-line text-neutral-600 dark:text-neutral-400">
              {item.description}
            </p>

            <button className="rounded-full pl-4 pr-3 py-2 text-white flex items-center justify-between bg-black mt-4 text-xs font-bold dark:bg-zinc-800 hover:scale-105 transition-all">
              <span>{item.buttonText}</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white ml-2">
                🔥
              </span>
            </button>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}
