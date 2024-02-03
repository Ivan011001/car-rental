export function createPrices() {
  const prices = [];

  for (let price = 10; price <= 100; price += 10) {
    prices.push(price.toString());
  }

  return prices;
}

createPrices();
