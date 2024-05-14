import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "@nextui-org/react";
import { Libro } from "@/components/Libro";
import LibroLoading from "./LibroLoading";
import useBooks from "@/hooks/useBooks";
import { useQueryParam } from "@/hooks/useQueryParam";

interface Book {
  id: number;
  title: string;
  authors: { name: string }[];
  languages: string[];
  download_count: number;
  formats: { [key: string]: string };
}

function ListaLibros() {
  const query = useQueryParam();

  const { data, isLoading, isError } = useBooks(
    query.get("page") ? parseInt(query.get("page") || "1") : 1
  );

  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <LibroLoading key={index} />
        ))}
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center h-72">
        <p className="text-center">Error al cargar los libros</p>
      </div>
    );

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data?.results?.map((libro: Book) => (
        <Link
          to={`/catalog/${libro.id}?page=${query.get("page") ?? "1"}`}
          key={libro.id}
        >
          <Libro
            src={libro.formats["image/jpeg"]}
            titulo={libro.title}
            autor={libro.authors
              .map((author) => {
                const nameParts = author.name.split(",");
                return `${nameParts.slice(1).join("")} ${nameParts[0]}`;
              })
              .join(", ")}
          />
        </Link>
      ))}
      {data?.results?.length > 0 && (
        <Pagination
          isCompact
          showControls
          total={Math.ceil(data?.count / 32)}
          initialPage={
            query.get("page") ? parseInt(query.get("page") || "1") : 1
          }
          onChange={(page) => {
            navigate(`/catalog?page=${page}`);
          }}
        />
      )}
    </div>
  );
}

export default ListaLibros;
