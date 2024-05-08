import { MainLayout } from "@/layouts/MainLayout";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Contacto } from "@/components/Contacto";
import { Formato } from "@/components/Formato";

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <Hero
        title="Lorem ipsum dolor sit amet, consectetur"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere nunc nec velit porta bibendum. Phasellus vehicula faucibus"
        button={true}
        input={true}
      />
      <Features />
      <Formato />
      <Contacto />
    </MainLayout>
  );
};
