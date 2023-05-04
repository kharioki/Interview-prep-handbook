# Questions

1. Find all prime numbers from 1 to 1000. If the sum of the digits in the number is less than 10 print the prime number. If greater than or equal to 10 ignore the number.

2. Given an array of words, write a function that returns an array whose elements are the length of each word in the argument array. For example:

   ```js
   wordLengths(["hello", "what", "is", "up", "dude"])
   // => [5, 4, 2, 2, 4]
   ```

3. Given an array of integers, find all pairs having the smallest distance between them, and print them in lexical order. For example:

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

1. Given two points `p` and `q` and 3 points that form a triangle, determine if the points form a valid triangle. If `p` and `q` are on the same side of the triangle, return `true`. Otherwise, return `false`. For example:

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