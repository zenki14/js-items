// Find and display average price of all items
// 1. Find price.
// 2. Display price in array.
// 3. Take prices and add them.
// 4. Take the sum of prices and divide by number of items.
// 5. Display Average in console.log.

var itemPrices = items.map ( function (currentItem, index) {
  return currentItem.price;
}) 
	
var sumOfPrices =	itemPrices.reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});

var avgPrice = sumOfPrices / items.length;