import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

export const Icono: React.FC = (props) => {
  return (
    <div className="flex justify-center items-center">
      <Card isHoverable className="w-[200px] p-4 rounded-2xl">
        <CardBody className="items-center">
          <Avatar src={props.src} className="w-20 h-20 text-large" />
        </CardBody>
        <CardFooter className="text-center">
          <div>
            <h1 className="font-bold text-2xl">{props.heading}</h1>
            <p>{props.paragraph}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
