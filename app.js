console.log('worked');
const purchaseAmount = 1000;
const availableBonuses = 1000;

const maxBonuses = purchaseAmount * 0.5;
let appliedBonuses
if (maxBonuses <= availableBonuses) {
    appliedBonuses = maxBonuses;
} else {
    appliedBonuses = availableBonuses;
}
console.log(appliedBonuses);

const total = purchaseAmount - appliedBonuses;

console.log(total);

