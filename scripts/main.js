// console.log(items);

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// The forEach() method executes a provided function once for each array element.

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// # 1
const pricesArray = items.map(function(item){
  return item.price;
});

const totalPriceOfAllItems = pricesArray.reduce(function(acc, i) {
  return acc + i;
});

const averagePrice = totalPriceOfAllItems / items.length;
console.log(`The average price is $${averagePrice.toFixed(2)}`);
console.log(`\n`);




// # 2

const itemsWithinRange = items.filter(function(item) {
  return item.price >= 14 && item.price <= 18 && item.currency_code === "USD";
});

console.log(`Items that cost between $14.00 USD and $18.00 USD:`);
itemsWithinRange.forEach(item => console.log(item.title));
console.log(`\n`);

// # 3

const gbpItems = items.filter(function(item) {
  return item.currency_code === "GBP";
});

gbpItems.forEach(item => console.log(`${item.title} costs £${item.price}`))
console.log('\n');
// # 4

const woodItems = items.filter(function(item) {
  return item.materials.includes('wood')
});

woodItems.forEach(function(item) {
  console.log(item.title);
});

const eightOrMoreMaterals = items.filter(function(item) {
   return item.materials.length >= 8;
});
console.log(eightOrMoreMaterals)


const itemsMadeBySeller = items.filter(function(item) {
  return item.who_made === 'i_did';
});
console.log(itemsMadeBySeller)
