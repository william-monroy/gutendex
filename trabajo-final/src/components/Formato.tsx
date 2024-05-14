import { Section } from "@/layouts/Section";
import { Icono } from "./Icono";

export const Formato: React.FC = () => {
  return (
    <Section isDark={false}>
      <h2 className="text-4xl font-bold">Formatos disponibles</h2>
      <p className="text-[#4D4C4D] dark:text-[#C6C6C6]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        tenetur quaerat pariatur necessitatibus, aperiam exercitationem. Ab enim
        placeat voluptate, at corrupti necessitatibus reprehenderit tenetur
        officia!
      </p>  

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center items-center gap-4 mt-8" style={{ gridAutoFlow: 'dense' }}>
        <Icono
          src="/images/undraw_contact_us_15o2.svg"
          heading="HTML"
        />
        <Icono
          src="/images/undraw_contact_us_15o2.svg"
          heading="EPUB"
        />z
        <Icono
          src="/images/undraw_contact_us_15o2.svg"
          heading="Mobipocket Ebook"
        />
        <Icono
          src="/images/undraw_contact_us_15o2.svg"
          heading="RDF"
        />
        <Icono
          src="/images/undraw_contact_us_15o2.svg"
          heading="Octect Stream"
        />
        <Icono
          src="/images/undraw_contact_us_15o2.svg"
          heading="Solo Texto"
        />
      </div>
    </Section>
  );
};
