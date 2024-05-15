import { Card, CardBody, CardHeader, Skeleton } from "@nextui-org/react";

const LibroLoading = () => {
  return (
    <Card className="flex max-w-[224px]">
      <CardHeader className="">
        <Skeleton className="mt-2 rounded-xl w-[200px] h-[300px] shadow-lg" />
      </CardHeader>
      <CardBody className="gap-4 flex-col items-start">
        <Skeleton className="h-6 w-full rounded-md" />
        <Skeleton className="h-4 w-5/6 rounded-md" />
      </CardBody>
    </Card>
  );
};

export default LibroLoading;
