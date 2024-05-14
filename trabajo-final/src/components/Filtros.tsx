import React from "react";
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

export const Filtros: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Selecciona un filtro"])
  );

  const selectedValue = React.useMemo(
    () =>
      Array.from(selectedKeys)
        .join(", ")
        .replace("Selecciona un filtro,", "")
        .replaceAll("_", " "),
    [selectedKeys]
  );
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-4">
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
            onSelectionChange={setSelectedKeys}
          >
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Input
          isClearable
          type="text"
          variant="bordered"
          placeholder="Introduce el término de búsqueda"
          className="max-w-xs"
        />

        <Button color="primary" startContent={<SearchIcon />}>
          Buscar
        </Button>
      </div>
    </>
  );
};
