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
import { useMemo, useState } from "react";

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
            aria-label="Multiple selection example"
            closeOnSelect={false}
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
          >
            <DropdownItem key="idioma">Idioma</DropdownItem>
            <DropdownItem key="tema">Tema</DropdownItem>
            <DropdownItem key="edit">Edit</DropdownItem>
            <DropdownItem key="delete">Delete file</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Input
          isClearable
          type="text"
          variant="bordered"
          placeholder="Introduce el término de búsqueda"
          className="max-w-xs"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Button
          color="primary"
          startContent={<SearchIcon />}
          isDisabled={!searchText}
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
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ListaLibros;
