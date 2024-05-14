import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface MiembroEquipoProps {
  src: string;
  name: string;
  role: string;
  width: string | number;
  className?: string | boolean | undefined;
}

export const MiembroEquipo: React.FC<MiembroEquipoProps> = (
  props: MiembroEquipoProps
) => {
  const combinedClassName = `py-4 ${props.className || ""}`;
  return (
    <Card className={combinedClassName} isHoverable isPressable>
      <CardHeader className="overflow-visible py-2">
        <Image
          className="object-cover rounded-xl"
          src={`assets/${props.src}`}
          alt={props.name}
          width={props.width}
          isZoomed
        />
      </CardHeader>
      <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large text-balance text-center">
          {props.name}
        </h4>
        <small className="text-default-500 text-center w-full">
          {props.role}
        </small>
      </CardBody>
    </Card>
  );
};
