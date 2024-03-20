'use strict';

/**
 * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {Date}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */
function secondsToDate(seconds) {
    const baseDate = new Date('2020-06-02T00:00:00Z');
    const milliseconds = seconds * 1000;
    const resultDate = new Date(baseDate.getTime() + milliseconds);
    const formattedDate = resultDate.toLocaleDateString('en-GB');

    return formattedDate;
}

/**
 * You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {string}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */
function toBase2Converter(decimal) {
    return decimal.toString(2);
}

/**
 * You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 2
 *      'T', 'test it' -> 2
 */
function substringOccurrencesCounter(substring, text) {
    let count = 0;
    const substringLowercase = substring.toLowerCase();
    let index = text.indexOf(substringLowercase);

    while(index !== -1){
        count++;
        index = text.indexOf(substringLowercase, index + 1);
    }

    return count;
}

/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
function repeatingLitters(string) {
    return string.split('').map((char, index) => {
        if (char === string[index + 1] || char === string[index - 1]) {
            return char;
        } else {
            return char.repeat(2);
        }
    }).join('');
}

/**
 * You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
function redundant(str) {

    return () => {
        return str;
    }
}

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
function towerHanoi(disks) {
    return Math.pow(2, disks) - 1;
}

/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {
    const rows1 = matrix1.length;
    const cols1 = matrix1[0].length;
    const rows2 = matrix2.length;
    const cols2 = matrix2[0].length;

    if(cols1 !== rows2) throw new Error("Dimensions don't match");

    const result = [];

    for(let i = 0; i < rows1; ++i){
        result[i] = [];
        for(let j = 0; j < cols2; ++j){
            result[i][j] = 0;
            for(let k = 0; k < cols1; k++){
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */
function gather(str) {
    let args = [str];
    let orderIndices = [];
  
    function chain(val) {
        args.push(val);
        return chain;
    }

    chain.order = function(index) {
        args.push(index);
        return chain;
    };
    
    chain.get = function() {
        const filteredIndices = args.filter(arg => typeof arg === "number");
        const sortedArgs = filteredIndices.map(index => args[index]);
        return sortedArgs.join('');
    };
      
    return chain;
}
  
  // Example usage:
  const result = gather('a')('b')('c')
    .order(2)(1)(0)
    .get();
  
  console.log(result); // Output: "cba"
  

export {
    secondsToDate,
    toBase2Converter,
    substringOccurrencesCounter,
    repeatingLitters,
    redundant,
    towerHanoi,
    matrixMultiplication,
    gather
}