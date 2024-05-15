import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "@nextui-org/react";
import { Libro } from "@/components/Libro";
import LibroLoading from "./LibroLoading";
import useBooks from "@/hooks/useBooks";
import { useQueryParam } from "@/hooks/useQueryParam";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
} from "@nextui-org/react";
import { DropdownIcon } from "@/icons/DropdownIcon";
import { SearchIcon } from "@/icons/SearchIcon";
import { useEffect, useMemo, useState } from "react";
import { Book } from "@/types/Book.type";

function ListaLibros() {
  const query = useQueryParam();

  const { data, isLoading, isError } = useBooks(
    query.get("page") ? parseInt(query.get("page") || "1") : 1,
    query.get("search") ?? "",
    query.get("languages") ?? "",
    query.get("topic") ?? ""
  );

  const navigate = useNavigate();

  const [selectedKeys, setSelectedKeys] = useState(
    new Set(["Selecciona un filtro"])
  );
  const [searchText, setSearchText] = useState("");

  const selectedValue = useMemo(
    () =>
      Array.from(selectedKeys)
        .join(", ")
        .replace("Selecciona un filtro,", "")
        .replaceAll("_", " "),
    [selectedKeys]
  );

  useEffect(() => {
    if (query.get("search")) {
      setSearchText(query.get("search") || "");
      setSelectedKeys(new Set(["titulo"]));
    }
    if (query.get("languages")) {
      setSelectedKeys(new Set(["idioma"]));
      setSearchText(query.get("languages") || "");
    }
    if (query.get("topic")) {
      setSelectedKeys(new Set(["tema"]));
      setSearchText(query.get("topic") || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    query.delete("topic");
    query.delete("search");
    query.delete("languages");
    const queryParam = Array.from(selectedKeys)[0].replace(" ", "_");
    if (queryParam === "titulo" || queryParam === "autor") {
      query.set("search", searchText);
    } else if (queryParam === "idioma") {
      query.set("languages", searchText);
    } else if (queryParam === "tema") {
      query.set("topic", searchText);
    }
    navigate(`/catalog?${query.toString()}`);
  };

  if (isLoading)
    return (
      <div>
        <div className="flex justify-center items-center flex-wrap gap-4 mb-8">
          <h3 className="font-bold">Buscar por:</h3>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" endContent={<DropdownIcon />}>
                {selectedValue || "Selecciona un filtro"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              variant="flat"
              aria-label="Filtra por:"
              closeOnSelect={false}
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
              color="primary"
            >
              <DropdownItem key="titulo" description="Ejm: Romeo and Juliet">
                Título
              </DropdownItem>
              <DropdownItem key="autor" description="Ejm: William Shakespeare">
                Autor
              </DropdownItem>
              <DropdownItem key="idioma" description="Ejm: fr,fi">
                Idioma
              </DropdownItem>
              <DropdownItem key="tema" description="Ejm: Fiction">
                Tema
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Input
            isClearable
            onClear={() => setSearchText("")}
            type="text"
            variant="bordered"
            placeholder="Introduce el término de búsqueda"
            className="max-w-xs w-auto min-w-[280px]"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter" && searchText.length > 0 && selectedValue) {
                handleSearch();
              }
            }}
          />

          <Button
            color="primary"
            startContent={<SearchIcon />}
            isDisabled={!searchText || selectedValue === "Selecciona un filtro"}
            onClick={() => {
              query.delete("topic");
              query.delete("search");
              query.delete("languages");
              const queryParam = Array.from(selectedKeys)[0].replace(" ", "_");
              if (queryParam === "titulo" || queryParam === "autor") {
                query.set("search", searchText);
              } else if (queryParam === "idioma") {
                query.set("languages", searchText);
              } else if (queryParam === "tema") {
                query.set("topic", searchText);
              }
              navigate(`/catalog?${query.toString()}`);
            }}
          >
            Buscar
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <LibroLoading key={index} />
          ))}
        </div>
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center h-72">
        <p className="text-center">Error al cargar los libros</p>
      </div>
    );

  return (
    <div>
      <div className="flex justify-center items-center flex-wrap gap-4 mb-8">
        <h3 className="font-bold">Buscar por:</h3>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" endContent={<DropdownIcon />}>
              {selectedValue || "Selecciona un filtro"}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="flat"
            aria-label="Filtra por:"
            closeOnSelect={false}
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
            color="primary"
          >
            <DropdownItem key="titulo" description="Ejm: Romeo and Juliet">
              Título
            </DropdownItem>
            <DropdownItem key="autor" description="Ejm: William Shakespeare">
              Autor
            </DropdownItem>
            <DropdownItem key="idioma" description="Ejm: fr,fi">
              Idioma
            </DropdownItem>
            <DropdownItem key="tema" description="Ejm: Fiction">
              Tema
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Input
          isClearable
          onClear={() => setSearchText("")}
          type="text"
          variant="bordered"
          placeholder="Introduce el término de búsqueda"
          className="max-w-xs w-auto min-w-[280px]"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter" && searchText.length > 0 && selectedValue) {
              handleSearch();
            }
          }}
        />

        <Button
          color="primary"
          startContent={<SearchIcon />}
          isDisabled={!searchText || selectedValue === "Selecciona un filtro"}
          onClick={() => {
            handleSearch();
          }}
        >
          Buscar
        </Button>
      </div>
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
              //reset scrool to top
              window.scrollTo(0, 0);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ListaLibros;
