## Mock Interview questions

Here are some interview questions I came across and their solutions.

  - [Array questions](#array-questions)
    - [Find the missing number in a given integer array of 1 to n](#find-the-missing-number-in-a-given-integer-array-of-1-to-n)
    - [Find duplicate numbers in an array](#find-duplicate-numbers-in-an-array)
    - [Find largest and smallest number in an array](#find-largest-and-smallest-number-in-an-array)
    - [Find all pairs in an array whose sum is equal to a given number](#find-all-pairs-in-an-array-whose-sum-is-equal-to-a-given-number)
    - [Sort an array in place](#sort-an-array-in-place)
    - [Remove duplicates from an array](#remove-duplicates-from-an-array)
    - [Revise an array](#revise-an-array)
  - [Linked list questions](#linked-list-questions)
    - [How do you find the middle element of a singly linked list in one pass?](#How-do-you-find-the-middle-element-of-a-singly-linked-list-in-one-pass)
    - [How do you reverse a linked list?](#How-do-you-reverse-a-linked-list)
    - [How do you find the length of a linked list?](#How-do-you-find-the-length-of-a-linked-list)
    - [How do you find the sum of two linked lists?](#How-do-you-find-the-sum-of-two-linked-lists)
  - [String questions](#string-questions)
    - [Print duplicate characters in a string](#Print-duplicate-characters-in-a-string)
    - [Check if two strings are anagrams](#check-if-two-strings-are-anagrams)
    - [Print the first non-repeating character in a string](#Print-the-first-non-repeating-character-in-a-string)
    - [Reverse a string in place](#Reverse-a-string-in-place)
    - [Reverse a string using recursion](#Reverse-a-string-using-recursion)
    - [Check if a string contains only digits](#Check-if-a-string-contains-only-digits)
    - [Count number of vowels and consonants in a string](#Count-number-of-vowels-and-consonants-in-a-string)
    - [Check if a string is a palindrome](#Check-if-a-string-is-a-palindrome)
    - [Find all permutations of a string](#Find-all-permutations-of-a-string)
  - [Binary tree questions](#binary-tree-questions)
    - [Perform preorder traversal of a binary tree](#Perform-preorder-traversal-of-a-binary-tree)
    - [Traverse a binary tree in preorder without recursion](#Traverse-a-binary-tree-in-preorder-without-recursion)
    - [Perform inorder traversal of a binary tree](#Perform-inorder-traversal-of-a-binary-tree)
    - [Print all nodes of a binary tree using inorder traversal without recursion](#Print-all-nodes-of-a-binary-tree-using-inorder-traversal-without-recursion)
    - [Perform postorder traversal of a binary tree](#Perform-postorder-traversal-of-a-binary-tree)
    - [Print all leaves of a binary search tree](#Print-all-leaves-of-a-binary-search-tree) ]
    - [Perform binary search in a given array](#Perform-binary-search-in-a-given-array)

### Array questions

An array is the most fundamental data structure in the computer science. It is a collection of elements. You'll likely come across manyquestions about arrays in interviews like reversing an array, sorting or searching.

The key benefit of array data structure is it offers a fast 0(1) search if you know the index, but adding or removing an element is slow because you cannot change the size of the array once its created.
Knowledge of basic programming constructors such as loop, recursion, operators and functions will help you solve these questions.

### Find the missing number in a given integer array of 1 to n

```javascript
//Input: [1, 2, 3, 5, 6, 7, 8, 9, 10]
// expected Output: 4

function findMissingNumber(arr) {
  let n = arr.length;
  let sum = (n + 1) * (n + 2) / 2;
  let actualSum = 0;
  for (let i = 0; i < n; i++) {
    actualSum += arr[i];
  }
  return sum - actualSum;
}
```
[[↑] Back to top](#array-questions)

### Find duplicate numbers in an array

```javascript
//Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
// expected Output: [1]
function findDuplicate(arr) {
  let n = arr.length;
  let set = new Set();
  for (let i = 0; i < n; i++) {
    if (set.has(arr[i])) {
      return arr[i];
    } else {
      set.add(arr[i]);
    }
  }
}
```

### Find largest and smallest number in an array

```javascript
//Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// expected Output: [10, 1]
function findLargestAndSmallest(arr) {
  let n = arr.length;
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [max, min];
}
```
[[↑] Back to top](#array-questions)

### Find all pairs in an array whose sum is equal to a given number

```javascript
//Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], sum = 11
// expected Output: [[1, 10], [2, 9], [3, 8], [4, 7], [5, 6]]
function findPairs(arr, sum) {
  let n = arr.length;
  let set = new Set();
  let result = [];
  for (let i = 0; i < n; i++) {
    if (set.has(arr[i])) {
      result.push([arr[i], sum - arr[i]]);
    } else {
      set.add(sum - arr[i]);
    }
  }
  return result;
}
```

### Sort an array in place

```javascript
//Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function sort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
```
[[↑] Back to top](#array-questions)

### Remove duplicates from an array

```javascript
//Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
// expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function removeDuplicates(arr) {
  let n = arr.length;
  let set = new Set();
  let result = [];
  for (let i = 0; i < n; i++) {
    if (!set.has(arr[i])) {
      result.push(arr[i]);
      set.add(arr[i]);
    }
  }
  return result;
}
```

### Reverse an array in place

```javascript
//Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// expected Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
function reverse(arr) {
  let n = arr.length;
  let result = [];
  for (let i = n - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
```

### Linked list questions

A linked list is a linear data structure that consists of a sequence of nodes. Each node contains a piece of data and a reference to the next node in the sequence. Unlike arrays, linked list nodes are not stored in contiguous memory locations.

It is simply a list of nodes where each node contains the value stored and the address of the next node. Because of this structure, it is easy to insert or delete nodes from the list, as you need to change the link instead of creating an array, but search is difficult and often requires 0(n) time complexity.

A singly linked list allows you to traverse in one direction(forward to reverse) while a doubly linked list allows you to traverse in both directions. To solve linked list questions, a good knowledge of recursion is important.

If you take one node from a linked list, the remaining data structure is still a linked list, and because of this, many linked lists have simple recursive solutions.

[[↑] Back to top](#linked-list-questions)

### How do you find the middle element of a singly linked list in one pass?

// Write a function that takes in the head of a singly linked list and returns the middle element of the linked list.

```javascript
function middleOfLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
```

### How do you reverse a linked list?

```javascript
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
```

[[↑] Back to top](#linked-list-questions)

### How do you find the length of a linked list?

```javascript
function lengthOfLinkedList(head) {
  let current = head;
  let length = 0;

  while (current) {
    length++;
    current = current.next;
  }

  return length;
}
```

### How do you find the sum of two linked lists?

```javascript
function sumOfLinkedLists(head1, head2) {
  let current1 = head1;
  let current2 = head2;
  let sum = 0;
  let carry = 0;

  while (current1 || current2) {
    let val1 = current1 ? current1.val : 0;
    let val2 = current2 ? current2.val : 0;
    let sum = val1 + val2 + carry;
    let carry = Math.floor(sum / 10);
    sum = sum % 10;

    if (current1) {
      current1.val = sum;
      current1 = current1.next;
    }

    if (current2) {
      current2.val = sum;
      current2 = current2.next;
    }
  }

  if (carry > 0) {
    let node = new Node(carry);
    node.next = head1;
    head1 = node;
  }

  return head1;
}
```

[[↑] Back to top](#linked-list-questions)

### String questions

Strings are sequences of characters. They are immutable, meaning that they cannot be changed. They are represented in JavaScript by using the `String` data type.

The great thing about the string is if you know arrays, you can easily solve string questions. Strings are arrays of characters.

### Print duplicate characters in a string

```javascript
function printDuplicateCharacters(str) {
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > 1) {
      console.log(char);
    }
  }
}
```

[[↑] Back to top](#string-questions)

### Check if two strings are anagrams

An Anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

```javascript
function checkIfAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let charMap = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];

    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (!charMap[char]) {
      return false;
    } else {
      charMap[char]--;
    }
  }

  return true;
}
```

### Print the first non-repeating character in a string

```javascript
function printFirstNonRepeatingCharacter(str) {
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (charMap[char] === 1) {
      console.log(char);
      break;
    }
  }
}
```

[[↑] Back to top](#string-questions)

### Reverse a string in place

```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

### Reverse a string using recursion

```javascript
function reverseString(str) {
  if (str === '') {
    return '';
  }

  return reverseString(str.substr(1)) + str[0];
}
```

### Check if a string contains only digits

```javascript
function checkIfStringContainsOnlyDigits(str) {
  return /^\d+$/.test(str);
}
```

### Count number of vowels and consonants in a string

```javascript
function countVowelsAndConsonants(str) {
  let vowels = 0;
  let consonants = 0;

  const isVowel = (char) => {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
  };

  const isConsonant = (char) => {
    return !isVowel(char);
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (isVowel(char)) {
      vowels++;
    } else if (isConsonant(char)) {
      consonants++;
    }
  }

  console.log(`Number of vowels: ${vowels}`);
  console.log(`Number of consonants: ${consonants}`);
}
```

### Check if a string is a palindrome

```javascript
function checkIfStringIsPalindrome(str) {
  return str === str.split('').reverse().join('');
}
```

### Find all permutations of a string

```javascript
function findAllPermutations(str) {
  let results = [];

  const permute = (str, permutation) => {
    if (str.length === 0) {
      results.push(permutation);
    } else {
      for (let i = 0; i < str.length; i++) {
        permute(str.substr(0, i) + str.substr(i + 1), permutation + str[i]);
      }
    }
  };

  permute(str, '');

  return results;
}
```

[[↑] Back to top](#string-questions)

### Binary tree questions

**Binary trees** are a data structure that are used to represent a tree where each node has at most two children.

You will come across a lot of questions based on binary trees such as how to traverse them, count nodes, find depth, and check if a tree is balanced.

To better solve these questions; a strong knowledge of the theory of binary trees is required e.g. size or depth of tree, what is a leaf, what is a node, as well as understanding popular algorithms such as inorder, preorder, postorder, level order traversal.

Here are some of the questions you can solve using binary trees:

### Perform preorder traversal of a binary tree

```javascript
function preorderTraversal(root) {
  let result = [];

  const traverse = (node) => {
    result.push(node.val);

    if (node.left) {
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }
  };

  traverse(root);

  return result;
}
```

[[↑] Back to top](#binary-tree-questions)

### Traverse a binary tree in preorder without recursion

```javascript
function preorderTraversal(root) {
  let result = [];

  let stack = [root];

  while (stack.length) {
    let node = stack.pop();

    result.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return result;
}
```

### Perform inorder traversal of a binary tree

```javascript
function inorderTraversal(root) {
  let result = [];

  const traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }

    result.push(node.val);

    if (node.right) {
      traverse(node.right);
    }
  };

  traverse(root);

  return result;
}
```

### Print all nodes of a binary tree using inorder traversal without recursion

```javascript
function inorderTraversal(root) {
  let result = [];

  let stack = [];

  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();

    result.push(current.val);

    current = current.right;
  }

  return result;
}
```

### Perform postorder traversal of a binary tree

```javascript
function postorderTraversal(root) {
  let result = [];

  const traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }

    result.push(node.val);
  };

  traverse(root);

  return result;
}
```

### Print all leaves of a binary search tree

```javascript
function printAllLeaves(root) {
  let result = [];

  const traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }

    if (!node.left && !node.right) {
      result.push(node.val);
    }

    if (node.right) {
      traverse(node.right);
    }
  };

  traverse(root);

  return result;
}
```

### Perform binary search in a given array

```javascript
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
```
