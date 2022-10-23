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

#### Using  the iterative `Array.prototype.some` method

The `some` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

```js
function flatten(arr) {
  let result = [];
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr);
  }
  return arr;
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

#### Using `reduce` and `concat` and `isArray` recursively

This solution checks each value in our reduce function to see if its value is an array. If the value is an array then we recursively call our helper method as many levels deep as we define in our depth `d` parameter.
  
```js
  // const arr = [1, 2, [[3, 4], 5, [6]]];
  function flatten(arr, d = 1) {
    return arr.reduce((a, v) => a.concat(d > 1 && Array.isArray(v) ? flatten(v, d - 1) : v), []);
  }
  flatten(arr, Infinity);
  // [1, 2, 3, 4, 5, 6]
```

#### Using a stack and a while loop

With this solution, we loop through our array in a last-in-first-out order, taking from the back of the array. We make a copy of our array, and start popping elements off the back and pushing them into a new array. Before we push each element into our result array, we check if that element is an array. If it is, then we take the contents of that array and push them to the end of our array. Those elements will be added in the same order as before, just no longer in a nested array. If we find an array, the process will repeat itself. 

Before we `push` and `pop` to add elements in our result array, the array will be backwards, so we `reverse` to flip our array back in the correct order. This is more efficient than using `shift` and `unshift` as those methods are O(n) and `push` and `pop` are O(1).

```js
  // non recursive flatten deep using a stack. note that depth control is hard/inefficient as we will need to tag EACH element with its depth
  function flattenDeep(arr) {
    const result = [];
    const stack = [...arr];
    while (stack.length) {
      // use stack methods to be faster
      const next = stack.pop();
      if (Array.isArray(next)) {
        // push back array items, won't modify the original input
        stack.push(...next);
      } else {
        result.push(next);
      }
    }
    // we reverse to restore input order
    return result.reverse();
  }

  const arr = [1, 2, [[3, 4], 5, [6]]];
  flattenDeep(arr);
  // [1, 2, 3, 4, 5, 6]
```

#### Using a generator function

A generator is a function that acts as an iterable until a condition is met. Generators can be exited and re-entered, and they can be paused and resumed. This is useful for flattening an array because we can pause the generator function when we find a nested array, and resume it when we find a single element.

```js
  function* flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        yield* flatten(arr[i]);
      } else {
        yield arr[i];
      }
    }
  }
  const arr = [1, 2, [[3, 4], 5, [6]]];
  [...flatten(arr)];
  // [1, 2, 3, 4, 5, 6]
```

```js
  // using a generator function with defined depth
  function* flatten(arr, depth) {
    if(depth === undefined) depth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        yield* flatten(arr[i], depth - 1);
      } else {
        yield arr[i];
      }
    }
  }

  const arr = [1, 2, [[3, 4], 5, [6]]];
  const flattened = [...flatten(arr, Infinity)];
```

#### Using Array.flat()

This function flattens an array one level deep, but you can pass in a number to define as many levels deep as you want to go. If you don't care how deep you drill, just pass in the `infinity` keyword

```js
  const arr = [1, 2, [[3, 4], 5, [6]]];
  arr.flat(Infinity);
  // [1, 2, 3, 4, 5, 6]

  // 1 level deep
  arr.flat();
  // [1, 2, [3, 4], 5, [6]]

  // 2 levels deep
  arr.flat(2);
  // [1, 2, 3, 4, 5, 6]

  // 3 levels deep
  arr.flat(3);
  // [1, 2, 3, 4, 5, 6]
```

#### Flattening the array in-place

So far we have been creating a new array to store our flattened array. We can also flatten the array in-place, which means we will modify the original array. This is a destructive operation, so we should be careful when using it.

Sometimes the interviewer might ask you to implement an in-place solution that doesn't allocate extra memory. That is, a solution with a constant O(1) space complexity. 
In this case, you will need to leverage array methods that mutate. There are 9 methods in total that mutate arrays: `copyWithin`, `fill`, `pop`, `push`, `reverse`, `shift`, `sort`, `splice`, and `unshift`.

```js
  function flatten(array) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        array.splice(i, 1, ...array[i]);
        i--;
      }
    }
    return array;
  }
```

```js
  // const arr = [1, 2, [[3, 4], 5, [6]]];
  function flattenInPlace(arr) {
    let i = 0;
    while (i < arr.length) {
      if (Array.isArray(arr[i])) {
        arr.splice(i, 1, ...arr[i]);
      } else {
        i++;
      }
    }
    return arr;
  }
  flattenInPlace(arr);
  // [1, 2, 3, 4, 5, 6]
```

#### Using `flatMap` recursive approach

The `flatMap` function method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. By calling it recursively, we can flatten the entire array until it is only one level deep.

```js
  const arr = [1, 2, [[3, 4], 5, [6]]];

  function flatten(value) {
    return Array.isArray(value) ? value.flatMap((item) => flatten(item)) : value;
  }
  // [1, 2, 3, 4, 5, 6]
```
