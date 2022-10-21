## Flattening an Array in Javascript

This is the process of taking nested array elements and basically putting them all in one array. This is a common task when working with data from a database or API. Basically you want to take an array of arrays and turn it into a single array.

### Examples

#### Using a `while` loop with a recursive helper function

Run a while loop that pushes each element into a new array. If the element is an array, call the helper function again.
When the next element of an array is a nested array, the function recursively calls itself and does the same for its contents, until all nested arrays have been flattened(pushed into the new array).

```js
function flatten(arr) {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
    i++;
  }
  return result;
}
```
```js
// using a helper function
function flatten(arr) {
  let result = [];
  function helper(input) {
    for (let i = 0; i < input.length; i++) {
      if (Array.isArray(input[i])) {
        helper(input[i]);
      } else {
        result.push(input[i]);
      }
    }
  }
  helper(arr);
  return result;
}
```

#### Using the `reduce` and `concat` methods

This solution only flattens one level deep. You can use `concat` to add both single elements of a nested array into the accumulator array.
The same can be achived with just `concat` using the spread syntax, passing each decompossed element into a new array while being passed as concat arguments.
If you want to flatten all levels, you can use a recursive function.

```js
// const arr = [1, 2, [3, 4], 5, [6]];
// To flat single level array
arr.flat();

// also
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4, 5, 6]

// or with decomposition syntax
const flattened = arr => [].concat(...arr);
```

