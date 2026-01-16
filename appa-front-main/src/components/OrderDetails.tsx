import type { OrderResponse } from "@/types/dtos/store.dto";
import { ModalTheme } from "@/utils/ui";
import {
  createTheme,
  Modal,
  ModalBody,
  ModalHeader,
  ThemeProvider,
} from "flowbite-react";

interface OrderDetailsProps {
  order: OrderResponse;
  openModal: boolean;
  handleCloseModal: () => void;
}
const theme = createTheme({
  modal: ModalTheme,
});

export const OrderDetailsModal = ({
  order,
  openModal,
  handleCloseModal,
}: OrderDetailsProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Modal
        dismissible
        show={openModal}
        onClose={handleCloseModal}
        size="lg"
        position="center"
      >
        <ModalHeader>Detalles de tu Orden</ModalHeader>
        <ModalBody>
          <div className="text-sm mb-2">
            N° de orden: <strong>{order?.name}</strong>
          </div>
          <div className="mt-1 text-sm">
            <h3 className="font-semibold mb-2">Polizas:</h3>
            {order?.lineItems?.map((product) => (
              <div className="flex justify-between items-center border bg-bone-beige border-appa-primary p-2 text-xs rounded">
                <div className="truncate font-medium">
                  {product.name}
                </div>
                <p className="inline-flex items-center font-semibold">
                  {`x ${product.quantity}`}
                </p>
              </div>
            ))}
          </div>
        </ModalBody>
      </Modal>
    </ThemeProvider>
  );
};
