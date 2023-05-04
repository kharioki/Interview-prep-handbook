# Questions

1. Find all prime numbers from 1 to 1000. If the sum of the digits in the number is less than 10 print the prime number. If greater than or equal to 10 ignore the number.

2. Given an array of words, write a function that returns an array whose elements are the length of each word in the argument array. For example:

   ```js
   wordLengths(["hello", "what", "is", "up", "dude"])
   // => [5, 4, 2, 2, 4]
   ```

____

Given an array of integers, find all pairs having the smallest distance between them, and print them in lexical order. For example:

  ```js
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

  smallestDistancePair([4, 2, 1, 3])
  // => [[1, 2], [2, 3], [3, 4]]
  ```

  > The time complexity of this solution is O(n log n) because of the sorting algorithm used.
    - The function `sort` uses the merge sort algorithm which has a time complexity of O(n log n).
    - The `for` loop has a time complexity of O(n).
    - The second `for` loop has a time complexity of O(n).
  > The space complexity is O(n) because of the array used to store the pairs.

____

Given two points `p` and `q` and 3 points that form a triangle, determine if the points form a valid triangle. If `p` and `q` are on the same side of the triangle, return `true`. Otherwise, return `false`. For example:

  ```js
     function validTriangle(p, q, a, b, c) {
       // find the slope of the line segment pq
       let slopePQ = (q[1] - p[1]) / (q[0] - p[0]);
       // find the slope of the line segment ab
       let slopeAB = (b[1] - a[1]) / (b[0] - a[0]);
       // find the slope of the line segment bc
       let slopeBC = (c[1] - b[1]) / (c[0] - b[0]);
       // find the slope of the line segment ca
       let slopeCA = (a[1] - c[1]) / (a[0] - c[0]);
       // if the slope of pq is equal to the slope of ab or bc or ca, return true
       if (slopePQ === slopeAB || slopePQ === slopeBC || slopePQ === slopeCA) {
         return true;
       }
       // otherwise, return false
       return false;
     }

     validTriangle([1, 1], [2, 2], [1, 2], [2, 1], [3, 1])
     // => true
  ```

____

Given a string `s`, a series of queries each composed of a pair of indices `(i,j)` and a number of edits `k`, determine for each query if the substring  delimited by its pair of indices indices `(i, j)` can be edited at most `k` times to form a string that can be arranged to a palindrome. For example:

```js
function palindromeQueries(s, queries) {
  let results = [];
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let start = query[0];
    let end = query[1];
    let edits = query[2];
    let substring = s.slice(start, end + 1);
    let count = 0;
    for (let j = 0; j < substring.length / 2; j++) {
      if (substring[j] !== substring[substring.length - 1 - j]) {
        count++;
      }
    }
    if (count <= edits) {
      results.push("YES");
    } else {
      results.push("NO");
    }
  }
  return results;
}

palindromeQueries("abcda", [[0, 4, 1], [1, 2, 0], [0, 3, 2], [0, 4, 1]])
// => ["YES", "YES", "NO", "YES"]
```

____

Given an array of integers, return the repeated numbers and count of the repeated numbers. For example:

```js
function repeatedNumbers(arr) {
  let counts = {};
  let repeatedNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }
  for (let key in counts) {
    if (counts[key] > 1) {
      repeatedNumbers.push([key, counts[key]]);
    }
  }
  return repeatedNumbers;
}

repeatedNumbers([1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2, 1])
// => [[1, 4], [2, 3], [3, 2], [4, 2]]
```

____

Write a function that transforms a string into camel case. For example:

```js
function camelCase(str) {
  let words = str.split(" ");
  let camelCase = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    let firstLetter = word[0].toUpperCase();
    let restOfWord = word.slice(1).toLowerCase();
    camelCase += firstLetter + restOfWord;
  }
  return camelCase;
}

camelCase("hello world")
// => "helloWorld"
```

____

Write a function to transform camel case strings to snake case strings. For example:

```js
function snakeCase(str) {
  let snakeCase = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      snakeCase += "_" + char.toLowerCase();
    } else {
      snakeCase += char;
    }
  }
  return snakeCase;
}

snakeCase("helloWorld")
// => "hello_world"
```

____

write a function that transforms camel case string to normal case string. For example:

```js
function normalCase(str) {
  let normalCase = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      normalCase += " " + char.toLowerCase();
    } else {
      normalCase += char;
    }
  }
  return normalCase;
}

normalCase("helloWorld")
// => "hello world"
```

____

Write a function that returns the number of vowels in a string. For example:

```js
function vowelCount(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

vowelCount("hello world")
// => 3
```

____
