import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-700">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          Página no encontrada
        </h2>
        <p className="text-gray-500">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link to="/" className="mt-4 text-primary">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
};
