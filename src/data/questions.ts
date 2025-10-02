export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Complexity {
  bruteForceTime: string;
  optimalTime: string;
  optimalSpace: string;
}

export interface Question {
  id: string;
  title: string;
  url: string;
  difficulty: Difficulty;
  complexity: Complexity;
}

export interface QuestionCategory {
  id: string;
  name: string;
  questions: Question[];
}

export const questionCategories: QuestionCategory[] = [
  {
    id: 'array',
    name: 'Array',
    questions: [
      { id: 'two-sum', title: 'Two Sum', url: 'https://leetcode.com/problems/two-sum/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(N²) (Nested loops)', optimalTime: 'O(N) (Hash Map)', optimalSpace: 'O(N) (Hash Map)' } },
      { id: 'best-time-buy-sell-stock', title: 'Best Time to Buy and Sell Stock', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(N²) (Nested loops)', optimalTime: 'O(N) (One Pass)', optimalSpace: 'O(1)' } },
      { id: 'contains-duplicate', title: 'Contains Duplicate', url: 'https://leetcode.com/problems/contains-duplicate/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(N²) or O(NlogN) (Sorting)', optimalTime: 'O(N) (Hash Set)', optimalSpace: 'O(N) (Hash Set)' } },
      { id: 'product-array-except-self', title: 'Product of Array Except Self', url: 'https://leetcode.com/problems/product-of-array-except-self/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²) (Nested loops/recalculating products)', optimalTime: 'O(N) (Prefix/Suffix Products)', optimalSpace: 'O(1) (Excluding output array)' } },
      { id: 'maximum-subarray', title: 'Maximum Subarray', url: 'https://leetcode.com/problems/maximum-subarray/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²) (All subarrays)', optimalTime: 'O(N) (Kadane\'s Algorithm)', optimalSpace: 'O(1)' } },
      { id: 'maximum-product-subarray', title: 'Maximum Product Subarray', url: 'https://leetcode.com/problems/maximum-product-subarray/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²) (All subarrays)', optimalTime: 'O(N)', optimalSpace: 'O(1)' } },
      { id: 'find-minimum-rotated-sorted-array', title: 'Find Minimum in Rotated Sorted Array', url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N) (Linear scan)', optimalTime: 'O(logN) (Binary Search)', optimalSpace: 'O(1)' } },
      { id: 'search-rotated-sorted-array', title: 'Search in Rotated Sorted Array', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N) (Linear scan)', optimalTime: 'O(logN) (Modified Binary Search)', optimalSpace: 'O(1)' } },
      { id: '3sum', title: '3Sum', url: 'https://leetcode.com/problems/3sum/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N³) (Three nested loops)', optimalTime: 'O(N²) (Sorting + Two Pointers)', optimalSpace: 'O(1) or O(N) (if sorting is O(N) extra space)' } },
      { id: 'container-most-water', title: 'Container With Most Water', url: 'https://leetcode.com/problems/container-with-most-water/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²) (Check all pairs)', optimalTime: 'O(N) (Two Pointers)', optimalSpace: 'O(1)' } },
    ],
  },
  {
    id: 'string',
    name: 'String',
    questions: [
      { id: 'longest-substring-without-repeating', title: 'Longest Substring Without Repeating Characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²) (Check all substrings with set)', optimalTime: 'O(N) (Sliding Window/Hash Map)', optimalSpace: 'O(1) (Alphabet size)' } },
      { id: 'longest-repeating-character-replacement', title: 'Longest Repeating Character Replacement', url: 'https://leetcode.com/problems/longest-repeating-character-replacement/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²) (Check all substrings)', optimalTime: 'O(N) (Sliding Window)', optimalSpace: 'O(1) (Alphabet size)' } },
      { id: 'minimum-window-substring', title: 'Minimum Window Substring', url: 'https://leetcode.com/problems/minimum-window-substring/', difficulty: 'Hard', complexity: { bruteForceTime: 'O(N²⋅M) (M: pattern length, check all substrings)', optimalTime: 'O(N) (Sliding Window/Hash Map)', optimalSpace: 'O(1) (Alphabet size)' } },
      { id: 'valid-anagram', title: 'Valid Anagram', url: 'https://leetcode.com/problems/valid-anagram/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(NlogN) (Sorting)', optimalTime: 'O(N) (Character Count Array/Hash Map)', optimalSpace: 'O(1) (Alphabet size, e.g., 26)' } },
      { id: 'group-anagrams', title: 'Group Anagrams', url: 'https://leetcode.com/problems/group-anagrams/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²⋅L) (Compare every pair)', optimalTime: 'O(N⋅L⋅logL) (Sorting strings for keys)', optimalSpace: 'O(N⋅L) (Hash Map storage)' } },
      { id: 'valid-parentheses', title: 'Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(N²) (Look for and remove pairs)', optimalTime: 'O(N) (Stack)', optimalSpace: 'O(N) (Stack)' } },
      { id: 'valid-palindrome', title: 'Valid Palindrome', url: 'https://leetcode.com/problems/valid-palindrome/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(N) (New string construction)', optimalTime: 'O(N) (Two Pointers)', optimalSpace: 'O(1)' } },
      { id: 'longest-palindromic-substring', title: 'Longest Palindromic Substring', url: 'https://leetcode.com/problems/longest-palindromic-substring/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N³) (Check all substrings, validate palindrome)', optimalTime: 'O(N²) (Expand Around Center)', optimalSpace: 'O(1) (Expand Around Center)' } },
      { id: 'palindromic-substrings', title: 'Palindromic Substrings', url: 'https://leetcode.com/problems/palindromic-substrings/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N³)', optimalTime: 'O(N²) (Expand Around Center)', optimalSpace: 'O(1)' } },
      { id: 'encode-decode-strings', title: 'Encode and Decode Strings (Leetcode Premium)', url: 'https://leetcode.com/problems/encode-and-decode-strings/', difficulty: 'Medium', complexity: { bruteForceTime: 'N/A', optimalTime: 'O(N) (N: total characters across all strings)', optimalSpace: 'O(N)' } },
    ],
  },
  {
    id: 'heap',
    name: 'Heap',
    questions: [
      { id: 'merge-k-sorted-lists-heap', title: 'Merge K Sorted Lists', url: 'https://leetcode.com/problems/merge-k-sorted-lists/', difficulty: 'Hard', complexity: { bruteForceTime: 'O(K²⋅avg list length)', optimalTime: 'O(NlogK) (Min-Heap)', optimalSpace: 'O(K) (Min-Heap size)' } },
      { id: 'top-k-frequent-elements', title: 'Top K Frequent Elements', url: 'https://leetcode.com/problems/top-k-frequent-elements/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(NlogN) (Count and Sort)', optimalTime: 'O(N) (Quickselect/Bucket Sort) or O(NlogK) (Min-Heap)', optimalSpace: 'O(N) (Hash Map for counts)' } },
      { id: 'find-median-data-stream', title: 'Find Median from Data Stream', url: 'https://leetcode.com/problems/find-median-from-data-stream/', difficulty: 'Hard', complexity: { bruteForceTime: 'O(NlogN) (Store, re-sort on demand)', optimalTime: 'Add/Find: O(logN) (Two Heaps)', optimalSpace: 'O(N) (Two Heaps storage)' } },
    ],
  },
  {
    id: 'matrix',
    name: 'Matrix',
    questions: [
      { id: 'set-matrix-zeroes', title: 'Set Matrix Zeroes', url: 'https://leetcode.com/problems/set-matrix-zeroes/', difficulty: 'Medium', complexity: { bruteForceTime: 'O((M⋅N)²) (Propagate zeros immediately)', optimalTime: 'O(M⋅N)', optimalSpace: 'O(1) (In-place using first row/col) or O(M+N) (Auxiliary arrays)' } },
      { id: 'spiral-matrix', title: 'Spiral Matrix', url: 'https://leetcode.com/problems/spiral-matrix/', difficulty: 'Medium', complexity: { bruteForceTime: 'N/A', optimalTime: 'O(M⋅N)', optimalSpace: 'O(1) (Excluding output array)' } },
      { id: 'rotate-image', title: 'Rotate Image', url: 'https://leetcode.com/problems/rotate-image/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²) (Use a second matrix)', optimalTime: 'O(N²) (In-place swap)', optimalSpace: 'O(1) (In-place)' } },
      { id: 'word-search', title: 'Word Search', url: 'https://leetcode.com/problems/word-search/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(R⋅C⋅4^L) (L: word length, DFS from every cell)', optimalTime: 'O(R⋅C⋅3^L) (DFS/Backtracking with pruning)', optimalSpace: 'O(L) (Recursion stack depth)' } },
    ],
  },
  {
    id: 'linked-list',
    name: 'Linked List',
    questions: [
      { id: 'reverse-linked-list', title: 'Reverse a Linked List', url: 'https://leetcode.com/problems/reverse-linked-list/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(N) (Store in array, then build new list)', optimalTime: 'O(N) (Iterative/Recursive)', optimalSpace: 'O(1) (Iterative) or O(N) (Recursive stack)' } },
      { id: 'detect-cycle-linked-list', title: 'Detect Cycle in a Linked List', url: 'https://leetcode.com/problems/linked-list-cycle/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(N²) (Check visited nodes in inner loop)', optimalTime: 'O(N) (Floyd\'s Tortoise and Hare)', optimalSpace: 'O(1)' } },
      { id: 'merge-two-sorted-lists', title: 'Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(N²) (Inefficient insertion)', optimalTime: 'O(N+M) (One pass)', optimalSpace: 'O(1) (In-place) or O(N+M) (New list/Recursive stack)' } },
      { id: 'merge-k-sorted-lists', title: 'Merge K Sorted Lists', url: 'https://leetcode.com/problems/merge-k-sorted-lists/', difficulty: 'Hard', complexity: { bruteForceTime: 'O(K²⋅avg list length)', optimalTime: 'O(NlogK) (Min-Heap or Divide & Conquer)', optimalSpace: 'O(K) (Min-Heap size)' } },
      { id: 'remove-nth-node', title: 'Remove Nth Node From End Of List', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N) (Two passes)', optimalTime: 'O(N) (One Pass/Two Pointers)', optimalSpace: 'O(1)' } },
      { id: 'reorder-list', title: 'Reorder List', url: 'https://leetcode.com/problems/reorder-list/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²) (Repeatedly find the tail)', optimalTime: 'O(N) (Find middle, reverse, merge)', optimalSpace: 'O(1) (In-place)' } },
    ],
  },
  {
    id: 'tree',
    name: 'Tree',
    questions: [
      { id: 'maximum-depth-binary-tree', title: 'Maximum Depth of Binary Tree', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(N) (Traversal)', optimalTime: 'O(N) (DFS/BFS)', optimalSpace: 'O(H) (Height, for recursion stack/queue)' } },
      { id: 'same-tree', title: 'Same Tree', url: 'https://leetcode.com/problems/same-tree/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(min(N,M)) (Traversal)', optimalTime: 'O(min(N,M)) (Traversal)', optimalSpace: 'O(H)' } },
      { id: 'invert-binary-tree', title: 'Invert/Flip Binary Tree', url: 'https://leetcode.com/problems/invert-binary-tree/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(N) (Traversal)', optimalTime: 'O(N) (DFS/BFS)', optimalSpace: 'O(H)' } },
      { id: 'binary-tree-maximum-path-sum', title: 'Binary Tree Maximum Path Sum', url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', difficulty: 'Hard', complexity: { bruteForceTime: 'O(N²) (Check all pairs)', optimalTime: 'O(N) (Post-order DFS)', optimalSpace: 'O(H)' } },
      { id: 'binary-tree-level-order-traversal', title: 'Binary Tree Level Order Traversal', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N) (Traversal)', optimalTime: 'O(N) (BFS/Queue)', optimalSpace: 'O(N) (Queue size)' } },
      { id: 'serialize-deserialize-binary-tree', title: 'Serialize and Deserialize Binary Tree', url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/', difficulty: 'Hard', complexity: { bruteForceTime: 'N/A', optimalTime: 'O(N) (Traversal)', optimalSpace: 'O(N) (Storage for string/array)' } },
      { id: 'subtree-another-tree', title: 'Subtree of Another Tree', url: 'https://leetcode.com/problems/subtree-of-another-tree/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(N²) (Check for equality at every node)', optimalTime: 'O(N+M) (Optimized string hashing/KMP)', optimalSpace: 'O(N+M)' } },
      { id: 'construct-binary-tree', title: 'Construct Binary Tree from Preorder and Inorder Traversal', url: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²) (Repeated linear search)', optimalTime: 'O(N) (Hash map for Inorder indices)', optimalSpace: 'O(N) (Hash map + recursion stack)' } },
      { id: 'validate-binary-search-tree', title: 'Validate Binary Search Tree', url: 'https://leetcode.com/problems/validate-binary-search-tree/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²) (For each node, check all descendants)', optimalTime: 'O(N) (In-order traversal or DFS with range)', optimalSpace: 'O(H)' } },
      { id: 'kth-smallest-element-bst', title: 'Kth Smallest Element in a BST', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N) (Full in-order traversal)', optimalTime: 'O(H+K) (In-order traversal until K)', optimalSpace: 'O(H)' } },
      { id: 'lowest-common-ancestor-bst', title: 'Lowest Common Ancestor of BST', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N) (Find paths from root)', optimalTime: 'O(H) or O(logN) (Single Traversal)', optimalSpace: 'O(1) (Iterative)' } },
      { id: 'implement-trie', title: 'Implement Trie (Prefix Tree)', url: 'https://leetcode.com/problems/implement-trie-prefix-tree/', difficulty: 'Medium', complexity: { bruteForceTime: 'N/A', optimalTime: 'Insert/Search: O(L) (L: word length)', optimalSpace: 'O(∑L) (Total chars stored)' } },
      { id: 'add-search-word', title: 'Add and Search Word', url: 'https://leetcode.com/problems/add-and-search-word-data-structure-design/', difficulty: 'Medium', complexity: { bruteForceTime: 'N/A', optimalTime: 'Search: O(L⋅26^L) (Worst case with \'.\')', optimalSpace: 'O(∑L) (Trie storage)' } },
      { id: 'word-search-ii', title: 'Word Search II', url: 'https://leetcode.com/problems/word-search-ii/', difficulty: 'Hard', complexity: { bruteForceTime: 'O(W⋅R⋅C⋅3^L) (W: number of words, repeated search)', optimalTime: 'O(R⋅C⋅4^L+∑WL) (Trie + Backtracking)', optimalSpace: 'O(∑WL) (Trie storage)' } },
    ],
  },
  {
    id: 'graph',
    name: 'Graph',
    questions: [
      { id: 'clone-graph', title: 'Clone Graph', url: 'https://leetcode.com/problems/clone-graph/', difficulty: 'Medium', complexity: { bruteForceTime: 'N/A', optimalTime: 'O(V+E) (BFS/DFS)', optimalSpace: 'O(V+E) (To store the copy)' } },
      { id: 'course-schedule', title: 'Course Schedule', url: 'https://leetcode.com/problems/course-schedule/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(V!⋅E) (Checking permutations)', optimalTime: 'O(V+E) (Topological Sort)', optimalSpace: 'O(V+E)' } },
      { id: 'pacific-atlantic-water-flow', title: 'Pacific Atlantic Water Flow', url: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(R⋅C⋅4^(R⋅C)) (DFS from every cell)', optimalTime: 'O(R⋅C) (BFS/DFS from boundary)', optimalSpace: 'O(R⋅C) (Visited arrays)' } },
      { id: 'number-islands', title: 'Number of Islands', url: 'https://leetcode.com/problems/number-of-islands/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(R⋅C⋅R⋅C) (Inefficient graph search)', optimalTime: 'O(R⋅C) (BFS/DFS)', optimalSpace: 'O(R⋅C) (Recursion stack/Queue)' } },
      { id: 'longest-consecutive-sequence', title: 'Longest Consecutive Sequence', url: 'https://leetcode.com/problems/longest-consecutive-sequence/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²) (Check all subsequences) or O(NlogN) (Sorting)', optimalTime: 'O(N) (Hash Set)', optimalSpace: 'O(N) (Hash Set)' } },
      { id: 'alien-dictionary', title: 'Alien Dictionary (Leetcode Premium)', url: 'https://leetcode.com/problems/alien-dictionary/', difficulty: 'Hard', complexity: { bruteForceTime: 'N/A', optimalTime: 'O(C) (C: total length of all words, O(V+E) on graph)', optimalSpace: 'O(V+E)' } },
      { id: 'graph-valid-tree', title: 'Graph Valid Tree (Leetcode Premium)', url: 'https://leetcode.com/problems/graph-valid-tree/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(V²) (Redundant cycle/connectivity checks)', optimalTime: 'O(V+E) (BFS/DFS or Union-Find)', optimalSpace: 'O(V+E)' } },
      { id: 'number-connected-components', title: 'Number of Connected Components in an Undirected Graph (Leetcode Premium)', url: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(V²)', optimalTime: 'O(V+E) (BFS/DFS or Union-Find)', optimalSpace: 'O(V+E)' } },
    ],
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    questions: [
      { id: 'climbing-stairs', title: 'Climbing Stairs', url: 'https://leetcode.com/problems/climbing-stairs/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(2^N) (Pure recursion)', optimalTime: 'O(N) (DP or Fibonacci logic)', optimalSpace: 'O(1) (Optimized DP)' } },
      { id: 'coin-change', title: 'Coin Change', url: 'https://leetcode.com/problems/coin-change/', difficulty: 'Medium', complexity: { bruteForceTime: 'Exponential, e.g., O(A^C) (A: amount, C: number of coins)', optimalTime: 'O(A⋅C) (DP)', optimalSpace: 'O(A)' } },
      { id: 'longest-increasing-subsequence', title: 'Longest Increasing Subsequence', url: 'https://leetcode.com/problems/longest-increasing-subsequence/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(2^N)', optimalTime: 'O(NlogN) (DP with Binary Search)', optimalSpace: 'O(N)' } },
      { id: 'longest-common-subsequence', title: 'Longest Common Subsequence', url: 'https://leetcode.com/problems/longest-common-subsequence/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(2^(N+M)) (Pure recursion)', optimalTime: 'O(N⋅M) (DP)', optimalSpace: 'O(N⋅M) or O(min(N,M)) (Space-optimized)' } },
      { id: 'word-break', title: 'Word Break Problem', url: 'https://leetcode.com/problems/word-break/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(2^N) (Pure recursion)', optimalTime: 'O(N³) (DP or Memoization)', optimalSpace: 'O(N)' } },
      { id: 'combination-sum', title: 'Combination Sum', url: 'https://leetcode.com/problems/combination-sum-iv/', difficulty: 'Medium', complexity: { bruteForceTime: 'Exponential, e.g., O(N^K) (K: target)', optimalTime: 'O(N⋅C) (N: target, C: array size)', optimalSpace: 'O(N)' } },
      { id: 'house-robber', title: 'House Robber', url: 'https://leetcode.com/problems/house-robber/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(2^N)', optimalTime: 'O(N)', optimalSpace: 'O(1) (Optimized DP)' } },
      { id: 'house-robber-ii', title: 'House Robber II', url: 'https://leetcode.com/problems/house-robber-ii/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(2^N)', optimalTime: 'O(N)', optimalSpace: 'O(1) (Optimized DP)' } },
      { id: 'decode-ways', title: 'Decode Ways', url: 'https://leetcode.com/problems/decode-ways/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(2^N)', optimalTime: 'O(N)', optimalSpace: 'O(1) (Optimized DP)' } },
      { id: 'unique-paths', title: 'Unique Paths', url: 'https://leetcode.com/problems/unique-paths/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(2^(M+N)) (Pure recursion)', optimalTime: 'O(M⋅N) (DP) or O(1) (Combinatorics)', optimalSpace: 'O(1) (Combinatorics) or O(min(M,N)) (Optimized DP)' } },
      { id: 'jump-game', title: 'Jump Game', url: 'https://leetcode.com/problems/jump-game/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(2^N) (Pure recursion)', optimalTime: 'O(N) (Greedy)', optimalSpace: 'O(1)' } },
    ],
  },
  {
    id: 'binary',
    name: 'Binary',
    questions: [
      { id: 'sum-two-integers', title: 'Sum of Two Integers', url: 'https://leetcode.com/problems/sum-of-two-integers/', difficulty: 'Medium', complexity: { bruteForceTime: 'N/A (Standard O(1) arithmetic)', optimalTime: 'O(1) (Bit manipulation, limited by 32/64 bits)', optimalSpace: 'O(1)' } },
      { id: 'number-1-bits', title: 'Number of 1 Bits', url: 'https://leetcode.com/problems/number-of-1-bits/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(integer value)', optimalTime: 'O(1) (Brian Kernighan\'s Algorithm or 32-bit loop)', optimalSpace: 'O(1)' } },
      { id: 'counting-bits', title: 'Counting Bits', url: 'https://leetcode.com/problems/counting-bits/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(N⋅32) (Iterate 1\'s for each number)', optimalTime: 'O(N) (DP/Bit manipulation)', optimalSpace: 'O(N) (For the result array)' } },
      { id: 'missing-number', title: 'Missing Number', url: 'https://leetcode.com/problems/missing-number/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(N²) (Check presence) or O(NlogN) (Sorting)', optimalTime: 'O(N) (Summation or XOR)', optimalSpace: 'O(1)' } },
      { id: 'reverse-bits', title: 'Reverse Bits', url: 'https://leetcode.com/problems/reverse-bits/', difficulty: 'Easy', complexity: { bruteForceTime: 'N/A', optimalTime: 'O(1) (Bitwise swaps/shifts)', optimalSpace: 'O(1)' } },
    ],
  },
  {
    id: 'interval',
    name: 'Interval',
    questions: [
      { id: 'insert-interval', title: 'Insert Interval', url: 'https://leetcode.com/problems/insert-interval/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N) (Linear pass)', optimalTime: 'O(N)', optimalSpace: 'O(N)' } },
      { id: 'merge-intervals', title: 'Merge Intervals', url: 'https://leetcode.com/problems/merge-intervals/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²) (Check all pairs)', optimalTime: 'O(NlogN) (Dominated by sorting)', optimalSpace: 'O(N)' } },
      { id: 'non-overlapping-intervals', title: 'Non-overlapping Intervals', url: 'https://leetcode.com/problems/non-overlapping-intervals/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²) (DP)', optimalTime: 'O(NlogN) (Greedy, dominated by sorting)', optimalSpace: 'O(1) (excluding sort space)' } },
      { id: 'meeting-rooms', title: 'Meeting Rooms (Leetcode Premium)', url: 'https://leetcode.com/problems/meeting-rooms/', difficulty: 'Easy', complexity: { bruteForceTime: 'O(N²) (Check all pairs)', optimalTime: 'O(NlogN) (Dominated by sorting)', optimalSpace: 'O(1) (excluding sort space)' } },
      { id: 'meeting-rooms-ii', title: 'Meeting Rooms II (Leetcode Premium)', url: 'https://leetcode.com/problems/meeting-rooms-ii/', difficulty: 'Medium', complexity: { bruteForceTime: 'O(N²) (Check against active meetings)', optimalTime: 'O(NlogN) (Min-Heap or Two Pointers, dominated by sorting)', optimalSpace: 'O(N) (Min-Heap/End-times array)' } },
    ],
  },
];
