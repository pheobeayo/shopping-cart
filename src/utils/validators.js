export const validateCoupon = (code) => /^WEB3BRIDGECOHORTx$/.test(code);
export const isValidQuantity = (qty) => Number.isInteger(qty) && qty > 0;
