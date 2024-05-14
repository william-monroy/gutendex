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

export const Filtros: React.FC = () => {
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
  return (
    <>
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
            selectionMode="multiple"
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
    </>
  );
};
