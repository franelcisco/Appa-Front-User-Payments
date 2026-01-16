import { HeaderError } from "@/components/HeaderError";
import { SuccessValidated } from "@/components/SuccessValidated";
import { useStoreStore } from "@/store/store";
import { useEffect } from "react";

interface Props {
  success: boolean;
  statusPageUrl: string;
  orderNo: string;
}

export function MobilePaymentManualResult({
  success,
  statusPageUrl,
  orderNo,
}: Props) {
  const { setOrder } = useStoreStore();

  useEffect(() => {
    if (success) {
      setOrder(undefined);
    }
  }, [success, setOrder]);

  return (
    <div className="max-w-md w-full text-center">
      {!success ? (
        <>
          <HeaderError orderNo={orderNo} />
          <p className="font-semibold">
            Hubo un problema procesando tu comprobante. Por favor, Contacta con
            atención al cliente a nuestro whatsapp +1 (251) 277 3257
          </p>
        </>
      ) : (
        <SuccessValidated
          orderNo={orderNo}
          inProcess={true}
          statusPageUrl={statusPageUrl}
        />
      )}
    </div>
  );
}
