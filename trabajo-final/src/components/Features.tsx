import { Section } from "@/layouts/Section";
import { Icono } from "./Icono";

export const Features: React.FC = () => {
  return (
    <Section isDark>
      <h2 className="text-4xl font-bold">Tipos de Filtros</h2>
      <p className="text-[#4D4C4D] dark:text-[#C6C6C6]">
        Encuentra libros por autores, idiomas, categorías y más. Explora nuestra
        colección y descubre nuevos títulos que te apasionen.
      </p>

      <div className="flex justify-center items-center flex-wrap gap-4 mt-8">
        <Icono
          src="/autor.webp"
          heading="Autores"
          paragraph="Explora libros escritos por tus autores favoritos."
        />
        <Icono
          src="/idioma.webp"
          heading="Idioma"
          paragraph="Encuentra libros en tu idioma preferido."
        />
        <Icono
          src="/categoria.webp"
          heading="Categoría"
          paragraph="Explora libros por género y temas específicos."
        />
      </div>
    </Section>
  );
};
