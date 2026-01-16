import type { OrderResponse } from "@/types/dtos/store.dto";
import { Button } from "flowbite-react";
import { FaListCheck } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { OrderDetailsModal } from "./OrderDetails";
import { useState } from "react";

interface BackButtonProps {
  onClick: () => void;
  order: OrderResponse;
}

export const BackButton = ({ onClick, order }: BackButtonProps) => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="flex justify-between items-start">
      <Button
        className="border-0"
        title="Volver"
        color="light"
        size="xs"
        onClick={onClick}
      >
        <MdKeyboardArrowLeft className="w-4 h-4 p-0.5 text-appa-primary bg-appa-yellow rounded-sm mr-1" />
        Volver
      </Button>
      <Button
        className="bg-appa-blue hover:bg-appa-blue-light text-appa-primary"
        title="Volver"
        // color="light"
        size="xs"
        onClick={handleOpenModal}
      >
        <FaListCheck className="w-4 h-4" />
      </Button>
      <OrderDetailsModal
        order={order}
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};
