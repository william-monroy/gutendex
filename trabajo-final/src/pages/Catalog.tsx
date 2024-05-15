import { MainLayout } from "@/layouts/MainLayout";
import { Outlet } from "react-router-dom";
import ListaLibros from "@/components/ListaLibros";

export const Catalog: React.FC = () => {
  return (
    <MainLayout>
      <section className="px-responsive">
        <h1 className="text-4xl font-bold text-center mb-8 mt-6">
          Catálogo de Libros
        </h1>
        <Outlet />
        <ListaLibros />
      </section>
    </MainLayout>
  );
};
