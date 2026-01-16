import { HeaderSuccess } from "./HeaderSuccess";
import { StatusPageButton } from "./StatusPageButton";

interface SuccessValidatedProps {
  inProcess: boolean;
  statusPageUrl: string;
  orderNo: string;
}

export const SuccessValidated = ({
  inProcess,
  statusPageUrl,
  orderNo,
}: SuccessValidatedProps) => {
  return (
    <div>
      <HeaderSuccess inProcess={inProcess} orderNo={orderNo} />
      <p className="font-semibold">
        {inProcess
          ? "Verificaremos tu pago y te notificaremos cuando ya esté confirmado ✅"
          : "¡Ya está todo listo! Tu peludo está seguro con nosotros. Gracias por ser un appá responsable 🥇"}
      </p>
      <StatusPageButton statusPageUrl={statusPageUrl} />
    </div>
  );
};
