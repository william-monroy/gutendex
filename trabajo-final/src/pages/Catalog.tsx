import { MainLayout } from "@/layouts/MainLayout";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Filtros } from "@/components/Filtros";

export const Catalog: React.FC = () => {
  return (
    <MainLayout>
      <section className="px-responsive">
        <h1 className="text-4xl font-bold text-center mb-8 mt-6">
          Catálogo de Libros
        </h1>
        <Filtros />
        <Link to="/catalog/1">Book 1</Link>
        <Outlet />
      </section>
    </MainLayout>
  );
};
