# Mensajes funcionales de resultados de pago

## Cash

### Success
- **Title:** ¡Todo listo! Gracias por confiar nuestro equipo 💛
- **Texto:** Verificaremos su pago y prepararemos su pedido con cariño para entregarte a tiempo 🧡

### Error
- **Title:** Error en el pago 😔
- **Texto:** Hubo un problema procesando tu pago. Intenta nuevamente.

---

## DirectDebit

### Success
- **Title:** ¡Todo listo! Gracias por confiar nuestro equipo 💛
- **Texto:** Prepararemos su pedido con cariño para entregarte a tiempo 🧡

### Error
- **Title:** Error en el pago 😔
- **Texto:** {result.message} _(dinámico, depende de la respuesta)_

---

## MobilePayment

### Success
- **Title:** ¡Todo listo! Gracias por confiar nuestro equipo 💛
- **Texto:** Prepararemos su pedido con cariño para entregarte a tiempo 🧡 _(o el mensaje dinámico de la respuesta)_
- El monto del pago fue mayor al total del pedido, se ha realizado la devolución del excedente (Bs.S %.2f), a los datos utilizados en su pago

### Error
- **Title:** Error en el pago 😔
- **Texto:** _(dinámico, depende de la respuesta)_
- Error interno al validar el pago, contacte soporte
- No se encontro ningun pago movil que coincida con los datos proporcionados
- Pago registrado correctamente
- Debe realizar el pago por el monto exacto de la orden, se ha realizado la devolución del mismo, a los datos utilizados en su pago
---

## Zelle

### Success
- **Title:** ¡Todo listo! Gracias por confiar nuestro equipo 💛
- **Texto:** Verificaremos su pago y prepararemos su pedido con cariño para entregarte a tiempo 🧡

### Error
- **Title:** Error en el pago 😔
- **Texto:** Hubo un problema procesando tu pago. Intenta nuevamente.
