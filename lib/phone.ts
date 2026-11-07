/**
 * Reduces a typed, pasted or autofilled Indian mobile number to its 10 digits,
 * so "+91 98765 43210" and "098765-43210" both pass validation.
 */
export function normalizeMobile(value: unknown): string {
  if (typeof value !== 'string') return '';

  const digits = value.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) return digits.slice(1);
  return digits;
}
