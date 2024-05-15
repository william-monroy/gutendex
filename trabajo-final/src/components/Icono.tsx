import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import { cls } from "@/utils/Tailwind";

interface IconoProps {
  src: string;
  heading: string;
  paragraph?: string;
  className?: string | boolean | undefined;
}

export const Icono: React.FC<IconoProps> = (props: IconoProps) => {
  return (
    <Card
      isHoverable
      className={cls(
        "w-[240px] p-2 rounded-2xl h-[232px] min-w-[240px]",
        props.paragraph ? "h-auto" : "w-[auto] p-6",
        props.className
      )}
    >
      <CardHeader className="flex justify-center">
        <Avatar src={props.src} className="w-20 h-20 text-large" />
      </CardHeader>
      <CardBody className="text-center">
        <h3 className="font-bold text-xl">{props.heading}</h3>
        {props.paragraph && (
          <p className={"text-md txt-p-color"}>{props.paragraph}</p>
        )}
      </CardBody>
    </Card>
  );
};
