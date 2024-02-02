export function formatMileage(mileage) {
  const result = mileage.toLocaleString("en");

  return result;
}

formatMileage(40000);
