console.log('worked');
const purchaseAmount = 1000;
const availableBonuses = 1000;

const maxBonuses = purchaseAmount * 0.5;
// тернарный оператор
const appliedBonuses = maxBonuses <= availableBonuses ? maxBonuses : appliedBonuses = availableBonuses;

console.log(appliedBonuses);
const total = purchaseAmount - appliedBonuses;
console.log(total);

