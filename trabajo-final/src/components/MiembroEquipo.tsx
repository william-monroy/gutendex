import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface MiembroEquipoProps {
  src: string;
  name: string;
  role: string;
  width: string;
  className?: string | boolean | undefined;
}

export const MiembroEquipo: React.FC<MiembroEquipoProps> = (
  props: MiembroEquipoProps
) => {
  const combinedClassName = `py-4 ${props.className || ""}`;
  return (
    <Card className={combinedClassName}>
      <CardHeader className="overflow-visible py-2">
        <Image
          className="object-cover rounded-xl"
          src={props.src}
          alt="Card background"
          width={props.width}
          isZoomed
        />
      </CardHeader>
      <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{props.name}</h4>
        <small className="text-default-500">{props.role}</small>
      </CardBody>
    </Card>
  );
};
