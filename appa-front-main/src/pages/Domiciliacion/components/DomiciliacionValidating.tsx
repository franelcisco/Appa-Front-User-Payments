import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";

interface DomiciliacionValidatingProps {
  onNext: () => void;
}

const MESSAGES = [
  { title: "Validando tu afiliación", sub: "Debitaremos Bs. 1 que te devolvemos" },
  { title: "Confirmando con tu banco", sub: "Esperando respuesta del banco" },
  { title: "Casi listo...", sub: "Gracias por tu paciencia" },
];

export const DomiciliacionValidating = ({
  onNext,
}: DomiciliacionValidatingProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2000);
    const t2 = setTimeout(() => setPhase(2), 4000);
    const t3 = setTimeout(onNext, 5500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onNext]);

  return (
    <div className="text-center py-12">
      <div className="flex justify-center mb-4">
        <Spinner size="lg" />
      </div>
      <h3 className="text-lg font-bold text-appa-primary">
        {MESSAGES[phase].title}
      </h3>
      <p className="text-xs text-gray-500 mt-2">{MESSAGES[phase].sub}</p>
      <p className="text-xs text-bone-orange font-semibold mt-4">
        No cierres esta ventana
      </p>
      <div className="flex justify-center gap-1.5 mt-5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-400 ${
              i <= phase ? "bg-appa-blue" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
