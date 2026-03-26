import { useCallback, useState } from "react";
import { Card } from "flowbite-react";
import type { OrderResponse } from "@/types/dtos/store.dto";
import type { PaymentMethodsType } from "@/types/PaymentValidate";
import {
  DomiciliacionBankForm,
  type DomiciliacionFormData,
} from "./components/DomiciliacionBankForm";
import { DomiciliacionAuth } from "./components/DomiciliacionAuth";
import { DomiciliacionProcess } from "./components/DomiciliacionProcess";
import { DomiciliacionValidating } from "./components/DomiciliacionValidating";
import { DomiciliacionSuccess } from "./components/DomiciliacionSuccess";
import { Stepper } from "./components/Stepper";

interface DomiciliacionProps {
  order: OrderResponse;
  selectedMethod: (method: PaymentMethodsType) => void;
}

const STEPPER_LABELS = ["Banco", "Autorización", "Verificación"];

export const Domiciliacion = ({
  order,
  selectedMethod,
}: DomiciliacionProps) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<DomiciliacionFormData | null>(null);

  const handleBankFormNext = useCallback((data: DomiciliacionFormData) => {
    setFormData(data);
    setStep(1);
  }, []);

  const handleBack = useCallback(() => {
    selectedMethod(undefined);
  }, [selectedMethod]);

  const stepperIndex = step <= 1 ? step : 2;
  const showStepper = step <= 3;

  return (
    <Card className="max-w-md w-full">
      {showStepper && (
        <div className="mb-2">
          <Stepper current={stepperIndex} labels={STEPPER_LABELS} />
        </div>
      )}

      {step === 0 && (
        <DomiciliacionBankForm
          order={order}
          onNext={handleBankFormNext}
          onBack={handleBack}
        />
      )}
      {step === 1 && (
        <DomiciliacionAuth
          onNext={() => setStep(2)}
          onBack={() => setStep(0)}
        />
      )}
      {step === 2 && <DomiciliacionProcess onNext={() => setStep(3)} />}
      {step === 3 && (
        <DomiciliacionValidating onNext={() => setStep(4)} />
      )}
      {step === 4 && formData && <DomiciliacionSuccess data={formData} />}
    </Card>
  );
};
