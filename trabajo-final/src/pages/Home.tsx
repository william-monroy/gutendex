import { MainLayout } from "@/layouts/MainLayout";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Contacto } from "@/components/Contacto";
import { Formato } from "@/components/Formato";

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <Hero
        title="Descubre tu nuevo libro favorito"
        subtitle={`¿No sabes qué leer? Te encuentras en el lugar adecuado. Desde Shakespeare hasta Charles Dickens, explora nuestro variado catálogo`}
        button={true}
        input={true}
      />
      <Features />
      <Formato />
      <Contacto />
    </MainLayout>
  );
};
