import { Card, CardHeader, CardBody, Image, Tooltip } from "@nextui-org/react";

interface LibroProps {
  src: string;
  titulo: string;
  autor: string;
  className?: string | boolean | undefined;
}

export const Libro: React.FC<LibroProps> = (props: LibroProps) => {
  const combinedClassName = `flex max-w-[224px] ${props.className || ""}`;
  return (
    <Tooltip content={props.titulo} color="primary" placement="top">
      <Card className={combinedClassName}>
        <CardHeader>
          <Image
            className="object-cover rounded-xl w-[200px] h-[300px] shadow-lg"
            src={props.src}
            alt={props.titulo}
            isZoomed
            width={200}
            height={300}
          />
        </CardHeader>
        <CardBody className="pb-2 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large max-h-[84px]">
            {props.titulo.length > 50
              ? `${props.titulo.slice(0, 50)}...`
              : props.titulo}
          </h4>
          <small className="text-default-500">
            {props.autor.length > 30
              ? `${props.autor.slice(0, 30)}...`
              : props.autor}
          </small>
        </CardBody>
      </Card>
    </Tooltip>
  );
};
