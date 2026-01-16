import { DirectDebit } from "@/pages/DirectDebit";
import { MobilePayment } from "@/pages/MobilePayment";
import type { OrderResponse } from "@/types/dtos/store.dto";
import type { PaymentMethodsType } from "@/types/PaymentValidate";

export const PaymentMethodRenderer = ({
  method,
  order,
  onSelect,
}: {
  method: PaymentMethodsType;
  order: OrderResponse;
  onSelect: (method: PaymentMethodsType) => void;
}) => {
  switch (method) {
    case "directDebit":
      return <DirectDebit order={order} selectedMethod={onSelect} />;
    case "mobilePayment":
      return <MobilePayment order={order} selectedMethod={onSelect} />;
    default:
      return null;
  }
};