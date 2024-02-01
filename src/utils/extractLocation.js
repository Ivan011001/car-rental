export function extractLocation(address) {
  const addressComponents = address.split(",").map((component) => component.trim());

  const country = addressComponents.pop();
  const city = addressComponents.pop();

  return { country, city };
}
