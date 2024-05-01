import { Header } from "./components/Header";

import { Footer } from "./components/Footer";

import { Contacto } from "./components/Contacto";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <h1>App</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          tenetur quaerat pariatur necessitatibus, aperiam exercitationem. Ab
          enim placeat voluptate, at corrupti necessitatibus reprehenderit
          tenetur officia! Dolores, similique consequuntur! Odit autem ipsum
          deserunt adipisci itaque repudiandae distinctio magni nam cumque,
          saepe laboriosam facere nemo deleniti a modi eveniet enim officiis
          minima voluptatem cum sequi necessitatibus. Eos repudiandae in ipsam
          aliquam impedit?
        </p>
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
