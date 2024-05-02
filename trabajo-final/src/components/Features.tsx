import { Section } from "@/layouts/Section";
import { Icono } from "./Icono";

export const Features: React.FC = () => {
  return (
    <Section isDark>
      <h2 className="text-4xl font-bold">Lorem ipsum dolor</h2>
      <p className="text-[#4D4C4D] dark:text-[#C6C6C6]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        tenetur quaerat pariatur necessitatibus, aperiam exercitationem. Ab enim
        placeat voluptate, at corrupti necessitatibus reprehenderit tenetur
        officia!
      </p>

      <div className="flex justify-center items-center flex-wrap gap-4 mt-8">
        <Icono
          src="/images/undraw_contact_us_15o2.svg"
          heading="Autores"
          paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Icono
          src="/images/undraw_contact_us_15o2.svg"
          heading="Idioma"
          paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Icono
          src="/images/undraw_contact_us_15o2.svg"
          heading="Categoria"
          paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </Section>
  );
};
