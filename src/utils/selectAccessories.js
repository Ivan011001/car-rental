export function selectAccessories(accessories) {
  const randomItem = Math.floor(Math.random() * accessories.length);
  return accessories[randomItem];
}
