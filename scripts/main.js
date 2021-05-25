// console.log(items);

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// The forEach() method executes a provided function once for each array element.

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const pricesArray = items.map(function(item){
  return item.price;
});

const totalPriceOfAllItems = pricesArray.reduce(function(acc, i) {
  return acc + i;
});

const averagePrice = totalPriceOfAllItems / items.length;
console.log((averagePrice.toFixed(2)));




const itemsWithinRange = items.filter(function(item) {
  return item.price >= 14 && item.price <= 18 && item.currency_code === "USD";
});

console.log(itemsWithinRange);
