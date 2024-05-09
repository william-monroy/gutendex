import React from "react";
import { Section } from "@/layouts/Section";
import { Image } from "@nextui-org/react";
import { cls } from "@/utils/Tailwind";

interface AboutSectionProps {
  isReverse?: boolean;
  isDark?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  isReverse = false,
  isDark = false,
}: AboutSectionProps) => {
  return (
    <Section isDark={isDark}>
      <div
        className={cls(
          "flex flex-wrap gap-8 items-center",
          isReverse && "flex-row-reverse"
        )}
      >
        <Image
          isZoomed
          width={240}
          alt="NextUI Fruit Image with Zoom"
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
        />
        <div
          className={cls(
            "flex flex-col max-w-[400px]",
            isReverse && "text-right"
          )}
        >
          <h3 className="font-bold text-3xl">Lorem ipsum dolor</h3>
          <p className="text-lg txt-p-color mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque posuere nunc nec velit porta bibendum. Phasellus
            vehicula faucibus
          </p>
        </div>
      </div>
    </Section>
  );
};
