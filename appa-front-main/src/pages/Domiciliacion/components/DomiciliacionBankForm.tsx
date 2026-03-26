import { Button, Label, Select, TextInput, Alert } from "flowbite-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { domiciliacionSchema } from "@/types/shemas";
import { documentTypes } from "@/utils/constants";
import { BankDropdown } from "@/components/BankDropdown";
import { InputErrorMessage } from "@/components/InputErrorMessage";
import { BackButton } from "@/components/BackButton";
import { PaymentAmounts } from "@/components/PaymentAmounts";
import type { OrderResponse } from "@/types/dtos/store.dto";
import { HiShieldCheck } from "react-icons/hi";

interface DomiciliacionBankFormProps {
  order: OrderResponse;
  onNext: (data: DomiciliacionFormData) => void;
  onBack: () => void;
}

export type DomiciliacionFormData = {
  bank: string;
  phonePrefix: string;
  phone: string;
  phoneConfirm: string;
  dni: string;
  dniType: "V" | "E" | "P" | "J" | "G";
  orderId: string;
};

const PHONE_PREFIXES = ["0412", "0414", "0424", "0416", "0426"];

export const DomiciliacionBankForm = ({
  order,
  onNext,
  onBack,
}: DomiciliacionBankFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<DomiciliacionFormData>({
    defaultValues: {
      bank: order.debitDirect?.bank || "",
      phonePrefix: "0412",
      phone: "",
      phoneConfirm: "",
      dni: order.debitDirect?.dni || "",
      dniType: order.debitDirect?.dniType || "V",
      orderId: order.id,
    },
    resolver: yupResolver(domiciliacionSchema) as never,
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<DomiciliacionFormData> = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BackButton onClick={onBack} order={order} />
      <PaymentAmounts
        totalPriceVESAmount={order.totalPriceSetVES.amount}
        totalPriceUSD={order.totalPriceSetUSD.amount}
      />

      <h2 className="text-2xl font-bold text-left mb-1">
        Domicilia tu cuenta bancaria
      </h2>
      <p className="text-xs text-gray-500 mb-4">
        Activa el pago automático de tu suscripción
      </p>

      <Alert color="success" icon={HiShieldCheck} className="mb-4 text-xs">
        Tu información está protegida con encriptación
      </Alert>

      <div className="flex flex-col gap-4 mb-4">
        <div>
          <BankDropdown
            currentValue={watch("bank")}
            onChange={(value) => setValue("bank", value)}
            error={errors.bank?.message}
          />
        </div>

        <div>
          <div className="block">
            <Label htmlFor="dni">Cédula del titular de la cuenta</Label>
          </div>
          <div className="flex gap-1">
            <Select
              id="dniType"
              className="min-w-14"
              {...register("dniType")}
              color={errors.dniType ? "failure" : undefined}
            >
              {documentTypes.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
            </Select>
            <TextInput
              id="dni"
              inputMode="numeric"
              className="w-full"
              placeholder="12345678"
              color={errors.dni ? "failure" : undefined}
              {...register("dni")}
            />
          </div>
          <InputErrorMessage message={errors.dni?.message} />
          <InputErrorMessage message={errors.dniType?.message} />
        </div>

        <div>
          <div className="block">
            <Label htmlFor="phone">Teléfono afiliado a la cuenta</Label>
          </div>
          <div className="flex gap-2">
            <Select
              id="phonePrefix"
              className="min-w-24"
              {...register("phonePrefix")}
            >
              {PHONE_PREFIXES.map((prefix) => (
                <option key={prefix} value={prefix}>
                  {prefix}
                </option>
              ))}
            </Select>
            <TextInput
              id="phone"
              inputMode="numeric"
              className="w-full"
              placeholder="1234567"
              color={errors.phone ? "failure" : undefined}
              {...register("phone")}
            />
          </div>
          <InputErrorMessage message={errors.phone?.message} />
        </div>

        <div>
          <div className="block">
            <Label htmlFor="phoneConfirm">Confirmar teléfono</Label>
          </div>
          <div className="flex gap-2">
            <Select className="min-w-24" value={watch("phonePrefix")} disabled>
              <option>{watch("phonePrefix")}</option>
            </Select>
            <TextInput
              id="phoneConfirm"
              inputMode="numeric"
              className="w-full"
              placeholder="1234567"
              color={errors.phoneConfirm ? "failure" : undefined}
              {...register("phoneConfirm")}
            />
          </div>
          <InputErrorMessage message={errors.phoneConfirm?.message} />
        </div>
      </div>

      <Button
        className="w-full bg-appa-blue hover:bg-appa-blue-light text-appa-primary"
        type="submit"
      >
        Continuar
      </Button>
    </form>
  );
};
