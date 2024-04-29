import React from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { SendIcon } from "@/icons/SendIcon";

export const Contacto: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Contáctanos</h1>
      <p className="text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        tenetur quaerat pariatur necessitatibus, aperiam exercitationem. Ab enim
        placeat voluptate, at corrupti necessitatibus reprehenderit tenetur
        officia!
      </p>
      <div className="flex justify-center m-8">
        <div className="flex flex-col items-center w-1/2 gap-4">
          <Input type="text" label="Nombre" placeholder="Introduce tu nombre" />
          <Input
            type="text"
            label="Apellidos"
            placeholder="Introduce tus apellidos"
          />
          <Input
            type="email"
            label="Email"
            placeholder="Introduce tu email"
            errorMessage="Por favor, introduce una dirección de correo válida."
          />
          <Textarea label="Mensaje" placeholder="Ingrese su mensaje aquí" />
          <Button color="primary" endContent={<SendIcon />}>
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
};
