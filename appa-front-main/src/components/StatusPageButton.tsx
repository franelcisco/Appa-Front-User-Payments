import { Button } from "flowbite-react";
import { useEffect } from "react";

interface Props {
  statusPageUrl: string;
}

export const StatusPageButton = ({ statusPageUrl }: Props) => {
  useEffect(() => {
    console.debug("Status Page URL:", statusPageUrl);
  }, [statusPageUrl]);
  return (
    <a
      href={"https://app.appasalud.com/"}
      target="_blank"
      className="flex justify-center gap-3 mt-4"
    >
      <Button className="bg-appa-blue hover:bg-appa-blue-light text-appa-primary">
        Ver mi Poliza
      </Button>
    </a>
  );
};
