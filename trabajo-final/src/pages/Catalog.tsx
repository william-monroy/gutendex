import { MainLayout } from "@/layouts/MainLayout";
import ListaLibros from "@/components/ListaLibros";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Catalog: React.FC = () => {
  return (
    <MainLayout>
      <h1>Catalog</h1>
      <Link to="/catalog/1">Book 1</Link>
      <Outlet />
      <ListaLibros />
    </MainLayout>
  );
};
