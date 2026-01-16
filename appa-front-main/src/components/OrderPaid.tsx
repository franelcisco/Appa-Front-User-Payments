import { useStoreStore } from "@/store/store";
import { Button } from "flowbite-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface OrderPaidProps {
  inProcess: boolean;
  handleReset: () => void;
}

export function OrderPaid({ inProcess, handleReset }: OrderPaidProps) {
  const { setOrder } = useStoreStore();
  const navigate = useNavigate(); // <-- usar navigate

  useEffect(() => {
    setOrder(undefined);
  }, [setOrder]);

  const handlePayOtherOrder = () => {
    handleReset();
    navigate("/", { replace: true });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 text-center">
      <h2 className="text-2xl font-medium mb-4">
        {inProcess
          ? "Esta orden se encuentra en verificación"
          : "Esta orden ya ha sido pagada exitosamente 💛"}
      </h2>
      <div className="flex justify-center gap-3 mt-4">
        <Button
          className="bg-appa-blue hover:bg-appa-blue-light text-appa-primary"
          onClick={handlePayOtherOrder}
        >
          Pagar otra orden
        </Button>
      </div>
    </div>
  );
}
