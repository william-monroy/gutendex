import React, { useEffect, useState } from "react";
import Axios, { AxiosResponse } from "axios";
import { Libro } from "@/components/Libro";
import { Link } from "react-router-dom";

interface Book {
  id: number;
  title: string;
  authors: { name: string }[];
  languages: string[];
  download_count: number;
  formats: { [key: string]: string };
}

function ListaLibros() {
  const [libros, setLibros] = useState<Book[]>([]);

  useEffect(() => {
    console.log("Montado componente ListaLibros");
    Axios.get("https://gutendex.com/books")
      .then((response: AxiosResponse<{ results: Book[] }>) => {
        console.log("Respuesta de la API:", response.data);
        setLibros(response.data.results);
      })
      .catch((error) => {
        console.error("Error al obtener los libros:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {libros.map((libro) => (
        <Link to={`/catalog/${libro.id}`}>
          <Libro
            key={libro.id}
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
    </div>
  );
}

export default ListaLibros;
