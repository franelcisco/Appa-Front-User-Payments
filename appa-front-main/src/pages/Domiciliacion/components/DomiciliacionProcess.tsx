import {
  Button,
  Spinner,
  Accordion,
  AccordionPanel,
  AccordionTitle,
  AccordionContent,
} from "flowbite-react";
import { useEffect, useState } from "react";

interface DomiciliacionProcessProps {
  onNext: () => void;
}

const TUTORIAL_STEPS = [
  {
    title: "Abre el menú de tu banca en línea",
    description: "Ingresa a la web o app de tu banco.",
  },
  {
    title: "Ve a Pagos → Operaciones Inmediatas",
    description: "Dentro del menú, selecciona Pagos.",
  },
  {
    title: "Busca la solicitud de Bone Appetit",
    description: "Verás una solicitud pendiente con nuestro RIF.",
  },
  {
    title: "Haz clic en Acciones → Habilitar",
    description: "Aprueba la domiciliación y listo.",
  },
];

export const DomiciliacionProcess = ({ onNext }: DomiciliacionProcessProps) => {
  const [phase, setPhase] = useState<"sending" | "waiting">("sending");

  useEffect(() => {
    const timer = setTimeout(() => setPhase("waiting"), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (phase === "sending") {
    return (
      <div className="text-center py-12">
        <div className="flex justify-center mb-4">
          <Spinner size="lg" />
        </div>
        <h3 className="text-lg font-bold text-appa-primary">
          Enviando solicitud a tu banco...
        </h3>
        <p className="text-xs text-gray-500 mt-2">No cierres esta ventana</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h3 className="text-xl font-bold text-appa-primary mb-1">
        ¡Solicitud enviada!
      </h3>
      <p className="text-sm font-bold text-appa-primary">
        Apruébala en tu banca en línea
      </p>
      <p className="text-xs text-gray-500 mt-2">
        Entra a tu banco, aprueba la solicitud y vuelve aquí.
      </p>
      <p className="text-xs text-bone-orange mt-2 mb-5">
        Debitaremos VEF 1,00 de validación (te lo devolvemos de inmediato).
      </p>

      <Accordion className="mb-5 text-left">
        <AccordionPanel>
          <AccordionTitle className="text-sm font-bold">
            Ver pasos para aprobar en tu banco
          </AccordionTitle>
          <AccordionContent>
            {TUTORIAL_STEPS.map((step, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <div className="w-6 h-6 rounded-full bg-appa-blue text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="text-sm font-bold text-appa-primary">
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <Button
        className="w-full bg-appa-blue hover:bg-appa-blue-light text-appa-primary"
        onClick={onNext}
      >
        Ya la aprobé
      </Button>
      <button className="w-full text-center text-xs text-gray-400 mt-3 cursor-pointer">
        No sé cómo hacerlo
      </button>
    </div>
  );
};
