import { useState, useCallback, useRef, useEffect } from "react";
import { useStoreStore } from "@/store/store";
import type { OrderResponse } from "@/types/dtos/store.dto";
import type { PaymentMethodsType } from "@/types/PaymentValidate";
import { storeService } from "@/services/store.service";
import { useQuery } from "@/utils/helpers";

export function useOrderState() {
  const query = useQuery();
  const { setOrder, order } = useStoreStore();
  const [orderState, setOrderState] = useState<OrderResponse | null>(null);
  const [isPaid, setIsPaid] = useState<boolean>(false);
  const [selectedMethod, setSelectedMethod] =
    useState<PaymentMethodsType>(undefined);
  const [hasParentID, setHasParentID] = useState<boolean>(false);
  const [inProcessPaid, setInProcessPaid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchingRef = useRef(false);

  const handleChangeOrder = useCallback(
    async (orderResp: OrderResponse) => {
      // Create a shallow copy to avoid direct mutation
      const updatedOrder = { ...orderResp };

      if (updatedOrder.displayFulfillmentStatus === "MANUAL") {
        setInProcessPaid(updatedOrder.displayFinancialStatus === "PENDING");
        updatedOrder.displayFinancialStatus = "PAID";
      }
      if (updatedOrder.displayFinancialStatus === "PAID") {
        setIsPaid(true);
      }
      if (!order) {
        setOrder(updatedOrder.id);
      }

      setOrderState(updatedOrder);
      setHasParentID(updatedOrder.customer.dni !== "");
    },
    [setOrder, order]
  );

  const fetchOrderByID = useCallback(
    async (orderID: string) => {
      setLoading(true);
      try {
        const response = await storeService.findOrderById(orderID);
        if (response) {
          await handleChangeOrder(response);
        } else {
          setOrder(undefined);
        }
      } finally {
        setLoading(false);
      }
    },
    [handleChangeOrder, setOrder]
  );

  const handleChangePaymentMethod = useCallback(
    (method: PaymentMethodsType) => {
      setSelectedMethod(method);
    },
    []
  );

  // Fetch order by ID or Cashea ID
  useEffect(() => {
    let isMounted = true;
    const fetchOrder = async () => {
      if (orderState || fetchingRef.current) return;

      if (order) {
        console.log("Fetching order by ID:", order, orderState);
        fetchingRef.current = true;
        try {
          if (!isMounted) return;
          await fetchOrderByID(order);
        } finally {
          if (isMounted) fetchingRef.current = false;
        }
        return;
      }
    };
    fetchOrder();
    return () => {
      isMounted = false;
    };
  }, [orderState, order, fetchOrderByID]);

  const handleReset = useCallback(() => {
    setSelectedMethod(undefined);
    setOrder(undefined);
    setOrderState(null);
    setIsPaid(false);
  }, [setOrder]);

  useEffect(() => {
    if (!order && !orderState) {
      handleReset();
    }
  }, [handleReset, order, orderState]);

  const handleFetchOrderByParamID = useCallback(() => {
    const orderIdParam = query.get("orderId");
    if (orderIdParam && !order && !orderState) {
      console.debug("Order ID from param:", orderIdParam);
      setOrder(orderIdParam);
    }

  }, [order, orderState, query, setOrder]);

  useEffect(() => {
    handleFetchOrderByParamID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    orderState,
    isPaid,
    loading,
    selectedMethod,
    inProcessPaid,
    hasParentID,
    handleChangePaymentMethod,
    handleReset,
    handleChangeOrder,
  };
}
