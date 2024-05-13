import { MainLayout } from "@/layouts/MainLayout";
import "../utils/style.css";
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
export const API: React.FC = () => {
  useEffect(() => {
    console.log("El componente se ha montado");
    handleGetBookInfo();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonId = event.currentTarget.id;
    const divs = document.querySelectorAll(".middle-column div");
    divs.forEach((div) => {
      const divElement = div as HTMLDivElement;
      if (div.id === buttonId) {
        divElement.style.backgroundColor = "#D3D2EB";
      } else {
        divElement.style.backgroundColor = "white";
      }
    });
  };
  const [bookInfo, setBookInfo] = useState<any>(null);

  const handleGetBookInfo = () => {
    const bookData = {
      count: 469,
      next: "https://gutendex.com/books/?author_year_end=200&page=2",
      previous: null,
      results: [
        {
          id: 6130,
          title: "The Iliad",
          authors: [
            {
              name: "Homer",
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
            "Achilles (Mythological character) -- Poetry",
            "Classical literature",
            "Epic poetry, Greek -- Translations into English",
            "Trojan War -- Poetry",
          ],
          bookshelves: ["Classical Antiquity"],
          languages: ["en"],
          copyright: false,
          media_type: "Text",
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
      <div className="bg-red-500 w-full flex flex-wrap">
        <div className="left-column w-2/12 hidden md:block min-w-[190px]">
          <h2>Books</h2>
          <button onClick={handleClick} id="author_year_start">
            author_year_start
          </button>
          <button onClick={handleClick} id="author_year_end">
            author_year_end
          </button>
          <button onClick={handleClick} id="copyright">
            copyright
          </button>
          <button onClick={handleClick} id="ids">
            ids
          </button>
          <button onClick={handleClick} id="languages">
            languages
          </button>
          <button onClick={handleClick} id="mime_type">
            mime_type
          </button>
          <button onClick={handleClick} id="search">
            search
          </button>
          <button onClick={handleClick} id="sort">
            sort
          </button>
          <button onClick={handleClick} id="topic">
            topic
          </button>
        </div>
        <div className="middle-column w-full md:w-full lg:w-5/12">
          <div id="author_year_start">
            <h3>author_year_start</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure a
              distinctio, iusto laborum excepturi, eligendi fugiat accusantium
              molestiae sapiente error officiis ratione, recusandae qui
              architecto voluptates? Suscipit aliquid veritatis debitis!
            </p>
          </div>
          <div id="author_year_end">
            <h3>author_year_end</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure a
              distinctio, iusto laborum excepturi, eligendi fugiat accusantium
              molestiae sapiente error officiis ratione, recusandae qui
              architecto voluptates? Suscipit aliquid veritatis debitis!
            </p>
          </div>
          <div id="copyright">
            <h3>copyright</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure a
              distinctio, iusto laborum excepturi, eligendi fugiat accusantium
              molestiae sapiente error officiis ratione, recusandae qui
              architecto voluptates? Suscipit aliquid veritatis debitis!
            </p>
          </div>
          <div id="ids">
            <h3>ids</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure a
              distinctio, iusto laborum excepturi, eligendi fugiat accusantium
              molestiae sapiente error officiis ratione, recusandae qui
              architecto voluptates? Suscipit aliquid veritatis debitis!
            </p>
          </div>
          <div id="languages">
            <h3>languages</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure a
              distinctio, iusto laborum excepturi, eligendi fugiat accusantium
              molestiae sapiente error officiis ratione, recusandae qui
              architecto voluptates? Suscipit aliquid veritatis debitis!
            </p>
          </div>
          <div id="mime_type">
            <h3>mime_type</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure a
              distinctio, iusto laborum excepturi, eligendi fugiat accusantium
              molestiae sapiente error officiis ratione, recusandae qui
              architecto voluptates? Suscipit aliquid veritatis debitis!
            </p>
          </div>
          <div id="search">
            <h3>search</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure a
              distinctio, iusto laborum excepturi, eligendi fugiat accusantium
              molestiae sapiente error officiis ratione, recusandae qui
              architecto voluptates? Suscipit aliquid veritatis debitis!
            </p>
          </div>
          <div id="sort">
            <h3>sort</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure a
              distinctio, iusto laborum excepturi, eligendi fugiat accusantium
              molestiae sapiente error officiis ratione, recusandae qui
              architecto voluptates? Suscipit aliquid veritatis debitis!
            </p>
          </div>
          <div id="topic">
            <h3>topic</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure a
              distinctio, iusto laborum excepturi, eligendi fugiat accusantium
              molestiae sapiente error officiis ratione, recusandae qui
              architecto voluptates? Suscipit aliquid veritatis debitis!
            </p>
          </div>
        </div>
        <SyntaxHighlighter
          className="right-column w-5/12 hidden md:block"
          language="json"
          style={vscDarkPlus}
        >
          {JSON.stringify(bookInfo, null, 2)}
        </SyntaxHighlighter>
      </div>
    </MainLayout>
  );
};
