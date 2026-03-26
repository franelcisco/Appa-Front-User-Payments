import { useState } from "react";
import type { OrderResponse } from "@/types/dtos/store.dto";
import type { PaymentMethodsType } from "@/types/PaymentValidate";
import { Domiciliacion } from ".";

const MOCK_ORDER: OrderResponse = {
  id: "preview-001",
  name: "#1001",
  statusPageUrl: "",
  createdAt: new Date().toISOString(),
  displayFinancialStatus: "PENDING",
  displayFulfillmentStatus: "UNFULFILLED",
  totalPriceSetUSD: { amount: "15.00", currencyCode: "USD" },
  totalPriceSetVES: { amount: "555.00", currencyCode: "VES" },
  lineItems: [{ name: "Plan Mensual", quantity: 1, sku: "PLAN-001" }],
  customer: {
    id: "cust-001",
    displayName: "Usuario Demo",
    phone: "04121234567",
    dni: "12345678",
    dniType: "V",
  },
};

export const DomiciliacionPreview = () => {
  const [method, setMethod] = useState<PaymentMethodsType>("domiciliacion");

  return (
    <div className="flex w-full h-full justify-center items-center px-4">
      {method === "domiciliacion" ? (
        <Domiciliacion order={MOCK_ORDER} selectedMethod={setMethod} />
      ) : (
        <div className="text-center">
          <p className="text-lg font-bold mb-4">
            Volviste a selección de método
          </p>
          <button
            className="bg-appa-blue text-appa-primary px-6 py-2 rounded-lg font-semibold"
            onClick={() => setMethod("domiciliacion")}
          >
            Volver a Domiciliación
          </button>
        </div>
      )}
    </div>
  );
};
