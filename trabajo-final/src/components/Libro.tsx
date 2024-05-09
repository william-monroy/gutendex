import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface LibroProps {
  src: string;
  titulo: string;
  autor: string;
  className?: string | boolean | undefined;
}

export const Libro: React.FC<LibroProps> = (props: LibroProps) => {
  const combinedClassName = `py-4 ${props.className || ""}`;
  return (
    <Card className={combinedClassName}>
      <CardHeader className="overflow-visible py-2">
        <Image
          className="object-cover rounded-xl"
          src={props.src}
          alt="Card background"
          isZoomed
        />
      </CardHeader>
      <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{props.titulo}</h4>
        <small className="text-default-500">{props.autor}</small>
      </CardBody>
    </Card>
  );
};
