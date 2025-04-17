import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/mood-board";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import mood1 from "./images/mood1.jpg";
import mood2 from "./images/mood2.jpg";
import mood3 from "./images/mood3.jpg";
import mood4 from "./images/mood4.jpg";
import mood5 from "./images/mood5.jpg";
import mood6 from "./images/mood6.jpg";




export default function BentoGridDemo() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mb-6 tracking-tight text-8xl p-10 font-bold text-center mb-8 text-neutral-800 dark:text-neutral-200">
        My Aesthetics
      </h2>

    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
      ))}
    </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const ImageDisplay = ({ imageSrc }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
      <img 
        src={imageSrc} 
        alt="Mood board image" 
        className="w-full h-full object-cover" 
      />
    </div>
  );

const items = [
  {
    title: "DIY queen vibes",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <ImageDisplay imageSrc={mood1} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Wander often, wonder always",
    description: "Dive into the transformative power of technology.",
    header: <ImageDisplay imageSrc={mood2} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <ImageDisplay imageSrc={mood3} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Where ideas go ✨brrr✨",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <ImageDisplay imageSrc={mood4} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Making pixels pretty 💅",
    description: "Join the quest for understanding and enlightenment.",
    header: <ImageDisplay imageSrc={mood5} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <ImageDisplay imageSrc={mood6} />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <ImageDisplay imageSrc={mood1} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
