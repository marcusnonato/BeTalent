export function formatCellphoneNumber(phoneNumber: string | undefined): string {
  if (!phoneNumber) {
    return '';
  }

  const cleaned = phoneNumber.replace(/\D/g, '');

  if (cleaned.length !== 13) {
    return phoneNumber;
  }

  const countryCode = cleaned.slice(0, 2);
  const areaCode = cleaned.slice(2, 4);
  const firstPart = cleaned.slice(4, 9);
  const secondPart = cleaned.slice(9, 13);

  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
}
