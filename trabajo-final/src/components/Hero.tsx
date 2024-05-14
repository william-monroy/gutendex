import React from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "../icons/SearchIcon";
import { Section } from "@/layouts/Section";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  button?: boolean;
  input?: boolean;
}

export const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  return (
    <Section>
      <h2 className="text-6xl font-bold text-center text-balance">
        {props.title}
      </h2>
      <p className="text-lg txt-p-color text-center mt-4">{props.subtitle}</p>
      {props.button && (
        <div className="flex justify-center mt-4">
          <Link to="/catalog">
            <Button radius="sm" color="primary">
              Explorar aquí
            </Button>
          </Link>
        </div>
      )}
      {props.input && (
        <div className="flex justify-center mt-6">
          <div className="w-4/5">
            <Input
              label="Buscar libro"
              isClearable
              radius="lg"
              variant="bordered"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              placeholder="Busca aquí tu libro..."
              startContent={
                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
        </div>
      )}
    </Section>
  );
};
