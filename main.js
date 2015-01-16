// Find and display average price of all items
// 1. Find price.
// 2. Display price in array.
// 3. Take prices and add them.
// 4. Take the sum of prices and divide by number of items.
// 5. Display Average in console.log.

// A1 A2: Find Price and Display an Array of the Price of items
var itemPrices = items.map ( function (currentItem, index) {
  return currentItem.price;
}) 
	
// A: Add Prices	
var sumOfPrices =	itemPrices.reduce(function(previousValue, currentValue) {
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

//Empty Array
var arrCost = [];
//Variable that figures out which prices fit into the range required
var betweenCost = items.forEach (function(a) {
  if(a.price <= 18 && a.price >= 14 ) {
//Populates Empty Array with information  	
		arrCost.push('Item : ' + a.title)  }
   // console.log(betweenCost.title)
});
console.log('The items that meet the requirements are: ' + arrCost)

// Find the items listed with GBP and show the title and price
// 1. find prices.
// 2. sort the prices listed in GBP.
// 3. list items with GBP

//Empty Array
var gbpItems = [];
//Function that looks at the currency code and pulls GBP
var sortCurreny = items.forEach (function(a) {
	if(a.currency_code === 'GBP') {
//Populates empty array with information
		gbpItems.push(a.title + 'costs ' + a.price)
	}
})
console.log('The items listed in GBP are: ' + gbpItems)

// Show items made of wood
// 1. list items
// 2. sort by material = wood
// 3. list items that match = wood

//Empty Array
var woodItem = [];
//Function that finds what materials are used
var materialWood = items.forEach (function(a) {
	a.materials.forEach (function(b) {
//Pulls out materials that equal wood		
		if(b === 'wood') {
//Populates empty Array with information			
			woodItem.push(a.title + ' has wood as a material')
			// console.log(woodItem);	
		};
	});
});
console.log(woodItem);
// console.log(a.title);

// Show items that have 8 or more materials
// 1. list items
// 2. sort by material number
// 3. list items that have 8 or more

//Function that lists materials
var eightOrMore = items.forEach(function(a) {
	var materials = a.materials;
//If the amount of materials is >= 8	
	if(materials.length >= 8) {
		console.log(a.title, a.materials);
	}
});

//Show items that are being sold by their creators.
// 1. find items
// 2. sort through and find items sold by their makers
// 3. list items that match


//Empty Array
var selfMade = [];
//Filters list asking who made items
items.filter(function(a) {
		var self = a.who_made;
//If maker = self
		if(self === 'i_did') {
//Populate empty array with information			
			selfMade.push(self);
		}
	});
console.log(selfMade.length + ' items were sold by their makers')




