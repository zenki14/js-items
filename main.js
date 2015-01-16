// Find and display average price of all items
// 1. Find price.
// 2. Display price in array.
// 3. Take prices and add them.
// 4. Take the sum of prices and divide by number of items.
// 5. Display Average in console.log.

// A1: Find Price and Display an Array of the Price of items
var itemPrices = items.map ( function (currentItem, index) {
  return currentItem.price;
}) 
	
// A: Add Prices	
var sumOfPrices =	itemPrices.reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});

// A: Average found and then displayed via console.log
var avgPrice = sumOfPrices / items.length;
console.log ('The average price is ' + avgPrice)

// Display an array of items between $14.00 and $18.00 USD
// 1. Find prices. refer to A1
// 2. Display prices in array. refer to A1
// 3. Exclude <14 and >18.
// 4. Display items that remain in console.log.



// var chosenPrices = itemPrices.forEach (function(blah) {
//   if (blah < 18 && blah > 14) {
//   	console.log (blah)
//   	}	
//   });

var betweenCost = items.filter (function(a) {
  if(a.price <= 18 && a.price >= 14 ) {
   return a.title; }
   // console.log(betweenCost.title)
});
console.log ('The Items that cost between $14 and $18 are: ' + betweenCost[0].title + ', '
 + betweenCost[1].title + ', '
 + betweenCost[2].title + ', ' 
 + betweenCost[3].title + ', ' 
 + betweenCost[4].title);

// var betweenCostConsole = 
// var betweenCostTrue = betweenCost.map (function(a) {
// 	if (a.title === true) {
// 		return a.title; }
// 	});
// console.log(betweenCost.title);
// console.log (betweenCost.map)
