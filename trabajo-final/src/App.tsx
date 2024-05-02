import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Contacto } from "./components/Contacto";
import { Features } from "./components/Features";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        {/* <Header /> */}
        {/* <Hero /> */}
        {/* <Customers /> */}
        {/* <Integrations /> */}
        <Contacto />
      </main>
      <Footer />
    </>
  );
};
