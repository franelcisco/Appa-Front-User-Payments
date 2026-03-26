import { Button } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import type { DomiciliacionFormData } from "./DomiciliacionBankForm";
import { bankList } from "@/utils/constants";

interface DomiciliacionSuccessProps {
  data: DomiciliacionFormData;
}

export const DomiciliacionSuccess = ({ data }: DomiciliacionSuccessProps) => {
  const bankName =
    bankList.find((b) => b.code === data.bank)?.name || data.bank;

  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-2xl bg-appa-blue/10 flex items-center justify-center mx-auto mb-2 relative">
        <span className="text-3xl">🏦</span>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-md">
          <HiCheck className="w-3.5 h-3.5 text-white" />
        </div>
      </div>

      <h2 className="text-xl font-bold text-appa-primary mt-3">
        ¡Domiciliación activada!
      </h2>
      <p className="text-sm text-gray-600 mt-2">
        Tu cuenta bancaria ha sido afiliada exitosamente.
      </p>
      <p className="text-sm text-appa-blue font-bold mt-1">
        A partir de ahora, cobramos automáticamente.
      </p>
      <p className="text-xs text-gray-400 mt-1">
        Recibirás un correo con los detalles de tu autorización.
      </p>

      <div className="bg-appa-gray rounded-xl p-4 mt-6 text-left">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-gray-400 mb-0.5">Banco</div>
            <div className="text-sm font-bold text-appa-primary">{bankName}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-0.5">Teléfono</div>
            <div className="text-sm font-bold text-appa-primary">
              ****{data.phone.slice(-4)}
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-0.5">Frecuencia</div>
            <div className="text-sm font-bold text-appa-blue">Mensual</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-0.5">Próximo cobro</div>
            <div className="text-sm font-bold text-appa-primary">
              En tu fecha de corte
            </div>
          </div>
        </div>
      </div>

      <Button
        className="w-full mt-5 bg-appa-blue hover:bg-appa-blue-light text-appa-primary"
        onClick={() => window.location.reload()}
      >
        Volver a Mi Suscripción
      </Button>
    </div>
  );
};
