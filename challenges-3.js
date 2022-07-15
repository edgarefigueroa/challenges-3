console.log("Has More Vowels")
// Has More Vowels
// Difficulty
// Easy
// Concepts
// Loops, Conditionals

// Instructions
// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise,
// return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.
// If the phrase is over half vowels, it should return true:

// hasMoreVowels('moose')
// // true
// If it’s half vowels (or less), it’s false:

// hasMoreVowels('mice')
// // false

// hasMoreVowels('graph')
// // false
// Don’t consider “y” as a vowel:

// hasMoreVowels('yay')
// // false

// Uppercase vowels are still vowels:
// hasMoreVowels('Aal')
// // true

const hasMoreVowels = word => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0
    let vowelsNeeded = word.length / 2
    let wordSplit = word.toLowerCase().split('')
  
    for (let i = 0; i < wordSplit.length; i++) {
      let letter = wordSplit[i]
  
      if (vowels.includes(letter)) {
        vowelCount++
      }
  
      if (vowelCount > vowelsNeeded) {
        return true
      }
    }
  
    return false
  }
  
   console.log(hasMoreVowels('moose'))
   console.log(hasMoreVowels('yay'))







console.log("\nStock Prices")
// Stock Prices
// Difficulty
// Medium

// Concepts
// Logic


// Instructions
// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.
// The best function will be given an array of stock prices in the order they happened throughout the day.
// It should return the maximum possible profit on the stock for that day.
// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

// best([15, 10, 20, 22, 1, 9])
// 12
// Here are some more examples with positive profit:
// best([1, 2, 3, 4, 5])
// // 4 - buy at $1, sell at $5
// best([2, 3, 10, 6, 4, 8, 1])
// // 8 - buy at $2, sell at $10
// best([7, 9, 5, 6, 3, 2])
// // 2 - buy at $7, sell at $9

// let best=[7, 9, 5, 6, 3, 2]

// const best = (arr) => {
//     let maxProfit = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             const profit = arr[j] - arr[i];
//             if (profit > maxProfit)
//                 maxProfit = profit
//         }
//     }
//     return maxProfit;
// }

// const getMaxProfit = (prices) => {
//     let minPrice = prices[0];
//     let maxProft = 0;
  
//     for (const price of prices) {
//       const currentProfit = price - minPrice;
//       minPrice = Math.min(minPrice, price);
//       maxProft = Math.max(maxProft, price - minPrice);
//     }
  
//     return maxProft;
//   };

const best = (stockPrices) => {
  let minPrice =stockPrices[0];
  let maxProfit = 0;
  for (let i = 0; i < stockPrices.length; i++) {
    if (stockPrices[i] < minPrice) {
      minPrice = stockPrices[i];
    }
    if (maxProfit < stockPrices[i] - minPrice) {
      maxProfit = stockPrices[i] - minPrice;
    }
  }
  return console.log(`Maximum Profiit for Today is ${maxProfit}`);
};
best([15, 10, 20, 22, 1, 9]);


/////////
// const best = prices => {
//     let maxDiff = 0
//     let lowSoFar
  
//     for (let i = 0; i < prices.length; i++) {
//       if (lowSoFar === undefined || prices[i] < lowSoFar) {
//         lowSoFar = prices[i]
//       }
  
//       let diff = prices[i] - lowSoFar
  
//       if (diff > maxDiff) {
//         maxDiff = diff
//       }
//     }
  
//     return maxDiff
//   }
  
//    best([1, 2, 3, 4, 5])




console.log("\nString Decoder")
// String Decoder
// Difficulty
// Medium
// Concepts
// Loops

// Instructions
// In this challenge, you’ll write a decoder function. The function should take in a string and return a string.
// Start by creating a function called decoder that has a single parameter called code.
// Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).
// Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.
// For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.
// So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.

// Here are a few more examples:
// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
// '0y4akjfe0s' => 'yes'

//check number and delete charecters
// let diff;
// let first;
// let last;
// const best = (numarr) => {
//   diff = 0;
//   for (i = 0; i < numarr.length; i++) {
//     for (j = i; j < numarr.length; j++) {
//       if (numarr[j] - numarr[i] > diff) {
//         diff = numarr[j] - numarr[i];
//         first = numarr[i];
//         last = numarr[j];
//       }
//     }
//   }
//   return buy at ${first}, sell at ${last};
// };

function decode(code) {
  var filtered = [],
      skip = 0;
  for(var i = 0; i < code.length; i++) {
      var character = code[i];
      if(character >= '0' && character <= '9')
          skip = skip * 10 + (+character);
      else if (skip) i += skip-1, skip = 0;
      else filtered.push(character);
  }
  return filtered.join("");
}
console.log(decode('0h2abe1zy'))


console.log("\nPrint Digits Backwards")
// Print Digits Backwards
// Difficulty
// Medium
// Concepts
// Logic, Math

// Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, 
// starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. 
// (Hint: look up while loops, and don’t forget about the % operator.)

// For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:

// printDigits(1)
// // 1

// printDigits(314)
// // 4
// // 1
// // 3

// printDigits(12)
// // 2
// 1


const printDigits = num => {
    while (num) {
      let digitToPrint = num % 10
      console.log(digitToPrint)
      num = (num - digitToPrint) / 10
    }
  }

  printDigits(25)