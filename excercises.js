/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------
// var numOne = Math.floor((Math.random() * 100) + 1);
// var numTwo = Math.floor((Math.random() * 100) + 1);

function max(a, b){
    if(a > b) {
        return a;
    }
    return b;
    };
console.log(max (3, 7));
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
  function maxOfThree(a, b, c) {
   return max(max(a, b), c);
}


  // function maxOfThree(a, b ,c) {
  //   var firstMax = max(a,b);
  //   return max(firstMax, c);
  // };
  // console.log(maxOfThree(1, 2, 3));





// function maxOfThree(a, b, c){
//  var myMax = function(x, y) {
//     if(x > y) {
//         return x;
//     }
//     return y;
//  };
//     var firstMax = myMax(a, b);
//     return myMax(firstMax, c);
// };
// console.log(maxOfThree (11,33,12));

//     if(a > b && a > c) {
//         return a;
//     }
//         else if(a < b && b > c) {
//             return b;
//         }
//             else if(c > a && c > b) {
//                 return c;
//             }
//                 else {
//                     return a;
//                 }
// };
// console.log(maxOfThree (33, 22, 42));



// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------


//     if(x.length === ["a" || "e" || "i" || "o" || "u"]) {
//         console.log(x + " is a vowel")
//     }
//      else if (x.length !== ["a" || "e" || "i" || "o" || "u"]) {
//         console.log(x = " is not a vowel")
//      }
    
// };

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
//  for loop
// for (var i = 0; 1 < a.length; i++) 

function consonatntCheck(blahBlah){
    var consonants = ['B', 'b', 'C', 'c', 'D', 'd', 'F', 'f', 'G', 'g', 'H', 'h', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];
    var isConsonant = false;
    for (i = 0; i < consonants.length; i++) {
        if (blahBlah == consonants[i]) {
            isConsonant = true;
        }
    }
    return isConsonant;
}
function translate(phrase) {

    var newString = '';

    for (var i = 0; i < phrase.length; i++) {
        if (consonatntCheck(phrase[i])) {
            newString += phrase[i] + "o" + phrase[i];
        } else {
            newString += phrase[i];
        }
    }
    console.log('The translation is: ' + '"' + newString + '"');
}


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
var totalSum = 0;
var totalMult = 1;
// var numbers = [1, 2, 3];
function sum(numbers) {
    var addSum = numbers.reduce(function(x, y) { return x + y } );
    return addSum;
};

function multiply(numbers) {
    var addMultiply = numbers.reduce(function(x, y) { return x * y } );
    return addMultiply;

};

// var sum (numbers) {
//     var addition = reduce(function (x,y) {
//         return x + y;
//     });
//     addition.apply(this, numbers);
// };



// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    var split = phrase.split("");
    split.reverse();
    console.log(split.join(''));
    
};

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
// var wrds = ["cat", "bird", "pidgeon", "antelope"];
var letterCount = [];


function findLongestWord(words){
        
    words.forEach(function(x) {
        
        letterCount.push(x.length);
        
    });
 return Math.max.apply(Math, letterCount);

};  




// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
// var compCount = [];
// function filterLongWords(words, i){
//     if(words > i) {
//         compCount.push(words) {
//             else null;
//         }
//     }
// };
// var words = ["hello", "yoyohomie", "killa", "yo"];
// var i = [3];

var filterLongWords = function (words, i) {
    var newArray = [];
    words.forEach(function (element) {
        if( element.length > i ) { newArray.push(element)};
    });
    return newArray;
};
// console.log(filterLongWords(["paul", "dane", "cigarette", "beer"], 5));

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}