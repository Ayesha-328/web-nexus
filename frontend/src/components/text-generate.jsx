"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Scrolling Through These Might Not Heal You, But It’ll Distract You – Which Is Basically the Same Thing 💅📲
`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
