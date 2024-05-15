import { MainLayout } from "@/layouts/MainLayout";
import "../utils/style.css";
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@nextui-org/button";
// import { Book } from "@/types/Book.type";

export const API: React.FC = () => {
  useEffect(() => {
    console.log("El componente se ha montado");
    handleGetBookInfo();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonId = event.currentTarget.id;
    const middleColumnItems = document.querySelectorAll(".middle-column__item");
    middleColumnItems.forEach((item) => {
      const middleColumnItem = item as HTMLElement;
      middleColumnItem.style.borderRadius = "10px";
      if (item.id === buttonId) {
        middleColumnItem.style.backgroundColor =
          "var(--primary-color-not-selected)";
        middleColumnItem.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else {
        middleColumnItem.style.backgroundColor =
          "var(--secondary-color-selected)";
      }
    });
  };

  const [bookInfo, setBookInfo] = useState<any>();

  const handleGetBookInfo = () => {
    const bookData = {
      count: 469,
      next: "https://gutendex.com/books/?author_year_end=200&page=2",
      previous: null,
      results: [
        {
          id: 6130,
          title: "La Ilíada",
          authors: [
            {
              name: "Homero",
              birth_year: -750,
              death_year: -650,
            },
          ],
          translators: [
            {
              name: "Pope, Alexander",
              birth_year: 1688,
              death_year: 1744,
            },
          ],
          subjects: [
            "Aquiles (Personaje mitológico) -- Poesía",
            "Literatura clásica",
            "Poesía épica, griega -- Traducciones al inglés",
            "Guerra de Troya -- Poesía",
          ],
          bookshelves: ["Antigüedad Clásica"],
          languages: ["es"],
          copyright: false,
          media_type: "Texto",
          formats: {
            "text/html": "https://www.gutenberg.org/ebooks/6130.html.images",
            "application/epub+zip":
              "https://www.gutenberg.org/ebooks/6130.epub3.images",
            "application/x-mobipocket-ebook":
              "https://www.gutenberg.org/ebooks/6130.kf8.images",
            "application/rdf+xml": "https://www.gutenberg.org/ebooks/6130.rdf",
            "image/jpeg":
              "https://www.gutenberg.org/cache/epub/6130/pg6130.cover.medium.jpg",
            "text/plain; charset=us-ascii":
              "https://www.gutenberg.org/ebooks/6130.txt.utf-8",
            "application/octet-stream":
              "https://www.gutenberg.org/cache/epub/6130/pg6130-h.zip",
          },
          download_count: 11870,
        },
      ],
    };
    setBookInfo(bookData.results[0]);
  };

  return (
    <MainLayout>
      <section className="container-api">
        <aside className="left-column">
          <h2 className="left-column__title">Libros</h2>
          <div className="left-column__gridContainer">
            <Button
              onClick={handleClick}
              id="author_year_start"
              className="left-column__button"
              color="primary"
              variant="light"
            >
              author_year_start
            </Button>
            <Button
              onClick={handleClick}
              id="author_year_end"
              className="left-column__button"
              color="primary"
              variant="light"
            >
              author_year_end
            </Button>
            <Button
              onClick={handleClick}
              id="copyright"
              className="left-column__button"
              color="primary"
              variant="light"
            >
              copyright
            </Button>
            <Button
              onClick={handleClick}
              id="ids"
              className="left-column__button"
              color="primary"
              variant="light"
            >
              ids
            </Button>
            <Button
              onClick={handleClick}
              id="languages"
              className="left-column__button"
              color="primary"
              variant="light"
            >
              languages
            </Button>
            <Button
              onClick={handleClick}
              id="mime_type"
              className="left-column__button"
              color="primary"
              variant="light"
            >
              mime_type
            </Button>
            <Button
              onClick={handleClick}
              id="search"
              className="left-column__button"
              color="primary"
              variant="light"
            >
              search
            </Button>
            <Button
              onClick={handleClick}
              id="sort"
              className="left-column__button"
              color="primary"
              variant="light"
            >
              sort
            </Button>
            <Button
              onClick={handleClick}
              id="topic"
              className="left-column__button"
              color="primary"
              variant="light"
            >
              topic
            </Button>
          </div>
        </aside>
        <main className="middle-column">
          <div id="author_year_start" className="middle-column__item">
            <h3>author_year_start</h3>
            <p>
              Úsalos para encontrar libros con al menos un autor vivo en un
              rango de años dado. Deben tener valores enteros positivos o
              negativos. Por ejemplo, /books?author_year_end=-499 da libros con
              autores vivos antes del año 500 a.C., y
              /books?author_year_start=1800&author_year_end=1899 da libros con
              autores vivos en el siglo XIX.
            </p>
          </div>
          <div id="author_year_end" className="middle-column__item">
            <h3>author_year_end</h3>
            <p>
              Úsalos para encontrar libros con al menos un autor vivo en un
              rango de años dado. Deben tener valores enteros positivos o
              negativos. Por ejemplo, /books?author_year_end=-499 da libros con
              autores vivos antes del año 500 a.C., y
              /books?author_year_start=1800&author_year_end=1899 da libros con
              autores vivos en el siglo XIX.
            </p>
          </div>
          <div id="copyright" className="middle-column__item">
            <h3>copyright</h3>
            <p>
              Úsalo para encontrar libros con cierto estado de derechos de
              autor: true para libros con derechos de autor existentes, false
              para libros en el dominio público en EE.UU., o null para libros
              sin información de derechos de autor disponible. Estos pueden
              combinarse con comas. Por ejemplo, /books?copyright=true,false da
              libros con información de derechos de autor disponible.
            </p>
          </div>
          <div id="ids" className="middle-column__item">
            <h3>ids</h3>
            <p>
              Úsalo para enumerar libros con números de identificación de
              Project Gutenberg en una lista dada de números. Deben ser enteros
              positivos separados por comas. Por ejemplo, /books?ids=11,12,13 da
              libros con los números de identificación 11, 12 y 13.
            </p>
          </div>
          <div id="languages" className="middle-column__item">
            <h3>languages</h3>
            <p>
              Úsalo para encontrar libros en cualquiera de una lista de idiomas.
              Deben ser códigos de idioma de dos caracteres separados por comas.
              Por ejemplo, /books?languages=en da libros en inglés, y
              /books?languages=fr,fi da libros en francés, finlandés o ambos.
            </p>
          </div>
          <div id="mime_type" className="middle-column__item">
            <h3>mime_type</h3>
            <p>
              Úsalo para encontrar libros con un tipo MIME dado. Gutendex
              proporciona cada libro con un tipo MIME que comienza con el valor.
              Por ejemplo, /books?mime_type=text%2F da libros con tipos
              text/html, text/plain; charset=us-ascii, etc.; y
              /books?mime_type=text%2Fhtml da libros con tipos text/html,
              text/html; charset=utf-8, etc.
            </p>
          </div>
          <div id="search" className="middle-column__item">
            <h3>search</h3>
            <p>
              Úsalo para buscar nombres de autores y títulos de libros con
              palabras dadas. Deben estar separados por un espacio (es decir,
              %20 en formato codificado de URL) y no distinguen mayúsculas de
              minúsculas. Por ejemplo, /books?search=dickens%20great incluye
              Grandes Esperanzas de Charles Dickens.
            </p>
          </div>
          <div id="sort" className="middle-column__item">
            <h3>sort</h3>
            <p>
              Úsalo para ordenar libros: ascending para números de
              identificación de Project Gutenberg de menor a mayor, descending
              para IDs de mayor a menor, o popular (el valor predeterminado)
              para los más populares a los menos populares por número de
              descargas.
            </p>
          </div>
          <div id="topic" className="middle-column__item">
            <h3>topic</h3>
            <p>
              Úsalo para buscar una frase clave insensible a mayúsculas y
              minúsculas en los estantes de libros o temas de los libros. Por
              ejemplo, /books?topic=children da libros en el estante "Literatura
              Infantil", con el tema "Niños enfermos -- Ficción", y así
              sucesivamente.
            </p>
          </div>
        </main>
        <SyntaxHighlighter
          className="right-column"
          language="json"
          style={vscDarkPlus}
        >
          {JSON.stringify(bookInfo, null, 2)}
        </SyntaxHighlighter>
      </section>
    </MainLayout>
  );
};
