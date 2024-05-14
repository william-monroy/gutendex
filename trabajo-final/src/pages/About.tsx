import { Equipo } from "@/data/Equipo";
import { MainLayout } from "@/layouts/MainLayout";
import { Hero } from "@/components/Hero";
import { MiembroEquipo } from "@components/MiembroEquipo";
import { Link } from "react-router-dom";
import { AboutSection } from "@/components/AboutSection";
import { Section } from "@/layouts/Section";

export const About: React.FC = () => {
  return (
    <MainLayout>
      <Hero
        title="Sobre Nosotros"
        subtitle="Bienvenidos a nuestro catálogo de libros. Somos un equipo apasionado por la lectura y dedicados a ofrecerte la mejor selección de libros y herramientas para facilitar tu búsqueda."
        button={false}
        input={false}
      />
      <AboutSection
        isReverse={false}
        isDark={true}
        title="Nuestra Misión"
        text="Nuestra misión es fomentar el amor por la lectura proporcionando un acceso fácil y rápido a una amplia gama de libros. Queremos ser el recurso principal para todos los amantes de los libros, ofreciendo una plataforma intuitiva y rica en contenido."
        image="/library.jpg"
      />
      <AboutSection
        isReverse={true}
        isDark={false}
        title="Nuestros Valores"
        text="Valoramos la pasión por el conocimiento, la integridad en nuestras recomendaciones y la dedicación a nuestros usuarios. Creemos en el poder de los libros para transformar vidas y estamos comprometidos con la creación de una comunidad de lectores entusiastas."
        image="/reading.jpg"
      />
      <Section isDark>
        <h3 className="font-bold text-4xl mb-4 text-center md:text-left">
          Nuestro Equipo
        </h3>
        <div className="flex flex-wrap justify-center">
          {Equipo.map((miembro, index) => (
            <Link
              to={miembro.href}
              target="_blank"
              key={index}
              className="m-1 max-w-44"
            >
              <MiembroEquipo
                src={miembro.src}
                width={250}
                name={miembro.name}
                role={miembro.role}
                className="m-1 max-w-44"
              />
            </Link>
          ))}
        </div>
      </Section>
    </MainLayout>
  );
};
