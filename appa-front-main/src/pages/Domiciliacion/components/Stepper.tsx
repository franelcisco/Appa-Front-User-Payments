import { HiCheck } from "react-icons/hi";

interface StepperProps {
  current: number;
  labels: string[];
}

export const Stepper = ({ current, labels }: StepperProps) => {
  return (
    <div className="flex items-center w-full px-2">
      {labels.map((label, i) => (
        <div
          key={i}
          className="flex flex-1 flex-col items-center"
        >
          <div className="flex items-center w-full">
            {i > 0 && (
              <div
                className={`flex-1 h-0.5 transition-colors duration-400 ${
                  i <= current ? "bg-appa-blue" : "bg-gray-200"
                }`}
              />
            )}
            <div
              className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold transition-all duration-400 ${
                i < current
                  ? "bg-appa-blue text-white"
                  : i === current
                  ? "bg-appa-primary text-white ring-3 ring-appa-blue/20"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              {i < current ? <HiCheck className="w-4 h-4" /> : i + 1}
            </div>
            {i < labels.length - 1 && (
              <div
                className={`flex-1 h-0.5 transition-colors duration-400 ${
                  i < current ? "bg-appa-blue" : "bg-gray-200"
                }`}
              />
            )}
          </div>
          <span
            className={`text-xs mt-1.5 ${
              i <= current
                ? "text-appa-primary font-bold"
                : "text-gray-400 font-medium"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};
