import * as yup from "yup";

export const otpSchema = yup.object().shape({
  bank: yup.string().required("El banco es obligatorio"),
  amount: yup.string().required("El monto es obligatorio"),
  phone: yup
    .string()
    .matches(
      /^(0414|0424|0416|0426|0412|0422)\d{7}$/,
      "El teléfono debe comenzar con 0414, 0424, 0416, 0426, 0412 o 0422 y tener 11 dígitos numéricos"
    )
    .required("El teléfono es obligatorio"),
  dni: yup
    .string()
    .matches(/^\d{6,8}$/, "El DNI debe tener entre 6 y 8 dígitos")
    .required("El DNI es obligatorio"),
  dniType: yup
    .string()
    .oneOf(["V", "E", "P", "J", "G"], "El tipo de DNI es inválido")
    .required("El tipo de DNI es obligatorio"),
  orderId: yup.string().required("El ID de la orden es obligatorio"),
});

export const validateDirectDebitSchema = yup.object().shape({
  bank: yup.string().required("El banco es obligatorio"),
  amount: yup.string().required("El monto es obligatorio"),
  phone: yup
    .string()
    .matches(
      /^(0414|0424|0416|0426|0412|0422)\d{7}$/,
      "El teléfono debe comenzar con 0414, 0424, 0416, 0426, 0412 o 0422 y tener 11 dígitos numéricos"
    )
    .required("El teléfono es obligatorio"),
  dni: yup
    .string()
    .matches(/^\d{8}$/, "El DNI debe tener 8 dígitos")
    .required("El DNI es obligatorio"),
  dniType: yup
    .string()
    .oneOf(["V", "E", "P", "J", "G"], "El tipo de DNI es inválido")
    .required("El tipo de DNI es obligatorio"),
  name: yup.string().required("El nombre es obligatorio"),
  otp: yup
    .string()
    .matches(/^\d{8}$/, "El OTP debe tener 6 dígitos")
    .required("El OTP es obligatorio"),
  concept: yup.string().required("El concepto es obligatorio"),
  orderId: yup.string().required("El ID de la orden es obligatorio"),
  orderName: yup.string().required("El nombre de la orden es obligatorio"),
});

export const validateMobilePaymentSchema = yup.object().shape({
  bank: yup.string().required("El banco es obligatorio"),
  phone: yup
    .string()
    .matches(
      /^(0414|0424|0416|0426|0412|0422)\d{7}$/,
      "El teléfono debe comenzar con 0414, 0424, 0416, 0426, 0412 o 0422 y tener 11 dígitos numéricos"
    )
    .required("El teléfono es obligatorio"),
  reference: yup
    .string()
    .matches(/^\d{4}$/, "La referencia debe tener 4 dígitos")
    .required("La referencia es obligatoria"),
  date: yup
    .date()
    .default(() => new Date())
    .required("La fecha es obligatoria"),
  dni: yup
    .string()
    .matches(/^\d{8}$/, "El DNI debe tener 8 dígitos")
    .required("El DNI es obligatorio"),
  dniType: yup.string().required("El tipo de DNI es obligatorio"),
  orderId: yup.number().required("El ID de la orden es obligatorio"),
  orderName: yup.string().required("El nombre de la orden es obligatorio"),
});

export const mobilePaymentReturnSchema = yup.object().shape({
  bank: yup.string().required("El banco es obligatorio"),
  phone: yup
    .string()
    .matches(
      /^(0414|0424|0416|0426|0412|0422)\d{7}$/,
      "El teléfono debe comenzar con 0414, 0424, 0416, 0426, 0412 o 0422 y tener 11 dígitos numéricos"
    )
    .required("El teléfono es obligatorio"),
  dni: yup
    .string()
    .matches(/^\d{8}$/, "El DNI debe tener 8 dígitos")
    .required("El DNI es obligatorio"),
  dniType: yup
    .string()
    .oneOf(["V", "E", "P", "J", "G"], "El tipo de DNI es inválido")
    .required("El tipo de DNI es obligatorio"),
});

export const domiciliacionSchema = yup.object().shape({
  bank: yup.string().required("El banco es obligatorio"),
  phonePrefix: yup
    .string()
    .oneOf(
      ["0412", "0414", "0424", "0416", "0426"],
      "Selecciona un prefijo válido"
    )
    .required("El prefijo es obligatorio"),
  phone: yup
    .string()
    .matches(/^\d{7}$/, "El teléfono debe tener 7 dígitos")
    .required("El teléfono es obligatorio"),
  phoneConfirm: yup
    .string()
    .oneOf([yup.ref("phone")], "Los teléfonos no coinciden")
    .required("Confirma tu teléfono"),
  dni: yup
    .string()
    .matches(/^\d{6,8}$/, "La cédula debe tener entre 6 y 8 dígitos")
    .required("La cédula es obligatoria"),
  dniType: yup
    .string()
    .oneOf(["V", "E", "P", "J", "G"], "El tipo de documento es inválido")
    .required("El tipo de documento es obligatorio"),
  orderId: yup.string().required("El ID de la orden es obligatorio"),
});

export const updateCustomerParentIDSchema = yup.object().shape({
  dni: yup
    .string()
    .matches(/^\d{8}$/, "El DNI debe tener 8 dígitos")
    .required("El DNI es obligatorio"),
  dniType: yup
    .string()
    .oneOf(["V", "E", "P", "J", "G"], "El tipo de DNI es inválido")
    .required("El tipo de DNI es obligatorio"),
  customerId: yup.string().required("El ID del cliente es obligatorio"),
});
