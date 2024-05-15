import React from "react";
import { Card, CardFooter, Button, Image } from "@nextui-org/react";

interface DownloadIconProps {
  title: string;
  src: string;
  download: string;
}

export const DownloadIcon: React.FC<DownloadIconProps> = (
  props: DownloadIconProps
) => {
  const handleDownload = () => {
    window.open(props.download, "_blank");
  };

  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        className="object-cover"
        height={100}
        src={props.src}
        width={100}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
          onClick={handleDownload}
        >
          Descargar
        </Button>
      </CardFooter>
    </Card>
  );
};
