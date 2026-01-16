import { Button } from "flowbite-react";

interface SelectedOtherMethodPaymentButtonProps {
  onBack: () => void;
}

export const SelectedOtherMethodPaymentButton = ({
  onBack,
}: SelectedOtherMethodPaymentButtonProps) => {
  return (
    <div className="flex justify-center gap-3 mt-4">
      <Button
        className="bg-appa-blue hover:bg-appa-blue-light text-appa-primary"
        onClick={onBack}
      >
        Elegir otro método
      </Button>
    </div>
  );
};
