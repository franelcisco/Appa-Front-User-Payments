export interface BCVTasaUSDResponse {
  date: string;
  rate: number;
}

export type OTPRequest = {
  bank: string;
  amount: string;
  phone: string;
  dni: string;
  dniType: "V" | "E" | "P" | "J" | "G";
  orderId: string;
};

export type ValidateOTPRequest = {
  bank: string;
  amount: string;
  phone: string;
  dni: string;
  dniType: "V" | "E" | "P" | "J" | "G";
  name: string;
  otp: string;
  concept: string;
  orderId: string;
  orderName: string;
};

export type ValidateOTPResponse = {
  success: boolean;
  message: string;
};

export type ValidateMobilePaymentRequest = {
  bank: string;
  phone: string;
  reference: string;
  date: string;
  automatic: boolean;
  orderId: string;
  orderName: string;
  dni: string;
  dniType: string;
};

export type ValidateMobilePaymentResponse = {
  success: boolean;
  message: string;
};

export type MobilePaymentReturnRequest = {
  bank: string;
  phone: string;
  dni: string;
  dniType: "V" | "E" | "P" | "J" | "G";
};

export type DomiciliacionRequest = {
  bank: string;
  phone: string;
  phonePrefix: string;
  dni: string;
  dniType: "V" | "E" | "P" | "J" | "G";
  orderId: string;
};

export type DomiciliacionResponse = {
  success: boolean;
  message: string;
};
