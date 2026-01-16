export interface OrderResponse {
  id: string;
  name: string;
  statusPageUrl: string;
  createdAt: string;
  displayFinancialStatus: "PAID" | "PENDING";
  displayFulfillmentStatus: "UNFULFILLED" | "FULFILLED" | "MANUAL";
  totalPriceSetUSD: OrderPrice;
  totalPriceSetVES: OrderPrice;
  lineItems: LineItem[];
  customer: Customer;
  debitDirect?: DebitDirect;
}

export interface DebitDirect {
  dni: string;
  dniType: "V" | "E" | "P" | "J" | "G";
  phone: string;
  bank: string;
}

export interface OrderPrice {
  amount: string;
  currencyCode: string;
}

export interface LineItem {
  name: string;
  quantity: number;
  sku: string;
}

export interface Customer {
  id: string;
  displayName: string;
  phone: string;
  dni: string;
  dniType: "V" | "E" | "P" | "J" | "G";
}

export type UpdateCustomerParentIDRequest = {
  dni: string;
  dniType: "V" | "E" | "P" | "J" | "G";
  customerId: string;
};
