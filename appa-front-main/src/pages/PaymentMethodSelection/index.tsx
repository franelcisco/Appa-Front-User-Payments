import { Card, Button } from "flowbite-react";
import { FaMobileScreen, FaMoneyCheck, FaBuildingColumns } from "react-icons/fa6";
import { OrderDetailsModal } from "../../components/OrderDetails";
import { useState } from "react";
import type { OrderResponse } from "@/types/dtos/store.dto";
import type { PaymentMethodsType } from "@/types/PaymentValidate";
import { PaymentAmounts } from "@/components/PaymentAmounts";
import { BackButton } from "@/components/BackButton";

interface PaymentMethodSelectionProps {
  onSelect: (method: PaymentMethodsType) => void;
  onCancel: () => void;
  order: OrderResponse;
}

export function PaymentMethodSelection({
  onSelect,
  order,
  onCancel,
}: PaymentMethodSelectionProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => setOpenModal(false);
  return (
    <>
      <OrderDetailsModal
        order={order}
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      />
      <Card className="max-w-md w-full px-8 pb-8">
        <BackButton onClick={onCancel} order={order} />
        <PaymentAmounts
          totalPriceVESAmount={order.totalPriceSetVES.amount}
          totalPriceUSD={order.totalPriceSetUSD.amount}
        />
        <div>
          <div className="grid mb-4 grid-cols-1 gap-1 text-left">
            <span className="flex text-2xl font-bold">
              Selecciona el método de pago
            </span>

            <div className=" text-xs">
              Si te suscribiste con tarjeta internacional o paypal no hace falta
              llenar este formulario.
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              className="border-appa-blue hover:bg-appa-blue"
              type="button"
              color="light"
              onClick={() => onSelect("directDebit")}
            >
              <div className="w-4/5 grid grid-cols-3 items-center">
                <div className="justify-items-center">
                  <FaMoneyCheck className="mr-2 h-5 w-5" />
                </div>
                <div className="col-span-2 text-start">Débito inmediato</div>
              </div>
            </Button>
            <Button
              className="border-appa-blue hover:bg-appa-blue"
              type="button"
              color="light"
              onClick={() => onSelect("mobilePayment")}
            >
              <div className="w-4/5 grid grid-cols-3 items-center">
                <div className="justify-items-center">
                  <FaMobileScreen className="mr-2 h-5 w-5" />
                </div>
                <div className="col-span-2 text-start">Pago Móvil</div>
              </div>
            </Button>
            {import.meta.env.VITE_ENABLE_DOMICILIACION === "true" && (
              <Button
                className="border-appa-blue hover:bg-appa-blue"
                type="button"
                color="light"
                onClick={() => onSelect("domiciliacion")}
              >
                <div className="w-4/5 grid grid-cols-3 items-center">
                  <div className="justify-items-center">
                    <FaBuildingColumns className="mr-2 h-5 w-5" />
                  </div>
                  <div className="col-span-2 text-start">Domiciliación</div>
                </div>
              </Button>
            )}
            {/* <Button
              className="border-appa-blue hover:bg-appa-blue"
              type="button"
              color="light"
              onClick={() => onSelect("cash")}
            >
              <div className="w-4/5 grid grid-cols-3 items-center">
                <div className="justify-items-center">
                  <FaMoneyBillWave className="mr-2 h-5 w-5" />
                </div>
                <div className="col-span-2 text-start">Efectivo</div>
              </div>
            </Button> */}
            {/* <Button
              className="border-appa-blue hover:bg-appa-blue"
              type="button"
              color="light"
              onClick={() => onSelect("zelle")}
            >
              <div className="w-4/5 grid grid-cols-3 items-center">
                <div className="justify-items-center">
                  <SiZelle className="mr-2 h-5 w-5" />
                </div>
                <div className="col-span-2 text-start">Zelle</div>
              </div>
            </Button> */}
          </div>
        </div>
      </Card>
    </>
  );
}
