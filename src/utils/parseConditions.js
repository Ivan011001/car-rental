export function parseConditions(value) {
  const array = value.split("\n");

  let minimumAge = null;
  const conditions = [];

  for (const el of array) {
    if (el.includes("Minimum age:")) {
      const ageMatch = el.match(/\d+/);
      minimumAge = ageMatch ? parseInt(ageMatch[0]) : null;
    } else {
      conditions.push(el.trim());
    }
  }

  return {
    minimumAge,
    conditions,
  };
}
