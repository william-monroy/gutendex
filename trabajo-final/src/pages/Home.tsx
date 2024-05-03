import { Contacto } from "@/components/Contacto";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Contacto />
      </main>
      <Footer />
    </>
  );
};
