import { Section } from "@/layouts/Section";
import { Icono } from "./Icono";

export const Formato: React.FC = () => {
  return (
    <Section isDark={false}>
      <h2 className="text-4xl font-bold">Formatos Disponibles</h2>
      <p className="text-[#4D4C4D] dark:text-[#C6C6C6]">
        Descubre los diferentes formatos de libros disponibles en nuestra
        plataforma. Conviértete en un lector ávido con la variedad de opciones
        que ofrecemos.
      </p>

      <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-8">
        <Icono src="/images/undraw_contact_us_15o2.svg" heading="HTML" />
        <Icono src="/images/undraw_contact_us_15o2.svg" heading="EPUB" />
        <Icono
          src="/images/undraw_contact_us_15o2.svg"
          heading="Mobipocket Ebook"
        />
        <Icono src="/images/undraw_contact_us_15o2.svg" heading="RDF" />
        <Icono
          src="/images/undraw_contact_us_15o2.svg"
          heading="Octect Stream"
        />
        <Icono src="/images/undraw_contact_us_15o2.svg" heading="Solo Texto" />
      </div>
    </Section>
  );
};
