import { OrderPaid } from "../../components/OrderPaid.tsx";
import { PaymentMethodSelection } from "../PaymentMethodSelection/index.tsx";
import { Spinner } from "flowbite-react";
import { ParentID } from "../ParentID/index.tsx";
import { NotFound404 } from "@/components/404NotFound.tsx";
import { useOrderState } from "@/hooks/useOrderState";
import { PaymentMethodRenderer } from "./components/PaymentMethodRenderer.tsx";

const PaymentValidatePage = () => {
  const {
    orderState,
    isPaid,
    loading,
    selectedMethod,
    inProcessPaid,
    hasParentID,
    handleChangePaymentMethod,
    handleReset,
  } = useOrderState();

  if (loading) {
    return (
      <div className="flex w-full h-full justify-center items-center px-4">
        <div className="max-w-md mx-auto mt-10 p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Cargando...</h2>
          <Spinner aria-label="Small spinner example" size="sm" />
        </div>
      </div>
    );
  }

  if (isPaid) {
    return (
      <div className="flex w-full h-full justify-center items-center px-4">
        <OrderPaid inProcess={inProcessPaid} handleReset={handleReset} />
      </div>
    );
  }

  if (!orderState) {
    return (
      <div className="flex w-full h-full justify-center items-center px-4">
        <NotFound404 />
      </div>
    );
  }

  return (
    <div className="flex w-full h-full justify-center items-center px-4">
      {!selectedMethod ? (
        hasParentID ? (
          <PaymentMethodSelection
            onSelect={handleChangePaymentMethod}
            order={orderState}
            onCancel={handleReset}
          />
        ) : (
          <ParentID customerId={orderState.customer.id} />
        )
      ) : (
        <PaymentMethodRenderer
          method={selectedMethod}
          order={orderState}
          onSelect={handleChangePaymentMethod}
        />
      )}
    </div>
  );
};

export default PaymentValidatePage;
