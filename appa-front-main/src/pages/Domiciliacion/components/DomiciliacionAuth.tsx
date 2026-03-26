import { Button, Checkbox, Label } from "flowbite-react";
import { useState } from "react";
import { HiCheck, HiArrowLeft } from "react-icons/hi";

interface DomiciliacionAuthProps {
  onNext: () => void;
  onBack: () => void;
}

export const DomiciliacionAuth = ({ onNext, onBack }: DomiciliacionAuthProps) => {
  const [acceptAuth, setAcceptAuth] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const canContinue = acceptAuth && acceptTerms;

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-2">
        Autoriza tu domiciliación
      </h2>
      <p className="text-xs text-gray-500 text-center mb-1">
        Enviaremos una solicitud a tu banco. Luego la apruebas desde tu banca
        en línea.
      </p>
      <p className="text-xs text-appa-blue font-semibold text-center mb-5">
        Es rápido y seguro.
      </p>

      <div className="bg-bone-beige-light rounded-xl p-4 mb-5 border border-appa-blue/20">
        <div className="text-sm font-bold text-appa-primary mb-3">
          Tu cuenta está protegida
        </div>
        {[
          "Solo cobramos el monto exacto de tu plan",
          "Puedes cancelar la domiciliación cuando quieras",
          "Haremos un cargo de Bs. 1 de validación que será devuelto",
        ].map((text, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <HiCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-xs text-gray-600">{text}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-start gap-3">
          <Checkbox
            id="acceptAuth"
            checked={acceptAuth}
            onChange={() => setAcceptAuth(!acceptAuth)}
          />
          <Label htmlFor="acceptAuth" className="text-xs text-gray-600">
            He leído y acepto la{" "}
            <span className="text-appa-blue font-semibold cursor-pointer">
              Autorización de Domiciliación
            </span>
          </Label>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox
            id="acceptTerms"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
          />
          <Label htmlFor="acceptTerms" className="text-xs text-gray-600">
            He leído y acepto los{" "}
            <span className="text-appa-blue font-semibold cursor-pointer">
              Términos y Condiciones
            </span>
          </Label>
        </div>
      </div>

      <div className="flex gap-3">
        <Button color="light" onClick={onBack} className="flex items-center gap-1">
          <HiArrowLeft className="w-4 h-4" />
          Atrás
        </Button>
        <Button
          className="flex-1 bg-appa-blue hover:bg-appa-blue-light text-appa-primary"
          onClick={onNext}
          disabled={!canContinue}
        >
          Domiciliar cuenta
        </Button>
      </div>
    </div>
  );
};
