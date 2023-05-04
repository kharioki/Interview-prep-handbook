# What's a palindrome?

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case and spacing.

> We'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

```js
function palindrome(str) {
  return true;
}
palindrome("eye");
```

## Which Regular expression will we need?

```js
/[^A-Za-z0-9]/g 

/[\W_]/g
```

- `\W` matches any non-word character (equal to [^a-zA-Z0-9_])
- `\W` matches anything that is not enclosed in the brackets
- the `g` flag means global search, i.e. find all matches rather than stopping after the first match

In our test case, we need palindrome ("0_0(:/-\:)0-0") to return true. We need to remove the symbols and spaces, and turn everything lower case in order to check for palindromes.

## There aree two ways to solve this problem:

1. **With built-in functions** - We can use several methods:

- `toLowerCase()` to turn the string to lower case
- `replace()` to remove unwanted characters. we'll use the regular expression `/[\W_]/g` to select all non-alphanumeric characters
- `split()` to turn the string into an array of characters
- `reverse()` to reverse the array
- `join()` to turn the array back into a string

  ```js
  function palindrome(str) {
    const re = /[\W_]/g;
    let lowerCaseStr = str.toLowerCase();
    let noSymbolsStr = lowerCaseStr.replace(re, "");
    let reversedStr = noSymbolsStr.split("").reverse().join("");
    return noSymbolsStr === reversedStr;
  }

  palindrome("eye");
  palindrome("0_0(:/-\:)0-0");
  palindrome("A man, a plan, a canal. Panama");
  palindrome("My age is 0, 0 si ega ym.");
  ```

> The time complexity for this solution is `O(n)` because we split the string in half and iterate over each character in the string once.

2. Using FOR loop:

Half-indexing (len/2) has benefits when processing large strings. We check the end from each part and divide the number of iterations inside the FOR loop by two.

```js
function palindrome(str) {
  const re = /[\W_]/g;
  let lowerCaseStr = str.toLowerCase();
  let noSymbolsStr = lowerCaseStr.replace(re, "");
  let len = noSymbolsStr.length;
  for (let i = 0; i < len / 2; i++) {
    if (noSymbolsStr[i] !== noSymbolsStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");
palindrome("0_0(:/-\:)0-0");
```

> The time complexity for this solution is `O(n/2)` because we split the string in half and iterate over each character in the string once.

