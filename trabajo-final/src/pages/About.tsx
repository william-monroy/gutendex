import { Equipo } from "@/data/Equipo";
import { MainLayout } from "@/layouts/MainLayout";
import { Hero } from "@/components/Hero";
import { MiembroEquipo } from "@components/MiembroEquipo";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  return (
    <MainLayout>
      <Hero
        title="Lorem ipsum dolor sit amet, consectetur"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere nunc nec velit porta bibendum. Phasellus vehicula faucibus"
        button={false}
        input={false}
      />
      <div className="px-responsive flex flex-row flex-wrap justify-center">
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
    </MainLayout>
  );
};
