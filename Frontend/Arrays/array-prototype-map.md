#### Question 

`Array.prototype.map()` is a method that creates a new array with the results of calling a provided function on every element in the calling array.

Implement a new `Array.prototype.myMap` to avoid overwriting the original array.

- The question is pretty straightforward and just tests that we know how to access the array values within `Array.prototype` methods(using `this`).

```js
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
```

#### Example

```js
const arr = [1, 2, 3];
const result = arr.myMap((item) => item * 2);
console.log(result); // [2, 4, 6]
```

#### Edge cases

- sparse arrays (e.g [1, 2, , 4]). The empty values should be skipped.
  
```js
  const arr = [1, 2, , 4];
  const result = arr.myMap((item) => item * 2);
  console.log(result); // [2, 4, undefined, 8]
```
