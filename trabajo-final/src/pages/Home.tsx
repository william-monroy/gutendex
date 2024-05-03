import { MainLayout } from "@/layouts/MainLayout";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Contacto } from "@/components/Contacto";

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Contacto />
    </MainLayout>
  );
};
