import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Contacto } from "./components/Contacto";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Header /> */}
        {/* <Hero /> */}
        {/* <Features /> */}
        {/* <Customers /> */}
        {/* <Integrations /> */}
        <Contacto />
      </main>
      <Footer />
    </>
  );
};
