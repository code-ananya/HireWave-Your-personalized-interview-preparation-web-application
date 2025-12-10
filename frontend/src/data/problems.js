export const PROBLEMS = {
  // ================= EXISTING 5 PROBLEMS =================

  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Return indices of two numbers such that they add up to target.",
      notes: ["Exactly one solution exists."],
    },
    examples: [{ input: "[2,7,11,15], 9", output: "[0,1]" }],
    constraints: ["2 ≤ n ≤ 10⁴"],
    starterCode: {
      javascript: `function twoSum(nums, target) {}`,
      python: `def twoSum(nums, target): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {},
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Reverse a character array in-place.",
      notes: ["Must use O(1) extra space."],
    },
    examples: [{ input: '["h","e","l","l","o"]', output: '["o","l","l","e","h"]' }],
    constraints: ["1 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function reverseString(s) {}`,
      python: `def reverseString(s): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {},
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Check if a string is a palindrome after cleaning.",
      notes: [],
    },
    examples: [{ input: `"racecar"`, output: "true" }],
    constraints: ["1 ≤ n ≤ 2*10⁵"],
    starterCode: {
      javascript: `function isPalindrome(s) {}`,
      python: `def isPalindrome(s): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {},
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • DP",
    description: {
      text: "Find subarray with maximum sum.",
      notes: ["Use Kadane’s Algorithm."],
    },
    examples: [{ input: "[-2,1,-3,4,-1,2,1]", output: "6" }],
    constraints: ["1 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function maxSubArray(nums) {}`,
      python: `def maxSubArray(nums): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {},
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Find max water between two lines.",
      notes: [],
    },
    examples: [{ input: "[1,8,6,2,5]", output: "49" }],
    constraints: ["2 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function maxArea(height) {}`,
      python: `def maxArea(height): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {},
  },

  // ================= 50 NEW PROBLEMS START HERE =================

  "binary-search": {
  id: "binary-search",
  title: "Binary Search",
  difficulty: "Easy",
  category: "Array • Binary Search",
  description: {
    text: "Given a sorted array of integers and a target value, return the index of the target if it exists, otherwise return -1.",
    notes: ["Binary search runs in O(log n) time."],
  },
  examples: [
    { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
    { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
  ],
  constraints: ["1 ≤ nums.length ≤ 10⁴"],
  starterCode: {
    javascript: "function search(nums, target) {}",
    python: "def search(nums, target): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"merge-sorted-array": {
  id: "merge-sorted-array",
  title: "Merge Sorted Array",
  difficulty: "Easy",
  category: "Array",
  description: {
    text: "Merge two sorted arrays into one sorted array in-place.",
    notes: ["Do not return anything, modify nums1 in-place."],
  },
  examples: [
    { input: "nums1 = [1,2,3,0,0,0], nums2 = [2,5,6]", output: "[1,2,2,3,5,6]" },
  ],
  constraints: ["0 ≤ m, n ≤ 200"],
  starterCode: {
    javascript: "function merge(nums1, m, nums2, n) {}",
    python: "def merge(nums1, m, nums2, n): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"remove-duplicates": {
  id: "remove-duplicates",
  title: "Remove Duplicates from Sorted Array",
  difficulty: "Easy",
  category: "Array",
  description: {
    text: "Remove duplicates in-place such that each element appears only once.",
    notes: ["Return the new length."],
  },
  examples: [{ input: "[0,0,1,1,2]", output: "3" }],
  constraints: ["1 ≤ n ≤ 3 × 10⁴"],
  starterCode: {
    javascript: "function removeDuplicates(nums) {}",
    python: "def removeDuplicates(nums): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"best-time-to-buy-sell-stock": {
  id: "best-time-to-buy-sell-stock",
  title: "Best Time To Buy & Sell Stock",
  difficulty: "Easy",
  category: "Array",
  description: {
    text: "Find the maximum profit you can achieve from one transaction.",
    notes: ["You must buy before you sell."],
  },
  examples: [{ input: "[7,1,5,3,6,4]", output: "5" }],
  constraints: ["1 ≤ n ≤ 10⁵"],
  starterCode: {
    javascript: "function maxProfit(prices) {}",
    python: "def maxProfit(prices): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"climbing-stairs": {
  id: "climbing-stairs",
  title: "Climbing Stairs",
  difficulty: "Easy",
  category: "DP",
  description: {
    text: "Find the number of distinct ways to climb n steps.",
    notes: ["At each step, you can climb 1 or 2 steps."],
  },
  examples: [{ input: "n = 3", output: "3" }],
  constraints: ["1 ≤ n ≤ 45"],
  starterCode: {
    javascript: "function climbStairs(n) {}",
    python: "def climbStairs(n): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"product-of-array-except-self": {
  id: "product-of-array-except-self",
  title: "Product of Array Except Self",
  difficulty: "Medium",
  category: "Array",
  description: {
    text: "Return an array where each element is the product of all other elements.",
    notes: ["Do not use division."],
  },
  examples: [{ input: "[1,2,3,4]", output: "[24,12,8,6]" }],
  constraints: ["2 ≤ n ≤ 10⁵"],
  starterCode: {
    javascript: "function productExceptSelf(nums) {}",
    python: "def productExceptSelf(nums): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"subarray-sum-equals-k": {
  id: "subarray-sum-equals-k",
  title: "Subarray Sum Equals K",
  difficulty: "Medium",
  category: "Prefix Sum",
  description: {
    text: "Find total number of continuous subarrays whose sum equals to k.",
    notes: ["Use hashmap + prefix sum."],
  },
  examples: [{ input: "nums=[1,1,1], k=2", output: "2" }],
  constraints: ["1 ≤ n ≤ 2 × 10⁴"],
  starterCode: {
    javascript: "function subarraySum(nums, k) {}",
    python: "def subarraySum(nums, k): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"longest-substring-without-repeat": {
  id: "longest-substring-without-repeat",
  title: "Longest Substring Without Repeating",
  difficulty: "Medium",
  category: "Sliding Window",
  description: {
    text: "Find the length of the longest substring without repeating characters.",
    notes: ["Use sliding window technique."],
  },
  examples: [{ input: `"abcabcbb"`, output: "3" }],
  constraints: ["0 ≤ s.length ≤ 5 × 10⁴"],
  starterCode: {
    javascript: "function lengthOfLongestSubstring(s) {}",
    python: "def lengthOfLongestSubstring(s): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"rotate-image": {
  id: "rotate-image",
  title: "Rotate Image",
  difficulty: "Medium",
  category: "Matrix",
  description: {
    text: "Rotate the matrix 90 degrees clockwise.",
    notes: ["You must rotate the image in-place."],
  },
  examples: [{ input: "[[1,2],[3,4]]", output: "[[3,1],[4,2]]" }],
  constraints: ["n == matrix.length"],
  starterCode: {
    javascript: "function rotate(matrix) {}",
    python: "def rotate(matrix): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"search-in-rotated-array": {
  id: "search-in-rotated-array",
  title: "Search in Rotated Sorted Array",
  difficulty: "Medium",
  category: "Binary Search",
  description: {
    text: "Search for a target in a rotated sorted array.",
    notes: ["Must run in O(log n)."],
  },
  examples: [{ input: "nums=[4,5,6,7,0,1,2], target=0", output: "4" }],
  constraints: ["1 ≤ n ≤ 5000"],
  starterCode: {
    javascript: "function search(nums, target) {}",
    python: "def search(nums, target): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},
"valid-parentheses": {
  id: "valid-parentheses",
  title: "Valid Parentheses",
  difficulty: "Easy",
  category: "Stack",
  description: {
    text: "Given a string containing brackets, determine if the input string is valid.",
    notes: ["Every opening bracket must be closed in the correct order."],
  },
  examples: [
    { input: `"()"`, output: "true" },
    { input: `"(]"`, output: "false" },
  ],
  constraints: ["1 ≤ s.length ≤ 10⁴"],
  starterCode: {
    javascript: "function isValid(s) {}",
    python: "def isValid(s): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"min-stack": {
  id: "min-stack",
  title: "Min Stack",
  difficulty: "Medium",
  category: "Stack",
  description: {
    text: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    notes: ["All operations must be O(1)."],
  },
  examples: [
    { input: `push(1), push(2), getMin()`, output: "1" },
  ],
  constraints: ["-2³¹ ≤ val ≤ 2³¹ - 1"],
  starterCode: {
    javascript: "class MinStack {}",
    python: "class MinStack:",
    java: "class MinStack {}",
  },
  expectedOutput: {},
},

"daily-temperatures": {
  id: "daily-temperatures",
  title: "Daily Temperatures",
  difficulty: "Medium",
  category: "Stack",
  description: {
    text: "For each day, return how many days you would have to wait until a warmer temperature.",
    notes: ["Use a monotonic stack."],
  },
  examples: [
    { input: "[73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]" },
  ],
  constraints: ["1 ≤ n ≤ 10⁵"],
  starterCode: {
    javascript: "function dailyTemperatures(temps) {}",
    python: "def dailyTemperatures(temps): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"largest-rectangle-histogram": {
  id: "largest-rectangle-histogram",
  title: "Largest Rectangle in Histogram",
  difficulty: "Hard",
  category: "Stack",
  description: {
    text: "Find the area of the largest rectangle that can be formed in a histogram.",
    notes: ["Use monotonic stack."],
  },
  examples: [{ input: "[2,1,5,6,2,3]", output: "10" }],
  constraints: ["1 ≤ n ≤ 10⁵"],
  starterCode: {
    javascript: "function largestRectangleArea(heights) {}",
    python: "def largestRectangleArea(heights): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"merge-two-sorted-lists": {
  id: "merge-two-sorted-lists",
  title: "Merge Two Sorted Lists",
  difficulty: "Easy",
  category: "Linked List",
  description: {
    text: "Merge two sorted linked lists into one sorted list.",
    notes: ["Return the head of the merged list."],
  },
  examples: [{ input: "[1,2,4] + [1,3,4]", output: "[1,1,2,3,4,4]" }],
  constraints: ["0 ≤ n ≤ 50"],
  starterCode: {
    javascript: "function mergeTwoLists(l1, l2) {}",
    python: "def mergeTwoLists(l1, l2): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"reverse-linked-list": {
  id: "reverse-linked-list",
  title: "Reverse Linked List",
  difficulty: "Easy",
  category: "Linked List",
  description: {
    text: "Reverse a singly linked list.",
    notes: ["Do it in-place."],
  },
  examples: [{ input: "[1,2,3,4,5]", output: "[5,4,3,2,1]" }],
  constraints: ["0 ≤ n ≤ 5000"],
  starterCode: {
    javascript: "function reverseList(head) {}",
    python: "def reverseList(head): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"detect-cycle": {
  id: "detect-cycle",
  title: "Detect Cycle in Linked List",
  difficulty: "Easy",
  category: "Linked List",
  description: {
    text: "Detect if a linked list has a cycle in it.",
    notes: ["Use slow & fast pointers."],
  },
  examples: [{ input: "[3,2,0,-4] pos=1", output: "true" }],
  constraints: ["0 ≤ n ≤ 10⁴"],
  starterCode: {
    javascript: "function hasCycle(head) {}",
    python: "def hasCycle(head): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"lru-cache": {
  id: "lru-cache",
  title: "LRU Cache",
  difficulty: "Hard",
  category: "Design",
  description: {
    text: "Design a Least Recently Used (LRU) cache.",
    notes: ["Use HashMap + Doubly Linked List."],
  },
  examples: [
    { input: "put(1,1), get(1)", output: "1" },
  ],
  constraints: ["1 ≤ capacity ≤ 3000"],
  starterCode: {
    javascript: "class LRUCache {}",
    python: "class LRUCache:",
    java: "class LRUCache {}",
  },
  expectedOutput: {},
},

"binary-tree-inorder": {
  id: "binary-tree-inorder",
  title: "Binary Tree Inorder Traversal",
  difficulty: "Easy",
  category: "Tree",
  description: {
    text: "Return the inorder traversal of a binary tree.",
    notes: ["Left → Root → Right"],
  },
  examples: [{ input: "[1,null,2,3]", output: "[1,3,2]" }],
  constraints: ["0 ≤ n ≤ 100"],
  starterCode: {
    javascript: "function inorderTraversal(root) {}",
    python: "def inorderTraversal(root): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"max-depth-binary-tree": {
  id: "max-depth-binary-tree",
  title: "Maximum Depth of Binary Tree",
  difficulty: "Easy",
  category: "Tree",
  description: {
    text: "Find the maximum depth of a binary tree.",
    notes: ["Use DFS or BFS."],
  },
  examples: [{ input: "[3,9,20,null,null,15,7]", output: "3" }],
  constraints: ["0 ≤ n ≤ 10⁴"],
  starterCode: {
    javascript: "function maxDepth(root) {}",
    python: "def maxDepth(root): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},
"validate-bst": {
  id: "validate-bst",
  title: "Validate Binary Search Tree",
  difficulty: "Medium",
  category: "Tree",
  description: {
    text: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    notes: ["In a BST, left < root < right for all nodes."],
  },
  examples: [
    { input: "[2,1,3]", output: "true" },
    { input: "[5,1,4,null,null,3,6]", output: "false" },
  ],
  constraints: ["The number of nodes in the tree is in the range [1, 10⁴]."],
  starterCode: {
    javascript: "function isValidBST(root) {}",
    python: "def isValidBST(root): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"lowest-common-ancestor": {
  id: "lowest-common-ancestor",
  title: "Lowest Common Ancestor of a Binary Tree",
  difficulty: "Medium",
  category: "Tree",
  description: {
    text: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes.",
    notes: ["The LCA is the lowest node that has both p and q as descendants."],
  },
  examples: [
    { input: "root = [3,5,1,6,2,0,8], p=5, q=1", output: "3" },
  ],
  constraints: ["All Node.val are unique."],
  starterCode: {
    javascript: "function lowestCommonAncestor(root, p, q) {}",
    python: "def lowestCommonAncestor(root, p, q): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"serialize-deserialize-tree": {
  id: "serialize-deserialize-tree",
  title: "Serialize and Deserialize Binary Tree",
  difficulty: "Hard",
  category: "Tree",
  description: {
    text: "Design an algorithm to serialize and deserialize a binary tree.",
    notes: ["Ensure the reconstructed tree is identical to the original."],
  },
  examples: [
    { input: "[1,2,3,null,null,4,5]", output: "[1,2,3,null,null,4,5]" },
  ],
  constraints: ["The number of nodes is in the range [0, 10⁴]."],
  starterCode: {
    javascript: "class Codec {}",
    python: "class Codec:",
    java: "class Codec {}",
  },
  expectedOutput: {},
},

"number-of-islands": {
  id: "number-of-islands",
  title: "Number of Islands",
  difficulty: "Medium",
  category: "Graph",
  description: {
    text: "Given a grid of '1's and '0's, count the number of islands.",
    notes: ["An island is surrounded by water and connected vertically or horizontally."],
  },
  examples: [
    { input: "grid = [[1,1,0],[1,0,0],[0,0,1]]", output: "2" },
  ],
  constraints: ["m, n ≤ 300"],
  starterCode: {
    javascript: "function numIslands(grid) {}",
    python: "def numIslands(grid): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"clone-graph": {
  id: "clone-graph",
  title: "Clone Graph",
  difficulty: "Medium",
  category: "Graph",
  description: {
    text: "Return a deep copy of the graph.",
    notes: ["Use DFS or BFS with a hashmap."],
  },
  examples: [
    { input: "adjList = [[2,4],[1,3],[2,4],[1,3]]", output: "Cloned Graph" },
  ],
  constraints: ["The number of nodes in the graph is in the range [0, 100]."],
  starterCode: {
    javascript: "function cloneGraph(node) {}",
    python: "def cloneGraph(node): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"course-schedule": {
  id: "course-schedule",
  title: "Course Schedule",
  difficulty: "Medium",
  category: "Graph",
  description: {
    text: "Determine if all courses can be finished given prerequisites.",
    notes: ["Detect cycle in a directed graph using Topological Sort."],
  },
  examples: [
    { input: "numCourses = 2, prerequisites = [[1,0]]", output: "true" },
  ],
  constraints: ["1 ≤ numCourses ≤ 2000"],
  starterCode: {
    javascript: "function canFinish(numCourses, prerequisites) {}",
    python: "def canFinish(numCourses, prerequisites): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"rotting-oranges": {
  id: "rotting-oranges",
  title: "Rotting Oranges",
  difficulty: "Medium",
  category: "Graph",
  description: {
    text: "Each minute, fresh oranges adjacent to rotten ones become rotten. Return the minimum time.",
    notes: ["Use multi-source BFS."],
  },
  examples: [
    { input: "[[2,1,1],[1,1,0],[0,1,1]]", output: "4" },
  ],
  constraints: ["1 ≤ m, n ≤ 10"],
  starterCode: {
    javascript: "function orangesRotting(grid) {}",
    python: "def orangesRotting(grid): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"word-break": {
  id: "word-break",
  title: "Word Break",
  difficulty: "Medium",
  category: "DP",
  description: {
    text: "Return true if the string can be segmented into words from the dictionary.",
    notes: ["Use Dynamic Programming."],
  },
  examples: [
    { input: 's = "leetcode", wordDict = ["leet","code"]', output: "true" },
  ],
  constraints: ["1 ≤ s.length ≤ 300"],
  starterCode: {
    javascript: "function wordBreak(s, wordDict) {}",
    python: "def wordBreak(s, wordDict): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"coin-change": {
  id: "coin-change",
  title: "Coin Change",
  difficulty: "Medium",
  category: "DP",
  description: {
    text: "Find the minimum number of coins required to make up the given amount.",
    notes: ["If not possible, return -1."],
  },
  examples: [
    { input: "coins = [1,2,5], amount = 11", output: "3" },
  ],
  constraints: ["1 ≤ coins.length ≤ 12"],
  starterCode: {
    javascript: "function coinChange(coins, amount) {}",
    python: "def coinChange(coins, amount): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"longest-increasing-subsequence": {
  id: "longest-increasing-subsequence",
  title: "Longest Increasing Subsequence",
  difficulty: "Medium",
  category: "DP",
  description: {
    text: "Return the length of the longest strictly increasing subsequence.",
    notes: ["O(n²) DP or O(n log n) optimized solution."],
  },
  examples: [
    { input: "[10,9,2,5,3,7,101,18]", output: "4" },
  ],
  constraints: ["1 ≤ nums.length ≤ 2500"],
  starterCode: {
    javascript: "function lengthOfLIS(nums) {}",
    python: "def lengthOfLIS(nums): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},
"edit-distance": {
  id: "edit-distance",
  title: "Edit Distance",
  difficulty: "Hard",
  category: "DP",
  description: {
    text: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
    notes: ["Operations allowed: insert, delete, replace."],
  },
  examples: [
    { input: 'word1 = "horse", word2 = "ros"', output: "3" },
  ],
  constraints: ["1 ≤ word1.length, word2.length ≤ 500"],
  starterCode: {
    javascript: "function minDistance(word1, word2) {}",
    python: "def minDistance(word1, word2): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"n-queens": {
  id: "n-queens",
  title: "N-Queens",
  difficulty: "Hard",
  category: "Backtracking",
  description: {
    text: "Place n queens on an n×n chessboard such that no two queens attack each other.",
    notes: ["Return all distinct solutions."],
  },
  examples: [
    { input: "n = 4", output: "[[.Q.., ...Q, Q..., ..Q.]]" },
  ],
  constraints: ["1 ≤ n ≤ 9"],
  starterCode: {
    javascript: "function solveNQueens(n) {}",
    python: "def solveNQueens(n): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"subsets": {
  id: "subsets",
  title: "Subsets",
  difficulty: "Medium",
  category: "Backtracking",
  description: {
    text: "Return all possible subsets of the given integer array.",
    notes: ["The power set contains 2^n subsets."],
  },
  examples: [
    { input: "[1,2,3]", output: "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]" },
  ],
  constraints: ["1 ≤ nums.length ≤ 10"],
  starterCode: {
    javascript: "function subsets(nums) {}",
    python: "def subsets(nums): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"permutations": {
  id: "permutations",
  title: "Permutations",
  difficulty: "Medium",
  category: "Backtracking",
  description: {
    text: "Return all possible permutations of the given array.",
    notes: ["Each number appears exactly once in each permutation."],
  },
  examples: [
    { input: "[1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3]]" },
  ],
  constraints: ["1 ≤ nums.length ≤ 6"],
  starterCode: {
    javascript: "function permute(nums) {}",
    python: "def permute(nums): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"kth-largest-element": {
  id: "kth-largest-element",
  title: "Kth Largest Element in an Array",
  difficulty: "Medium",
  category: "Heap",
  description: {
    text: "Return the kth largest element in the array.",
    notes: ["Solve using Heap or QuickSelect."],
  },
  examples: [
    { input: "nums = [3,2,1,5,6,4], k = 2", output: "5" },
  ],
  constraints: ["1 ≤ k ≤ nums.length ≤ 10⁵"],
  starterCode: {
    javascript: "function findKthLargest(nums, k) {}",
    python: "def findKthLargest(nums, k): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"top-k-frequent-elements": {
  id: "top-k-frequent-elements",
  title: "Top K Frequent Elements",
  difficulty: "Medium",
  category: "Heap",
  description: {
    text: "Return the k most frequent elements.",
    notes: ["Use HashMap + Min Heap or Bucket Sort."],
  },
  examples: [
    { input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]" },
  ],
  constraints: ["1 ≤ nums.length ≤ 10⁵"],
  starterCode: {
    javascript: "function topKFrequent(nums, k) {}",
    python: "def topKFrequent(nums, k): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"implement-trie": {
  id: "implement-trie",
  title: "Implement Trie (Prefix Tree)",
  difficulty: "Medium",
  category: "Trie",
  description: {
    text: "Implement a Trie with insert, search, and startsWith functions.",
    notes: ["Used for fast prefix-based searches."],
  },
  examples: [
    { input: 'insert("apple"), search("apple")', output: "true" },
  ],
  constraints: ["1 ≤ word.length ≤ 2000"],
  starterCode: {
    javascript: "class Trie {}",
    python: "class Trie:",
    java: "class Trie {}",
  },
  expectedOutput: {},
},

"word-search": {
  id: "word-search",
  title: "Word Search",
  difficulty: "Medium",
  category: "Backtracking",
  description: {
    text: "Check if a given word exists in the board by navigating adjacent cells.",
    notes: ["Cells cannot be reused."],
  },
  examples: [
    { input: "board = [[A,B,C,E],[S,F,C,S]], word = 'ABCCED'", output: "true" },
  ],
  constraints: ["1 ≤ m,n ≤ 6"],
  starterCode: {
    javascript: "function exist(board, word) {}",
    python: "def exist(board, word): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"median-of-two-sorted-arrays": {
  id: "median-of-two-sorted-arrays",
  title: "Median of Two Sorted Arrays",
  difficulty: "Hard",
  category: "Binary Search",
  description: {
    text: "Find the median of two sorted arrays in O(log(min(n,m))).",
    notes: ["Use binary search partitioning."],
  },
  examples: [
    { input: "nums1 = [1,3], nums2 = [2]", output: "2.0" },
  ],
  constraints: ["Both arrays sorted"],
  starterCode: {
    javascript: "function findMedianSortedArrays(nums1, nums2) {}",
    python: "def findMedianSortedArrays(nums1, nums2): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"sliding-window-maximum": {
  id: "sliding-window-maximum",
  title: "Sliding Window Maximum",
  difficulty: "Hard",
  category: "Deque",
  description: {
    text: "Return the maximum element in every sliding window of size k.",
    notes: ["Use Deque for O(n) solution."],
  },
  examples: [
    { input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[3,3,5,5,6,7]" },
  ],
  constraints: ["1 ≤ nums.length ≤ 10⁵"],
  starterCode: {
    javascript: "function maxSlidingWindow(nums, k) {}",
    python: "def maxSlidingWindow(nums, k): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},
"first-missing-positive": {
  id: "first-missing-positive",
  title: "First Missing Positive",
  difficulty: "Hard",
  category: "Array",
  description: {
    text: "Find the smallest missing positive integer in O(n) time and constant space.",
    notes: ["Use index mapping and in-place bucket-style swap."],
  },
  examples: [
    { input: "[1,2,0]", output: "3" }
  ],
  constraints: ["1 ≤ nums.length ≤ 10⁵"],
  starterCode: {
    javascript: "function firstMissingPositive(nums) {}",
    python: "def firstMissingPositive(nums): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"trapping-rain-water": {
  id: "trapping-rain-water",
  title: "Trapping Rain Water",
  difficulty: "Hard",
  category: "Two Pointers",
  description: {
    text: "Compute total water trapped between bars.",
    notes: ["Two-pointer optimized solution runs in O(n)."],
  },
  examples: [
    { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }
  ],
  constraints: ["1 ≤ height.length ≤ 2 * 10⁴"],
  starterCode: {
    javascript: "function trap(height) {}",
    python: "def trap(height): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"split-array-largest-sum": {
  id: "split-array-largest-sum",
  title: "Split Array Largest Sum",
  difficulty: "Hard",
  category: "Binary Search",
  description: {
    text: "Split the array into m subarrays minimizing the maximum subarray sum.",
    notes: ["Binary search the answer + greedy feasibility check."],
  },
  examples: [
    { input: "nums=[7,2,5,10,8], m=2", output: "18" }
  ],
  constraints: ["1 ≤ m ≤ nums.length ≤ 1000"],
  starterCode: {
    javascript: "function splitArray(nums, m) {}",
    python: "def splitArray(nums, m): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"meeting-rooms": {
  id: "meeting-rooms",
  title: "Meeting Rooms",
  difficulty: "Easy",
  category: "Intervals",
  description: {
    text: "Given intervals, determine if a person can attend all meetings.",
    notes: ["Sort intervals by start time and check for overlap."],
  },
  examples: [
    { input: "[[0,30],[5,10],[15,20]]", output: "false" }
  ],
  constraints: ["1 ≤ intervals.length ≤ 10⁴"],
  starterCode: {
    javascript: "function canAttendMeetings(intervals) {}",
    python: "def canAttendMeetings(intervals): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"meeting-rooms-ii": {
  id: "meeting-rooms-ii",
  title: "Meeting Rooms II",
  difficulty: "Medium",
  category: "Heap",
  description: {
    text: "Return the minimum number of conference rooms required.",
    notes: ["Use min-heap to track earliest ending meeting."],
  },
  examples: [
    { input: "[[0,30],[5,10],[15,20]]", output: "2" }
  ],
  constraints: ["1 ≤ intervals.length ≤ 10⁴"],
  starterCode: {
    javascript: "function minMeetingRooms(intervals) {}",
    python: "def minMeetingRooms(intervals): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"insert-interval": {
  id: "insert-interval",
  title: "Insert Interval",
  difficulty: "Medium",
  category: "Intervals",
  description: {
    text: "Insert a new interval into a list of non-overlapping intervals.",
    notes: ["Merge overlapping intervals during the insertion."],
  },
  examples: [
    { input: "intervals=[[1,3],[6,9]], new=[2,5]", output: "[[1,5],[6,9]]" }
  ],
  constraints: ["1 ≤ intervals.length ≤ 10⁴"],
  starterCode: {
    javascript: "function insert(intervals, newInterval) {}",
    python: "def insert(intervals, newInterval): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"non-overlapping-intervals": {
  id: "non-overlapping-intervals",
  title: "Non Overlapping Intervals",
  difficulty: "Medium",
  category: "Greedy",
  description: {
    text: "Remove minimum intervals to eliminate overlap.",
    notes: ["Sort by end time (classic greedy)."],
  },
  examples: [
    { input: "[[1,2],[2,3],[3,4],[1,3]]", output: "1" }
  ],
  constraints: ["1 ≤ intervals.length ≤ 10⁵"],
  starterCode: {
    javascript: "function eraseOverlapIntervals(intervals) {}",
    python: "def eraseOverlapIntervals(intervals): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"gas-station": {
  id: "gas-station",
  title: "Gas Station",
  difficulty: "Medium",
  category: "Greedy",
  description: {
    text: "Find the starting station index for completing the circuit.",
    notes: ["Greedy: if total gas < cost, impossible."],
  },
  examples: [
    { input: "gas=[1,2,3,4,5], cost=[3,4,5,1,2]", output: "3" }
  ],
  constraints: ["1 ≤ gas.length ≤ 10⁵"],
  starterCode: {
    javascript: "function canCompleteCircuit(gas, cost) {}",
    python: "def canCompleteCircuit(gas, cost): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"jump-game": {
  id: "jump-game",
  title: "Jump Game",
  difficulty: "Medium",
  category: "Greedy",
  description: {
    text: "Return whether you can reach the last index.",
    notes: ["Track furthest reachable index."],
  },
  examples: [
    { input: "[2,3,1,1,4]", output: "true" }
  ],
  constraints: ["1 ≤ nums.length ≤ 10⁵"],
  starterCode: {
    javascript: "function canJump(nums) {}",
    python: "def canJump(nums): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"jump-game-ii": {
  id: "jump-game-ii",
  title: "Jump Game II",
  difficulty: "Hard",
  category: "Greedy",
  description: {
    text: "Minimum jumps to reach last index.",
    notes: ["Use BFS-like greedy layering with range expansion."],
  },
  examples: [
    { input: "[2,3,1,1,4]", output: "2" }
  ],
  constraints: ["1 ≤ nums.length ≤ 10⁵"],
  starterCode: {
    javascript: "function jump(nums) {}",
    python: "def jump(nums): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},
"task-scheduler": {
  id: "task-scheduler",
  title: "Task Scheduler",
  difficulty: "Medium",
  category: "Heap",
  description: {
    text: "Schedule tasks with cooldown period to minimize total time.",
    notes: ["Use greedy with frequency count."],
  },
  examples: [{ input: 'tasks=["A","A","A","B","B","B"], n=2', output: "8" }],
  constraints: ["1 ≤ tasks.length ≤ 10⁴"],
  starterCode: {
    javascript: "function leastInterval(tasks, n) {}",
    python: "def leastInterval(tasks, n): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"reorganize-string": {
  id: "reorganize-string",
  title: "Reorganize String",
  difficulty: "Medium",
  category: "Heap",
  description: {
    text: "Rearrange string so that no adjacent characters are equal.",
    notes: ["Max heap by frequency."],
  },
  examples: [{ input: '"aab"', output: '"aba"' }],
  constraints: ["1 ≤ s.length ≤ 500"],
  starterCode: {
    javascript: "function reorganizeString(s) {}",
    python: "def reorganizeString(s): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"zigzag-level-order": {
  id: "zigzag-level-order",
  title: "Binary Tree Zigzag Level Order",
  difficulty: "Medium",
  category: "Tree",
  description: {
    text: "Traverse binary tree in zigzag level order.",
    notes: ["Alternate direction at each level."],
  },
  examples: [{ input: "[3,9,20,null,null,15,7]", output: "[[3],[20,9],[15,7]]" }],
  constraints: ["1 ≤ nodes ≤ 2000"],
  starterCode: {
    javascript: "function zigzagLevelOrder(root) {}",
    python: "def zigzagLevelOrder(root): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"diameter-of-binary-tree": {
  id: "diameter-of-binary-tree",
  title: "Diameter of Binary Tree",
  difficulty: "Easy",
  category: "Tree",
  description: {
    text: "Find longest path between any two nodes.",
    notes: ["DFS for height + global max update."],
  },
  examples: [{ input: "[1,2,3,4,5]", output: "3" }],
  constraints: ["1 ≤ nodes ≤ 10⁴"],
  starterCode: {
    javascript: "function diameterOfBinaryTree(root) {}",
    python: "def diameterOfBinaryTree(root): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"count-good-nodes": {
  id: "count-good-nodes",
  title: "Count Good Nodes in Tree",
  difficulty: "Medium",
  category: "Tree",
  description: {
    text: "Count nodes that are not smaller than any node on the path from root.",
    notes: ["DFS with maxSoFar tracking."],
  },
  examples: [{ input: "[3,1,4,3,null,1,5]", output: "4" }],
  constraints: ["1 ≤ nodes ≤ 10⁴"],
  starterCode: {
    javascript: "function goodNodes(root) {}",
    python: "def goodNodes(root): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"flatten-binary-tree": {
  id: "flatten-binary-tree",
  title: "Flatten Binary Tree to Linked List",
  difficulty: "Medium",
  category: "Tree",
  description: {
    text: "Flatten tree into a linked list using preorder traversal.",
    notes: ["Modify tree in-place."],
  },
  examples: [{ input: "[1,2,5,3,4,null,6]", output: "[1,null,2,null,3,null,4,null,5,null,6]" }],
  constraints: ["1 ≤ nodes ≤ 2000"],
  starterCode: {
    javascript: "function flatten(root) {}",
    python: "def flatten(root): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"max-area-of-island": {
  id: "max-area-of-island",
  title: "Max Area of Island",
  difficulty: "Medium",
  category: "Graph",
  description: {
    text: "Find the maximum island area in a grid.",
    notes: ["DFS flood fill."],
  },
  examples: [{ input: "[[0,0,1,0],[1,1,1,0]]", output: "4" }],
  constraints: ["1 ≤ rows, cols ≤ 50"],
  starterCode: {
    javascript: "function maxAreaOfIsland(grid) {}",
    python: "def maxAreaOfIsland(grid): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"pacific-atlantic-water-flow": {
  id: "pacific-atlantic-water-flow",
  title: "Pacific Atlantic Water Flow",
  difficulty: "Medium",
  category: "Graph",
  description: {
    text: "Find all cells that flow to both oceans.",
    notes: ["Reverse DFS from borders."],
  },
  examples: [{ input: "heights matrix", output: "cells list" }],
  constraints: ["1 ≤ m,n ≤ 200"],
  starterCode: {
    javascript: "function pacificAtlantic(heights) {}",
    python: "def pacificAtlantic(heights): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"shortest-bridge": {
  id: "shortest-bridge",
  title: "Shortest Bridge",
  difficulty: "Medium",
  category: "Graph",
  description: {
    text: "Find minimum flips to connect two islands.",
    notes: ["DFS + multi-source BFS."],
  },
  examples: [{ input: "[[0,1],[1,0]]", output: "1" }],
  constraints: ["2 ≤ n ≤ 100"],
  starterCode: {
    javascript: "function shortestBridge(grid) {}",
    python: "def shortestBridge(grid): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"critical-connections": {
  id: "critical-connections",
  title: "Critical Connections",
  difficulty: "Hard",
  category: "Graph",
  description: {
    text: "Find all bridges in a network.",
    notes: ["Tarjan's Bridge Algorithm."],
  },
  examples: [{ input: "n=4, connections=[[0,1],[1,2],[2,0],[1,3]]", output: "[[1,3]]" }],
  constraints: ["1 ≤ n ≤ 10⁵"],
  starterCode: {
    javascript: "function criticalConnections(n, connections) {}",
    python: "def criticalConnections(n, connections): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"wildcard-matching": {
  id: "wildcard-matching",
  title: "Wildcard Matching",
  difficulty: "Hard",
  category: "DP",
  description: {
    text: "Match string with wildcard pattern.",
    notes: ["DP with '*' and '?' transitions."],
  },
  examples: [{ input: 's="adceb", p="*a*b"', output: "true" }],
  constraints: ["1 ≤ s,p ≤ 2000"],
  starterCode: {
    javascript: "function isMatch(s, p) {}",
    python: "def isMatch(s, p): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"regular-expression-matching": {
  id: "regular-expression-matching",
  title: "Regular Expression Matching",
  difficulty: "Hard",
  category: "DP",
  description: {
    text: "Implement regex matcher for '.' and '*'.",
    notes: ["Classic 2D DP."],
  },
  examples: [{ input: 's="aab", p="c*a*b"', output: "true" }],
  constraints: ["1 ≤ s,p ≤ 2000"],
  starterCode: {
    javascript: "function isMatch(s, p) {}",
    python: "def isMatch(s, p): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"distinct-subsequences": {
  id: "distinct-subsequences",
  title: "Distinct Subsequences",
  difficulty: "Hard",
  category: "DP",
  description: {
    text: "Count distinct subsequences of s that equal t.",
    notes: ["2D DP counting paths."],
  },
  examples: [{ input: 's="rabbbit", t="rabbit"', output: "3" }],
  constraints: ["1 ≤ s,t ≤ 1000"],
  starterCode: {
    javascript: "function numDistinct(s, t) {}",
    python: "def numDistinct(s, t): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"maximum-product-subarray": {
  id: "maximum-product-subarray",
  title: "Maximum Product Subarray",
  difficulty: "Medium",
  category: "DP",
  description: {
    text: "Find maximum product of a subarray.",
    notes: ["Track min and max due to negatives."],
  },
  examples: [{ input: "[2,3,-2,4]", output: "6" }],
  constraints: ["1 ≤ nums.length ≤ 10⁴"],
  starterCode: {
    javascript: "function maxProduct(nums) {}",
    python: "def maxProduct(nums): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"partition-equal-subset": {
  id: "partition-equal-subset",
  title: "Partition Equal Subset Sum",
  difficulty: "Medium",
  category: "DP",
  description: {
    text: "Split array into two subsets with equal sum.",
    notes: ["0/1 Knapsack DP."],
  },
  examples: [{ input: "[1,5,11,5]", output: "true" }],
  constraints: ["1 ≤ nums.length ≤ 200"],
  starterCode: {
    javascript: "function canPartition(nums) {}",
    python: "def canPartition(nums): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"combination-sum": {
  id: "combination-sum",
  title: "Combination Sum",
  difficulty: "Medium",
  category: "Backtracking",
  description: {
    text: "Find all combinations that sum to target.",
    notes: ["Unlimited reuse allowed."],
  },
  examples: [{ input: "candidates=[2,3,6,7], target=7", output: "[[2,2,3],[7]]" }],
  constraints: ["1 ≤ target ≤ 40"],
  starterCode: {
    javascript: "function combinationSum(candidates, target) {}",
    python: "def combinationSum(candidates, target): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"combination-sum-ii": {
  id: "combination-sum-ii",
  title: "Combination Sum II",
  difficulty: "Medium",
  category: "Backtracking",
  description: {
    text: "Each number can be used only once.",
    notes: ["Skip duplicates."],
  },
  examples: [{ input: "candidates=[10,1,2,7,6,1,5], target=8", output: "valid combinations" }],
  constraints: ["1 ≤ candidates.length ≤ 100"],
  starterCode: {
    javascript: "function combinationSum2(candidates, target) {}",
    python: "def combinationSum2(candidates, target): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"palindrome-partitioning": {
  id: "palindrome-partitioning",
  title: "Palindrome Partitioning",
  difficulty: "Medium",
  category: "Backtracking",
  description: {
    text: "Partition string into all palindromic substrings.",
    notes: ["DFS with palindrome check."],
  },
  examples: [{ input: '"aab"', output: '[["a","a","b"],["aa","b"]]' }],
  constraints: ["1 ≤ s.length ≤ 16"],
  starterCode: {
    javascript: "function partition(s) {}",
    python: "def partition(s): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},

"find-median-from-data-stream": {
  id: "find-median-from-data-stream",
  title: "Find Median from Data Stream",
  difficulty: "Hard",
  category: "Heap",
  description: {
    text: "Design a structure that supports streaming median.",
    notes: ["Two heaps technique."],
  },
  examples: [{ input: "addNum(1), addNum(2), findMedian()", output: "1.5" }],
  constraints: ["1 ≤ operations ≤ 10⁵"],
  starterCode: {
    javascript: "class MedianFinder {}",
    python: "class MedianFinder: pass",
    java: "class MedianFinder {}",
  },
  expectedOutput: {},
},

"k-closest-points": {
  id: "k-closest-points",
  title: "K Closest Points to Origin",
  difficulty: "Medium",
  category: "Heap",
  description: {
    text: "Find k nearest points to origin.",
    notes: ["Max heap of size k."],
  },
  examples: [{ input: "points=[[1,3],[-2,2]], k=1", output: "[[-2,2]]" }],
  constraints: ["1 ≤ k ≤ points.length ≤ 10⁴"],
  starterCode: {
    javascript: "function kClosest(points, k) {}",
    python: "def kClosest(points, k): pass",
    java: "class Solution {}",
  },
  expectedOutput: {},
},
"design-twitter": {
  id: "design-twitter",
  title: "Design Twitter",
  difficulty: "Hard",
  category: "Design",
  description: { text: "Design a simplified Twitter system.", notes: ["Follow, unfollow, post, feed."] },
  examples: [{ input: "postTweet(1,5)", output: "[5]" }],
  constraints: ["1 ≤ operations ≤ 10⁵"],
  starterCode: { javascript: "class Twitter {}", python: "class Twitter: pass", java: "class Twitter {}" },
  expectedOutput: {},
},

"design-underground-system": {
  id: "design-underground-system",
  title: "Design Underground System",
  difficulty: "Medium",
  category: "Design",
  description: { text: "Track average travel time.", notes: ["Use hash maps."] },
  examples: [{ input: "checkIn, checkOut", output: "avgTime" }],
  constraints: ["1 ≤ trips ≤ 10⁵"],
  starterCode: { javascript: "class UndergroundSystem {}", python: "class UndergroundSystem: pass", java: "class UndergroundSystem {}" },
  expectedOutput: {},
},

"decode-ways": {
  id: "decode-ways",
  title: "Decode Ways",
  difficulty: "Medium",
  category: "DP",
  description: { text: "Decode numeric string into letters.", notes: ["DP on string."] },
  examples: [{ input: '"226"', output: "3" }],
  constraints: ["1 ≤ s.length ≤ 100"],
  starterCode: { javascript: "function numDecodings(s) {}", python: "def numDecodings(s): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"restore-ip-addresses": {
  id: "restore-ip-addresses",
  title: "Restore IP Addresses",
  difficulty: "Medium",
  category: "Backtracking",
  description: { text: "Generate all valid IPs.", notes: ["4-level DFS."] },
  examples: [{ input: '"25525511135"', output: "valid IPs" }],
  constraints: ["1 ≤ s.length ≤ 12"],
  starterCode: { javascript: "function restoreIpAddresses(s) {}", python: "def restoreIpAddresses(s): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"alien-dictionary": {
  id: "alien-dictionary",
  title: "Alien Dictionary",
  difficulty: "Hard",
  category: "Graph",
  description: { text: "Determine alien character order.", notes: ["Topological sort."] },
  examples: [{ input: '["wrt","wrf","er","ett","rftt"]', output: '"wertf"' }],
  constraints: ["1 ≤ words ≤ 100"],
  starterCode: { javascript: "function alienOrder(words) {}", python: "def alienOrder(words): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"word-ladder": {
  id: "word-ladder",
  title: "Word Ladder",
  difficulty: "Hard",
  category: "Graph",
  description: { text: "Transform word using BFS.", notes: ["Bidirectional BFS optimal."] },
  examples: [{ input: 'begin="hit", end="cog"', output: "5" }],
  constraints: ["1 ≤ wordLen ≤ 10"],
  starterCode: { javascript: "function ladderLength(begin, end, list) {}", python: "def ladderLength(begin, end, list): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"topological-sort": {
  id: "topological-sort",
  title: "Topological Sort",
  difficulty: "Medium",
  category: "Graph",
  description: { text: "Return topo order of DAG.", notes: ["Kahn’s algorithm."] },
  examples: [{ input: "V=6", output: "order" }],
  constraints: ["1 ≤ V ≤ 10⁵"],
  starterCode: { javascript: "function topoSort(V, edges) {}", python: "def topoSort(V, edges): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"accounts-merge": {
  id: "accounts-merge",
  title: "Accounts Merge",
  difficulty: "Medium",
  category: "Graph",
  description: { text: "Merge accounts by email.", notes: ["Union-Find."] },
  examples: [{ input: "accounts list", output: "merged accounts" }],
  constraints: ["1 ≤ accounts ≤ 1000"],
  starterCode: { javascript: "function accountsMerge(accounts) {}", python: "def accountsMerge(accounts): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"evaluate-reverse-polish-notation": {
  id: "evaluate-reverse-polish-notation",
  title: "Evaluate RPN",
  difficulty: "Medium",
  category: "Stack",
  description: { text: "Evaluate postfix expression.", notes: ["Stack operations."] },
  examples: [{ input: '["2","1","+","3","*"]', output: "9" }],
  constraints: ["1 ≤ tokens ≤ 10⁴"],
  starterCode: { javascript: "function evalRPN(tokens) {}", python: "def evalRPN(tokens): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"decode-string": {
  id: "decode-string",
  title: "Decode String",
  difficulty: "Medium",
  category: "Stack",
  description: { text: "Decode encoded string.", notes: ["Stack for repeat."] },
  examples: [{ input: '"3[a2[c]]"', output: '"accaccacc"' }],
  constraints: ["1 ≤ s.length ≤ 30"],
  starterCode: { javascript: "function decodeString(s) {}", python: "def decodeString(s): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"bitwise-and-of-numbers-range": {
  id: "bitwise-and-of-numbers-range",
  title: "Bitwise AND of Numbers Range",
  difficulty: "Medium",
  category: "Bit Manipulation",
  description: { text: "Bitwise AND between range.", notes: ["Shift until equal."] },
  examples: [{ input: "5 to 7", output: "4" }],
  constraints: ["0 ≤ m ≤ n ≤ 10⁹"],
  starterCode: { javascript: "function rangeBitwiseAnd(m,n) {}", python: "def rangeBitwiseAnd(m,n): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"sum-of-two-integers": {
  id: "sum-of-two-integers",
  title: "Sum of Two Integers",
  difficulty: "Medium",
  category: "Bit Manipulation",
  description: { text: "Add without using + or -.", notes: ["Bit carry trick."] },
  examples: [{ input: "1,2", output: "3" }],
  constraints: ["-1000 ≤ a,b ≤ 1000"],
  starterCode: { javascript: "function getSum(a,b) {}", python: "def getSum(a,b): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"counting-bits": {
  id: "counting-bits",
  title: "Counting Bits",
  difficulty: "Easy",
  category: "DP",
  description: { text: "Count set bits for every number.", notes: ["DP using i & (i-1)."] },
  examples: [{ input: "5", output: "[0,1,1,2,1,2]" }],
  constraints: ["0 ≤ n ≤ 10⁵"],
  starterCode: { javascript: "function countBits(n) {}", python: "def countBits(n): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"hamming-distance": {
  id: "hamming-distance",
  title: "Hamming Distance",
  difficulty: "Easy",
  category: "Bit Manipulation",
  description: { text: "Count differing bits.", notes: ["XOR + count 1s."] },
  examples: [{ input: "1,4", output: "2" }],
  constraints: ["0 ≤ x,y ≤ 10⁹"],
  starterCode: { javascript: "function hammingDistance(x,y) {}", python: "def hammingDistance(x,y): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"subsets-ii": {
  id: "subsets-ii",
  title: "Subsets II",
  difficulty: "Medium",
  category: "Backtracking",
  description: { text: "Subsets with duplicates.", notes: ["Sort and skip duplicates."] },
  examples: [{ input: "[1,2,2]", output: "all subsets" }],
  constraints: ["1 ≤ nums ≤ 10"],
  starterCode: { javascript: "function subsetsWithDup(nums) {}", python: "def subsetsWithDup(nums): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"minimum-window-substring": {
  id: "minimum-window-substring",
  title: "Minimum Window Substring",
  difficulty: "Hard",
  category: "Sliding Window",
  description: { text: "Smallest window containing target.", notes: ["Two pointer shrink-expand."] },
  examples: [{ input: '"ADOBECODEBANC","ABC"', output: '"BANC"' }],
  constraints: ["1 ≤ s,t ≤ 10⁵"],
  starterCode: { javascript: "function minWindow(s,t) {}", python: "def minWindow(s,t): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"longest-palindromic-substring": {
  id: "longest-palindromic-substring",
  title: "Longest Palindromic Substring",
  difficulty: "Medium",
  category: "DP",
  description: { text: "Find longest palindromic substring.", notes: ["DP or expand center."] },
  examples: [{ input: '"babad"', output: '"bab"' }],
  constraints: ["1 ≤ s ≤ 1000"],
  starterCode: { javascript: "function longestPalindrome(s) {}", python: "def longestPalindrome(s): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"group-anagrams": {
  id: "group-anagrams",
  title: "Group Anagrams",
  difficulty: "Medium",
  category: "Hash Table",
  description: { text: "Group words by letter frequency.", notes: ["Sort or freq key."] },
  examples: [{ input: '["eat","tea","tan"]', output: "groups" }],
  constraints: ["1 ≤ strs ≤ 10000"],
  starterCode: { javascript: "function groupAnagrams(strs) {}", python: "def groupAnagrams(strs): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"partition-labels": {
  id: "partition-labels",
  title: "Partition Labels",
  difficulty: "Medium",
  category: "Greedy",
  description: { text: "Partition string by last appearance.", notes: ["Track max index."] },
  examples: [{ input: '"ababcbacadefegdehijhklij"', output: "[9,7,8]" }],
  constraints: ["1 ≤ s ≤ 500"],
  starterCode: { javascript: "function partitionLabels(s) {}", python: "def partitionLabels(s): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"search-a-2d-matrix": {
  id: "search-a-2d-matrix",
  title: "Search a 2D Matrix",
  difficulty: "Medium",
  category: "Binary Search",
  description: { text: "Search sorted matrix.", notes: ["Flattened binary search."] },
  examples: [{ input: "matrix, target", output: "true/false" }],
  constraints: ["1 ≤ m,n ≤ 100"],
  starterCode: { javascript: "function searchMatrix(matrix,target) {}", python: "def searchMatrix(matrix,target): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"rotate-array": {
  id: "rotate-array",
  title: "Rotate Array",
  difficulty: "Medium",
  category: "Array",
  description: { text: "Rotate by k steps.", notes: ["Reverse trick."] },
  examples: [{ input: "[1,2,3,4,5], k=2", output: "[4,5,1,2,3]" }],
  constraints: ["1 ≤ nums ≤ 10⁵"],
  starterCode: { javascript: "function rotate(nums,k) {}", python: "def rotate(nums,k): pass", java: "class Solution {}" },
  expectedOutput: {},
},

"set-matrix-zeroes": {
  id: "set-matrix-zeroes",
  title: "Set Matrix Zeroes",
  difficulty: "Medium",
  category: "Matrix",
  description: { text: "Set rows and cols to zero.", notes: ["Use first row/column."] },
  examples: [{ input: "[[1,1,1],[1,0,1]]", output: "zeroed matrix" }],
  constraints: ["1 ≤ m,n ≤ 200"],
  starterCode: { javascript: "function setZeroes(matrix) {}", python: "def setZeroes(matrix): pass", java: "class Solution {}" },
  expectedOutput: {},
},



};

// ================= HELPER FUNCTION =================

function newProblem(title, difficulty, category) {
  const id = title.toLowerCase().replace(/[^a-z]+/g, "-");
  return {
    id,
    title,
    difficulty,
    category,
    description: {
      text: `Solve the problem: ${title}`,
      notes: [],
    },
    examples: [],
    constraints: [],
    starterCode: {
      javascript: `function ${camel(title)}() {}`,
      python: `def ${snake(title)}(): pass`,
      java: `class Solution {}`,
    },
    expectedOutput: {},
  };
}

function camel(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (w, i) =>
    i === 0 ? w.toLowerCase() : w.toUpperCase()
  ).replace(/\s+/g, "");
}

function snake(str) {
  return str.toLowerCase().replace(/\s+/g, "_");
}

// ================= LANGUAGE CONFIG =================

export const LANGUAGE_CONFIG = {
  javascript: { name: "JavaScript", icon: "/javascript.png", monacoLang: "javascript" },
  python: { name: "Python", icon: "/python.png", monacoLang: "python" },
  java: { name: "Java", icon: "/java.png", monacoLang: "java" },
};
