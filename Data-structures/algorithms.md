## Algorithm Questions

Here are some algorithms questions and answers you may encounter in your interview process.

- [Algorithm Questions](#algorithm-questions)
  - [Algorithms](#algorithms)
  - [Why do we need to do algorithm analysis?](#why-do-we-need-to-do-algorithm-analysis)
  - [How can we compare between two algorithms written for the same problem?](#how-can-we-compare-between-two-algorithms-written-for-the-same-problem)
  - [What do you understand by best, worst, and average case?](#what-do-you-understand-by-best-worst-and-average-case)
  - [What are the different approaches to developing an algorithm?](#what-are-the-different-approaches-to-developing-an-algorithm)

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

  - **Greedy algorithm**: The algorithm is designed to find the best solution to a problem.
  - **Divide and conquer algorithm**: The algorithm is designed to divide the problem into smaller subproblems and solve those subproblems independently.
  - **Dynamic programming algorithm**: The algorithm is designed to solve a problem by breaking it down into smaller subproblems and solving those subproblems comninedly.

