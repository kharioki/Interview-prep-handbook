## Algorithm Questions

Here are some algorithms questions and answers you may encounter in your interview process.

- [Algorithm Questions](#algorithm-questions)
  - [Algorithms](#algorithms)
  - [Why do we need to do algorithm analysis?](#why-do-we-need-to-do-algorithm-analysis)
  - [How can we compare between two algorithms written for the same problem?](#how-can-we-compare-between-two-algorithms-written-for-the-same-problem)
  - [What do you understand by best, worst, and average case?](#what-do-you-understand-by-best-worst-and-average-case)
  - [What are the different approaches to developing an algorithm?](#what-are-the-different-approaches-to-developing-an-algorithm)
  - [What are some examples of greedy algorithms?](#what-are-some-examples-of-greedy-algorithms)
  - [What are some examples of dynamic programming algorithms?](#what-are-some-examples-of-dynamic-programming-algorithms)
  - [What are some examples of divide and conquer algorithms?](#what-are-some-examples-of-divide-and-conquer-algorithms)
  - [Sorting algorithms](#sorting-algorithms)
  - [What are some examples of sorting algorithms?](#what-are-some-examples-of-sorting-algorithms)

### Algorithms

An **algorithm** is a sequence of steps that solves a problem. It is a set of rules to obtain the expected output from the given input.

### Why do we need to do algorithm analysis?

A problem can be solved in more than one way. We analyze available algorithms and choose the best one for our problem.

Some benefits of using algorithms:

  - boost efficiency of a method
  - provide designers with a detailed description of the criteria and goals of the problems
  - enable reasonable comprehension of the program's flow
  - evaluate approaches (best, worst or average cases)
  - determines which resources (input/output, memory) cycles necessary
  - quantify a problem's complexity in terms of time and space using an algorithm

[[↑] Back to top](#algorithm-questions)

### How can we compare between two algorithms written for the same problem?

The complexity of an algorithm is a technique used to categorize how efficient it is in comparison to other algorithms.

We categorize algorithms according to how much time or space they take to execute.

  - **Complexity of time** is the amount of time it takes to execute an algorithm. The running time of an algorithm.
  - **Complexity of space** is the amount of space it takes to execute an algorithm.

### What do you understand by best, worst, and average case?

The mathematical foundation of an algorithm's run time performance is defined by asymptotic behavior. Asymptotic analysis is  a technique used for determining the efficiency of an algorithm that does not rely on machine-specific properties.

  - **Best case scenario** is the case in which the algorithm performs the best. e.g for binary search, the best case scenario would have a time complexity of 0(1). Best case scenario is represented by Big Theta Notation (Ω(n) notation)

  - **Worst case scenario** is the case in which the algorithm performs the worst. e.g for quick sort, the worst case scenario would have a time complexity of 0(n^2). Worst case scenario is represented by Big Omega Notation (Ω(n) notation)

  - **Average case scenario** is the amount of some computational resource(time) used by the process, averaged over all possible inputs, according to computational complexity theory. e.g for a randomized quicksort, the average case scenario would have a time complexity of 0(n log n). Average case scenario is represented by Big 0 Notation (Θ(n) notation)

[[↑] Back to top](#algorithm-questions)

### What are the different approaches to developing an algorithm?

There are three approaches:

  - **Greedy approach**: The algorithm is designed to find the best solution to a problem.
  - **Divide and conquer algorithm**: The algorithm is designed to divide the problem into smaller subproblems and solve those subproblems independently.
  - **Dynamic programming algorithm**: The algorithm is designed to solve a problem by breaking it down into smaller subproblems and solving those subproblems comninedly.

### What are some examples of greedy algorithms?

Greedy algorithms aim to choose the best optimal decision at each step. This means the algorithm chooses the best answer available at the time, regardless of the consequences. They may identify less than perfect answers for some cases, while finding the overall, ideal solution for some idealistic problems.

  - **Travelling salesman problem**: The travelling salesman problem is a challenge to find the shortest path between a set of cities. The algorithm is greedy because it chooses the best path at each step.
  - **Knapsack problem**: The knapsack problem is a challenge to find the most valuable items that fit into a knapsack.
  - **Prim's minimum spanning tree algorithm**: The prim's minimum spanning tree algorithm is a greedy algorithm that finds the minimum spanning tree of a graph.
  - **Kruskal's minimum spanning tree algorithm**: The kruskal's minimum spanning tree algorithm is a greedy algorithm that finds the minimum spanning tree of a graph.
  - **Dijkstra's minimum spanning tree algorithm**: The dijkstra's minimum spanning tree algorithm is a greedy algorithm that finds the minimum spanning tree of a graph.
  - **Graph Map Coloring algorithm**: The graph map coloring algorithm is a greedy algorithm that finds the minimum number of colors required to color a graph.
  - **Graph Vertex Cover algorithm**: The graph vertex cover algorithm is a greedy algorithm that finds the minimum number of vertices required to cover a graph.
  - **Job scheduling algorithm**: The job scheduling algorithm is a greedy algorithm that finds the optimal order in which jobs can be completed.

### What are some examples of dynamic programming algorithms?

Some examples of problems that can be solved using dynamic programming algorithms are:

  - **Fibonacci sequence**: The fibonacci sequence is a sequence of numbers that starts with 0 and 1, and each subsequent number is the sum of the previous two.
  - **Tower of Hanoi**: The tower of hanoi is a puzzle where you have three rods and n disks. The objective is to move the entire stack to another rod, obeying the following rules:
    - Only one disk can be moved at a time.
    - Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
    - No disk may be placed on top of a smaller disk.
  - **Knapsack problem**: The knapsack problem is a challenge to find the most valuable items that fit into a knapsack.
  - **All-pairs shortest path problem**: The all-pairs shortest path problem is a challenge to find the shortest path between all pairs of vertices in a graph.
  - **Shortest path by Dijkstra**: The shortest path by Dijkstra finds the shortest path between two vertices in a graph.
  - **Project scheduling algorithm**: The project scheduling algorithm is an algorithm that finds the optimal order in which projects can be completed.

### What are some examples of divide and conquer algorithms?

Some examples of problems that are solved using divide and conquer algorithm approach:

  - **Merge sort**: The merge sort algorithm is a divide and conquer algorithm that sorts an array by repeatedly merging two smaller sorted arrays.
  - **Quick sort**: The quick sort algorithm is a divide and conquer algorithm that sorts an array by repeatedly partitioning the array into two subarrays and sorting them recursively.
  - **Binary search**: The binary search algorithm is a divide and conquer algorithm that finds the position of a target value in a sorted array.
  - **Strassen's matrix multiplication algorithm**: The strassen's matrix multiplication algorithm is a divide and conquer algorithm that multiplies two matrices.
  - **Closest pair of points problem**: The closest pair of points problem is a challenge to find the closest pair of points in a set of points.

### Sorting algorithms

Sorting algorithms are used to sort an array of elements.

### What are some examples of sorting algorithms?

  - **Bubble sort** is a sorting algorithm that compares adjacent elements and swaps them if they are in the wrong order. Its time complexity is O(n^2).
  
  ```
  // Bubble sort algorithm
  function bubbleSort(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }
  ```

  - **Selection sort** is an n-place sorting algorithm technique. It divides the data set into two sub-lists: sorted and unsorted. Then it selects the minimum element from the unsorted list and places it in the sorted list. It repeats this process until the unsorted list is empty. Its time complexity is O(n^2).

  ```
  // Selection sort algorithm
  function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) min = j;
      }
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
  }
  ```

  - **Insertion sort** is a sorting algorithm that builds the final sorted array one element at a time. It is an in-place algorithm, meaning that it does not require any additional memory space. It is a comparison sort, meaning that it can sort in-place. Its time complexity is O(n^2).