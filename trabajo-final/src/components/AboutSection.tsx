import React from "react";
import { Section } from "@/layouts/Section";
import { Image } from "@nextui-org/react";
import { cls } from "@/utils/Tailwind";

interface AboutSectionProps {
  isReverse?: boolean;
  isDark?: boolean;
  title: string;
  text: string;
  image: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  isReverse = false,
  isDark = false,
  title,
  text,
  image,
}: AboutSectionProps) => {
  return (
    <Section isDark={isDark}>
      <div
        className={cls(
          "flex flex-wrap gap-8 items-center justify-center",
          isReverse && "flex-row-reverse"
        )}
      >
        <Image
          isZoomed
          width={240}
          alt="NextUI Fruit Image with Zoom"
          src={image}
        />
        <div
          className={cls(
            "flex flex-col max-w-[400px]",
            isReverse && "text-center md:text-right"
          )}
        >
          <h3 className="font-bold text-3xl">{title}</h3>
          <p className="text-lg txt-p-color mt-4">{text}</p>
        </div>
      </div>
    </Section>
  );
};
