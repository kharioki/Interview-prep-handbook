## Data Structures Questions

Here are some questions and answers you may encounter in your interview process. I have tried as much as possible to curate the answers from every source I could come across.

- [Data Structures Questions](#data-structures-questions)
  - [What is a data structure?](#what-is-a-data-structure)
  - [What are the different types of data structures?](#what-are-the-different-types-of-data-structures)
  - [What are some applications of data structures?](#what-are-some-applications-of-data-structures)
  - [What are the benefits of learning data structures?](#what-are-the-benefits-of-learning-data-structures)
  - [What is the difference between file structure and storage structure?](#what-is-the-difference-between-file-structure-and-storage-structure)
  - [What is an array?](#what-is-an-array)
  - [What is a multi-dimensional array?](#what-is-a-multi-dimensional-array)
  - [How are elements in a 2D array stored?](#how-are-elements-in-a-2d-array-stored)
  - [How do you reference elements in a one-dimensional array?](#how-do-you-reference-elements-in-a-one-dimensional-array)
  - [What is a linked list?](#what-is-a-linked-list)
  - [When do we use a linked list?](#when-do-we-use-a-linked-list)
  - [So is a linked list linear or not?](#so-is-a-linked-list-linear-or-not)
  - [How is a linked list more efficient than an array?](#how-is-a-linked-list-more-efficient-than-an-array)
  - [When do we use linked lists and arrays?](#when-do-we-use-linked-lists-and-arrays)
  - [What is a doubly linked list?](#what-is-a-doubly-linked-list)
  - [What is a stack?](#what-is-a-stack)
  - [Where are stacks used?](#where-are-stacks-used)
  - [What is a queue?](#what-is-a-queue)
  - [What are the applications of queues?](#what-are-the-applications-of-queues)
  - [How is a queue different from a stack?](#how-is-a-queue-different-from-a-stack)
  - [How to implement a queue using stacks?](#how-to-implement-a-queue-using-stacks)
  - [How to implement a stack using queues?](#how-to-implement-a-stack-using-queues)
  - [What is a hashmap?](#what-is-a-hashmap)
  - [Which data structures are used for implementing LRU cache?](#which-data-structures-are-used-for-implementing-lru-cache)
  - [Can we store duplicate keys in a hashmap?](#can-we-store-duplicate-keys-in-a-hashmap)
  - [What is a priority queue?](#what-is-a-priority-queue)
  - [What is a tree?](#what-is-a-tree)
  - [What is a binary tree?](#what-is-a-binary-tree)
  - [How do you calculate the maximum number of nodes in a binary tree of height h?](#how-do-you-calculate-the-maximum-number-of-nodes-in-a-binary-tree-of-height-h)
  - [Write a recursive function to calculate the height of a binary tree?](#write-a-recursive-function-to-calculate-the-height-of-a-binary-tree)
  - [Write a recursive function to calculate the sum of all nodes in a binary tree?](#write-a-recursive-function-to-calculate-the-sum-of-all-nodes-in-a-binary-tree)
  - [What are tree traversals?](#what-are-tree-traversals)
  - [What is a binary search tree?](#what-is-a-binary-search-tree)
  - [What is an AVL tree?](#what-is-an-avl-tree)
  - [What is a graph?](#what-is-a-graph)
  - [What are some applications of graphs?](#what-are-some-applications-of-graphs)
  - [How do you represent a graph?](#how-do-you-represent-a-graph)
  - [What is the difference between a tree and a graph?](#what-is-the-difference-between-a-tree-and-a-graph)
  - [What is a graph traversal?](#what-is-a-graph-traversal)
  - [When do we use DFS and BFS?](#when-do-we-use-dfs-and-bfs)

### What is a data structure?

_Data Structure_ is a way of organizing data in a way that makes it easy to perform operations on the data. It also defines the way different sets of data relate to one another, establishing relationships and forming algorithms.

### What are the different types of data structures?

There are two types of data structures:

_Linear data structure_: A data structure that is composed of a sequence of elements or a linear list e.g. Arrays, Linked list, stacks, queues. The elements are stored in a non-hierarchical way so that each item has successors and predecessors except the first and last element in the list.

_Non-linear data structure_: If the elements of a data structure results in a way that traversal of nodes is not done in a sequential manner, then it is a non-linear data structure e.g. Trees, Graphs, Tables, Sets.

[[↑] Back to top](#data-structures-questions)

### What are some applications of data structures?

Data structures form the core of software programming as any efficient algorithm is dependent on how data is structured. The following are some of the areas where data structures are used:

- Artificial Intelligence
- Compiler design
- Machine learning
- Database design and management
- Blockchain
- Numerical and statistical analysis
- Operating systems development
- Image and speech processing
- Cryptography

### What are the benefits of learning data structures?

Software programming problems have time constraints(how fast can you solve the problem) and space constraints(how much space you need to solve the problem). In order to solve the problem, it is essential for a problem to be represented in a proper structured format upon which efficient algorithms can be applied.

> Understanding the different kinds of data structures available helps a programmer to understand the problem and to solve it efficiently.

While the core concepts of data structures remains the same across languages, the implementation differs based on syntax and semantics.

In _procedural languages_ like C, implementation is done with the help of structures, pointers.

In _object oriented languages_ like Java, implementation is done with the help of classes, objects, inheritance, polymorphism.

[[↑] Back to top](#data-structures-questions)

### What is the difference between file structure and storage structure?

The difference lies in the way in which data is stored in a file.

_Storage structure_ is the data structure in the memory of the computer. The data is stored in main memory i.e RAM and is deleted once the function that uses it is completed.

_File structure_ represents the data in auxiliary memory i.e. disk, pen drives, etc. The data is stored in secondary memory and is not deleted once the function that uses it is completed.

[[↑] Back to top](#data-structures-questions)
### What is an array?

Arrays are a special type of linear data structure. They are a collection of elements of the same type. The elements are stored in contiguous memory locations.

An array is the simplest data structure where an element can be accessed randomly just by using its index number.

### What is a multi-dimensional array?

A multi-dimensional arrays are those data structures that span across multiple dimensions. This means there is more than one index variable for every point of storage. It is used in cases where data cannot be represented in a single dimension. For example, a 2D array can be represented as a 1D array of 1D arrays.

### How are elements in a 2D array stored?

Elements in a 2D array are stored in either row-major or column-major order.

_Row-major order_ means that the elements are stored in the order of their row number.

_Column-major order_ means that the elements are stored in the order of their column number.

[[↑] Back to top](#data-structures-questions)

### How do you reference elements in a one-dimensional array?

You can access all the elements in a one-dimensional array using an indexed loop. The counter counts down from 0 to the maximum array size, n - 1.

### What is a linked list?

A linked list is a data structure that consists of a group of nodes, each node containing a piece of data and a reference to the next node in the list.

The elements are linked using pointers to form a chain. Each element is a separate object, called a node. Each node has two items: a piece of data and a reference to the next node in the list. The entry point to the list is called the head node. The last node in the list is called the tail node. Where the list is empty, the head node is null reference and the tail node is null reference.

[[↑] Back to top](#data-structures-questions)

### When do we use a linked list?

A linked list is a dynamic data structure, where the number of nodes is not fixed, and the list has the ability to grow and shrink as needed.

It is used in cases where:

- the number of objects is not known in advance
- we need constant time access to any object in the list e.g. as in real-time computing
- random access is not needed
- the algorithm requires data structure where objects need to be stored irrespective of their physical address in memory
- when we need to insert items in the middle of the list as in a queue

### So is a linked list linear or not?

Linked lists are considered both linear and non-linear data structures depending on the way in which they are used. When used for access strategies, it is considered as a linear data structure. When used for storage strategies, it is considered as a non-linear data structure.

[[↑] Back to top](#data-structures-questions)

### How is a linked list more efficient than an array?

Here are some of the advantages of using a linked list:

_Insertion and deletion_

  - Insertion and deletion of nodes is faster than that of an array. We only update the pointers of the nodes that are affected by the insertion or deletion.
  - It is expensive to do the same on array as the room has to be created for the new elements and existing elements must be shifted.

_Dynamic data structure_
  
  - A linked list is a dynamic data structure that can grow and shrink at runtime by allocating and deallocating memory. There's no need to give an initial size at the time of creation.
  - Whereas the size of an array is limited as the number of items is statically stored in the main memory.

_No wastage of memory_

  - as the size of a linked list can grow or shrink based on the needs of the program, there's no memory wasted because it is allocated at runtime.
  - in arrays, if we declare the array size to be 10, and store 3 elements, then the array will occupy 10*sizeof(int) bytes of memory. Hence the memory wastage.

[[↑] Back to top](#data-structures-questions)

### When do we use linked lists and arrays?

Some scenarios where linked lists are preferred over arrays are:

  - when the number of items is not known in advance
  - when we know that there would be large number of add and delete operations
  - when we need less number of random access operations
  - when we need to insert items anywhere in the middle of the list as in a queue

Some scenarios where arrays are preferred over linked lists are:

  - when we need to index or randomly access the elements more frequently
  - when the number of items is known in advance in order to allocate the right amount of memory
  - when we need speed while iterating over the elements more frequently
  - When memory is a concern:
    - Due to the nature of arrays and linked lists, it is safe to say that filled arrays use less memory than linked lists.
    - Each element in the array indicates just the data whereas each linked list node represents the data as well as one or more pointers.

[[↑] Back to top](#data-structures-questions)

### What is a doubly linked list?

It is a complex type of a linked list in which a node has two links, one that connects to the previous node and one that connects to the next node. This allows traversal across the list in both directions.

Examples of doubly linked lists are:

  - A music playlist with next and previous navigation buttons
  - A browser cache with BACK-FORWARD visited pages
  - The undo and redo functionality on a browser, where you can reverse the node to get to the previous page.

[[↑] Back to top](#data-structures-questions)

### What is a stack?

A stack is an abstract data type that specifies a linear collection of data elements, with two principal operations: push, which adds an element to the top of the stack, and pop, which removes an element from the top of the stack.
Insertion and deletion of items take place at one end called top of the stack, with a particular order: LIFO (Last In First Out) or FILO( First In Last Out).

A stack may perform 3 operations:

  - push: add an element to the top of the stack
  - pop: remove an element from the top of the stack
  - peek: return the top element of the stack without removing it

### Where are stacks used?

  - Expression, evaluation, or conversion of evaluating prefix, postfix, and infix expressions
  - Syntax parsing
  - String reversal
  - parenthesis checking
  - backtracking

[[↑] Back to top](#data-structures-questions)

### What is a queue?

A queue is a linear data structure in which the operations are performed at both ends. The first element added is the first element to be removed. A queue is a FIFO data structure.

Basic operations on a queue are:

  - enqueue: add an element to the end of the queue
  - dequeue: remove an element from the front of the queue
  - init: initialize the queue
  - isEmpty: check if the queue is empty

### What are the applications of queues?

Some applications of queues are to prioritize jobs such as in the following scenarios:

  - As waiting lists for a single shared resource in a printer, CPU, call center systems, image uploads, etc where the first one entered is the first to be processed.
  - In the asynchronous transfer of data; or in pipes, sockets, etc.
  - as buffers in applications like mp3 media players and cd players.
  - To maintain playlist as in media players to add or remove songs.

[[↑] Back to top](#data-structures-questions)

### How is a queue different from a stack?

In a stack the element that is most recently added is removed first. In a queue the element that is most recently added is removed last.

[[↑] Back to top](#data-structures-questions)

### How to implement a queue using stacks?

Lets implement a queue using two stacks. let `q` be the queue and `s1` and `s2` be the two stacks. Stacks support push, pop, and peek operations and we need to use these to implement enqueue and dequeue operations.
Queue `q` can be implemented in two methods:

1. By making enqueue operation costly.
     
  The oldest element is always at the top of `s1` which ensures dequeue operation to occur in O(1) time.

  when we enqueue an element, while `s1` is not empty, we push everything from `s1` to `s2`.
  Then we push the new element to `s1`.
  Then we push everything back to `s1`.
  This is O(n) operation.

  ```
    enqueue(q, x):
      while not s1.isEmpty():
        s2.push(s1.pop())
      s1.push(x)
      while not s2.isEmpty():
        s1.push(s2.pop())
  ```
    
  when we dequeue an element, we just pop the top element from `s1`. If `s1` is empty we throw error.
  This is O(1) operation.

  ```
    dequeue(q):
      return s1.pop()
  ```

2. By making dequeue operation costly.
     
  Here for the enqueue operation the new element is pushed at the top of `s1`. The enqueue operation is O(1) and the dequeue operation is O(n).

  ```
    enqueue(q, x):
      s1.push(x)
  ```

  when we dequeue an element, if `s2` is empty, we push everything from `s1` to `s2`.
  Then we pop the top element from `s2`. This is O(n) operation.

  ```
    dequeue(q):
      if s2.isEmpty():
        while not s1.isEmpty():
          s2.push(s1.pop())
      return s2.pop()
  ```

[[↑] Back to top](#data-structures-questions)

### How to implement a stack using queues?

We can implement a stack using queues. Let `s` be the stack and `q1` and `q2` be the queues. Queue supports enqueue, dequeue, init, and isEmpty operations and we need to use these to implement push, pop, and peek operations.

We can implement stack in two ways:

1. By making push operation costly:
    
  This method ensures that newly entered element is always at the front of `q1`, so that pop operation just dequeues the element from `q1`. This is O(n) operation.

  ```
    push(s, x):
      while not q1.isEmpty():
        q2.enqueue(q1.dequeue())
      q1.enqueue(x)
      while not q2.isEmpty():
        q1.enqueue(q2.dequeue())
  ```

  when we pop an element, we just dequeue the top element from `q1`. If `q1` is empty we throw error. This is O(1) operation.

  ```
    pop(s):
      return q1.dequeue()
  ```

2. By making pop operation costly:
    
  This method ensures that the element that is popped is always at the front of `q1`, so that push operation just enqueues the element at the front of `q1`. This is O(n) operation.

  ```
    push(s, x):
      q1.enqueue(x)
  ```

  when we pop an element, if `q2` is empty, we enqueue everything from `q1` to `q2`.
  Then we dequeue the top element from `q2`. This is O(n) operation.

  ```
    pop(s):
      if q2.isEmpty():
        while not q1.isEmpty():
          q2.enqueue(q1.dequeue())
      return q2.dequeue()
  ```
[[↑] Back to top](#data-structures-questions)

### What is a hashmap?

A hashmap is a data structure that stores key-value pairs. The keys are unique and the values are not. It is a data structure that is used to implement a dictionary. It allows a constant time lookup of a value based on the key.

For an object to be used as a key or value in a hashmap, it must have a `hashcode()` method and a `equals()` method. The hashcode method is used to compute the hashcode of the object. The hashcode is used to determine the index of the object in the hashmap. The equals method is used to determine if two objects are equal.

The time complexity of the hashmap operations are:

  - put: O(1)
  - get: O(1)
  - remove: O(1)

### Which data structures are used for implementing LRU cache?

A LRU(Least Recently Used) cache allows quick identification of an element that hasn't been put to use for the longest time by organizing items in order of use. To achieve this two data structures are used:

  - A _Queue_ implemented using a doubly linked list. The maximum size of queue is limited by the size of the cache. The least recently used element is at the front of the queue.
  - A _hashmap_ that stores the page number as the key along with address of corresponding queue node as value.

[[↑] Back to top](#data-structures-questions)

### Can we store duplicate keys in a hashmap?

No, duplicate keys cannot be inserted into a hashmap. If you try to insert an entry with an existing key, then the old value is overwritten. This though will not change the size of the hashmap.

### What is a priority queue?

A priority is an abstract data type that can be used to represent a collection of elements that can be accessed according to the priority of the element. Elements in the priority queue are ordered according to their priority. Elements with higher priority are processed before elements with lower priority. In order to implement a priority queue, a minimum of two queues are required - one for data and the other for priority.

[[↑] Back to top](#data-structures-questions)

### What is a tree?

A Tree is a recursive, non-linear data structure. It is a data structure that can be used to store data in a hierarchical manner.
It consists of a set of one or more nodes where one node is the root and the other nodes are the children. The root node is the topmost node in the tree. The children of the root node are the left and right child of the root node.

The most commonly used tree data structure is a binary tree. A binary tree is a tree in which each node has at most two children. The left child is always less than the parent and the right child is always greater than the parent.

Some applications of trees include:

  - **File Systems**: files inside folders that are inturn inside other folders.
  - **Comments on social media**: comments, replies to comments, replies to replies, etc.
  - **Family trees**: parents, grandparents, great-grandparents, etc.

[[↑] Back to top](#data-structures-questions)

### What is a binary tree?

It is a special type of tree where each node can have at most two children. Binary tree is generally partitioned into three disjoint subsets:

  - **Left Subtree**: all nodes in this subset are less than the parent node.
  - **Right Subtree**: all nodes in this subset are greater than the parent node.
  - **Root**: the root node is the only node in the tree that has no parent.

### How do you calculate the maximum number of nodes in a binary tree of height h?

  - The maximum number of node are 2^h+1 - 1 where h >= 1.

  - For example, for height h = 3, the maximum number of nodes are 2^3 + 1 - 1 = 15.

[[↑] Back to top](#data-structures-questions)

### Write a recursive function to calculate the height of a binary tree?

A javascript implementation of the above function is given below.

```
  function height(node) {
    if (node === null) {
      return 0;
    }
    return 1 + Math.max(height(node.left), height(node.right));
  }
```

### Write a recursive function to calculate the sum of all nodes in a binary tree?

A javascript implementation of the above function is given below.

```
  function sum(node) {
    if (node === null) {
      return 0;
    }
    return node.data + sum(node.left) + sum(node.right);
  }
```

[[↑] Back to top](#data-structures-questions)

### What are tree traversals?

**Tree traversal** is a process of visiting each node of a tree in a particular order.

There are three ways to traverse a tree:

  - **Preorder traversal**: visit the root node first, then traverse the left subtree, then the right subtree.
    
    ```
      preorder(node) {
        if (node === null) {
          return;
        }
        console.log(node.data);
        preorder(node.left);
        preorder(node.right);
      }
    ```

  - **Inorder traversal**: traverse the left subtree, then the root node, then the right subtree.

    ```
      inorder(node) {
        if (node === null) {
          return;
        }
        inorder(node.left);
        console.log(node.data);
        inorder(node.right);
      }
    ```

  - **Postorder traversal**: traverse the left subtree, then the right subtree, then the root node.

    ```
      postorder(node) {
        if (node === null) {
          return;
        }
        postorder(node.left);
        postorder(node.right);
        console.log(node.data);
      }
    ```

[[↑] Back to top](#data-structures-questions)

### What is a binary search tree?

A binary search tree is a variant of a binary tree in which each node has at most two children. The left child is always less than the parent and the right child is always greater than the parent.
Also individually the left and right subtrees are also binary search trees.

Some methods of binary search tree:

  - **Insertion**: insert a node into a binary search tree.

    ```
      insert(node, data) {
        if (node === null) {
          return new Node(data);
        }
        if (data < node.data) {
          node.left = insert(node.left, data);
        } else {
          node.right = insert(node.right, data);
        }
        return node;
      }
    ```

  - **Search**: search for a node in a binary search tree.

    ```
      search(node, data) {
        if (node === null) {
          return null;
        }
        if (data === node.data) {
          return node;
        }
        if (data < node.data) {
          return search(node.left, data);
        }
        return search(node.right, data);
      }
    ```

  - **Minimum**: find the minimum value in a binary search tree.

    ```
      min(node) {
        if (node.left === null) {
          return node;
        }
        return min(node.left);
      }
    ```

  - **Maximum**: find the maximum value in a binary search tree.

    ```
      max(node) {
        if (node.right === null) {
          return node;
        }
        return max(node.right);
      }
    ```

  - **Successor**: find the successor of a node in a binary search tree.

    ```
      successor(node) {
        if (node.right !== null) {
          return min(node.right);
        }
        let successor = null;
        let current = node.parent;
        while (current !== null && node === current.right) {
          successor = current;
          current = current.parent;
        }
        return current;
      }
    ```

  - **Predecessor**: find the predecessor of a node in a binary search tree.

    ```
      predecessor(node) {
        if (node.left !== null) {
          return max(node.left);
        }
        let predecessor = null;
        let current = node.parent;
        while (current !== null && node === current.left) {
          predecessor = current;
          current = current.parent;
        }
        return current;
      }
    ```

  - **Delete**: delete a node from a binary search tree.
    
    ```
      delete(node, data) {
        if (node === null) {
          return null;
        }
        if (data < node.data) {
          node.left = delete(node.left, data);
        } else if (data > node.data) {
          node.right = delete(node.right, data);
        } else {
          if (node.left === null && node.right === null) {
            node = null;
          } else if (node.left === null) {
            node = node.right;
          } else if (node.right === null) {
            node = node.left;
          } else {
            let temp = min(node.right);
            node.data = temp.data;
            node.right = delete(node.right, temp.data);
          }
        }
        return node;
      }
    ```

[[↑] Back to top](#data-structures-questions)

### What is an AVL tree?

An AVL tree is a self-balancing binary search tree. AVL trees check the height of left and right subtrees and rebalance the tree if the difference between the left and right subtrees is greater than 1.

```
  BalanceFactor = height(left) - height(right)
```

[[↑] Back to top](#data-structures-questions)

### What is a graph?

A **graph** is a type of non-linear data structure that consists of vertices or nodes connected by edges or lines for sorting data. Edges connecting the nodes may be directed or undirected.

### What are some applications of graphs?

Graphs are used in wide varieties of applications including:

  - **Network routing**: routing algorithms are used to find the shortest path between two nodes in a network.

  - **Geographical data**: geographic data is stored in a graph.

  - **Social networks**: to determine flow of information in social networking websites like Facebook, Twitter, etc.

  - **Web search**: web search is stored in a graph.

  - **Transport grids**: where stations are the nodes and routes are the edges of the graph.

  - **Power and Water grids**: utility graphs where vertices are connection points and edges are the wires/pipes connecting them.

[[↑] Back to top](#data-structures-questions)

### How do you represent a graph?

You can represent a graph as an adjacency list or adjacency matrix.

  - **Adjacency list**: a list of lists.

    ```
      graph = {
        'A': ['B', 'C'],
        'B': ['A', 'D', 'E'],
        'C': ['A', 'F'],
        'D': ['B'],
        'E': ['B', 'F'],
        'F': ['C', 'E']
      }
    ```

  - **Adjacency matrix**: a list of lists.

    ```
      graph = [
        ['A', 'B', 'C', 'D', 'E', 'F'],
        ['B', 'A', 'D', 'E', 'F', 'C'],
        ['C', 'A', 'F', 'B', 'E', 'D'],
        ['D', 'B', 'A', 'E', 'F', 'C'],
        ['E', 'B', 'D', 'A', 'F', 'C'],
        ['F', 'C', 'E', 'D', 'A', 'B']
      ]
    ```

[[↑] Back to top](#data-structures-questions)

### What is the difference between a tree and a graph?

The main differences between a graph and a tree are:

  - A tree structure must be connected and can never have loops whereas a graph can have loops.
  - A tree provides insights on relationships between nodes in a hierarchical manner and graph follows a network model.

### What is a graph traversal?

Graph traversal is the process of traversing a graph in a particular order.

There are two types of graph traversal:

  - **Depth-first search**: depth-first search is a graph traversal algorithm that starts at the root node and explores as far as possible along each branch before backtracking. Depth-first search is used to find the shortest path between two nodes in a graph. DFS uses the stack data structure. It yields deeper solutions that are not optimal, but works well when the solution is dense.

  - **Breadth-first search**: breadth-first search is a graph traversal algorithm that starts at the root node and explores as far as possible along each level before moving on to the next level. BFS uses the queue data structure for storing nodes. It yields more optimal solutions.

### When do we use DFS and BFS?

The usage of either DFS or BFS depends on the structure of the search tree/graph and the number and location of solutions needed.

Consider these instances:

  - If it is known that the solution is not far from the root of the tree, then BFS is the best choice.
  - If the tree is very deep and the solutions are rare, DFS might take a long time to find the solution, but BFS could be faster.
  - If a tree is wide, BFS might need too much memory to store the nodes, but DFS might be faster.
  - If solutions are frequent but located far from the root of the tree(deep), we opt for DFS.

[[↑] Back to top](#data-structures-questions)