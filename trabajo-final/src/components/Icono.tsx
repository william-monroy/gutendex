import { Card } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

export const Icono: React.FC = (props) => {
  return (
    <Card className="flex flex-col items-center justify-center w-[200px] space-y-5 p-4 rounded-2xl">
      <Avatar src={props.src} className="w-20 h-20 text-large" />
      <div className="text-center space-y-3">
        <h1 className="font-bold text-2xl">{props.heading}</h1>
        <p>{props.paragraph}</p>
      </div>
    </Card>
  );
};
