/** 
 * Write a function to find all prime numbers from 1 to 1000. 
 * If the sum of the digits in the number is less than 10 print the prime number. 
 * If greater than or equal to 10 ignore the number.
 */

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

for (let i = 1; i <= 1000; i++) {
  if (isPrime(i)) {
    let sum = i.toString().split("").reduce((a, b) => +a + +b);
    if (sum < 10) console.log(i);
  }
}

/**
 * Given an array of words, write a function that returns an array whose elements are the length of each word in the argument array.
 */

function wordLengths(arr) {
  return arr.map((word) => word.length);
}

// another way to do it
function wordLengths(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
  }
  return newArr;
}

/**
 * Given an array of integers, find all pairs having the smallest distance between them, and print them in lexical order of pairs.
 */

function smallestDistancePair(arr) {
  // sort the array in ascending order
  arr.sort((a, b) => a - b);
  let smallestDistance = Infinity; // initialize smallestDistance to Infinity
  let pairs = [];
  for (let i = 1; i < arr.length; i++) {
    // find the smallest distance between two elements in the array
    let distance = arr[i] - arr[i - 1];
    if (distance < smallestDistance) {
      smallestDistance = distance;
    }
  }
  for (let i = 1; i < arr.length; i++) {
    // find all pairs having the smallest distance between them
    let distance = arr[i] - arr[i - 1];
    if (distance === smallestDistance) {
      pairs.push([arr[i - 1], arr[i]]);
    }
  }
  return pairs;
}

/**
 * Given two points `p` and `q` and 3 points that form a triangle, determine if the points form a valid triangle. 
 * If `p` and `q` are on the same side of the triangle, return `true`. 
 * Otherwise, return `false`.
 */

function validTriangle(p, q, a, b, c) {
  let p1 = [p, q];
  let p2 = [a, b];
  let p3 = [a, c];
  let p4 = [b, c];

  let s1 = getSide(p1, p2);
  let s2 = getSide(p1, p3);
  let s3 = getSide(p1, p4);

  if (s1 === s2 && s2 === s3) return true;
  return false;
}

function getSide(p1, p2) {
  let x1 = p1[0];
  let y1 = p1[1];
  let x2 = p2[0];
  let y2 = p2[1];

  return (y2 - y1) / (x2 - x1);
}
