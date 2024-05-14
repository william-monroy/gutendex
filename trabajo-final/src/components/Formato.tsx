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

      <div
        className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center items-center gap-4 mt-8"
        style={{ gridAutoFlow: "dense" }}
      >
        <Icono src="/HTML.webp" heading="HTML" />
        <Icono src="/EPUB.webp" heading="EPUB" />
        <Icono src="/mobipocket.webp" heading="Mobipocket Ebook" />
        <Icono src="/RDF.webp" heading="RDF" />
        <Icono src="/octet.webp" heading="Octect Stream" />
        <Icono src="/texto.webp" heading="Solo Texto" />
      </div>
    </Section>
  );
};
