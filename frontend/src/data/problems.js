export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

    "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
    ],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
}`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
      notes: [],
    },
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
      { input: 's = "rat", t = "car"', output: "false" },
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 5 * 10⁴",
      "s and t consist of lowercase English letters",
    ],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
}`,
      python: `def isAnagram(s, t):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of strings strs, group the anagrams together.",
      notes: ["You can return the answer in any order."],
    },
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
      },
    ],
    constraints: [
      "1 ≤ strs.length ≤ 10⁴",
      "0 ≤ strs[i].length ≤ 100",
    ],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Write your solution here
}`,
      python: `def groupAnagrams(strs):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: 'Grouped anagrams array',
      python: 'Grouped anagrams list',
      java: 'Grouped anagrams list',
    },
  },

  "top-k-frequent-elements": {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    category: "Array • Heap",
    description: {
      text: "Given an integer array nums and an integer k, return the k most frequent elements.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "k is in the range [1, number of unique elements]",
    ],
    starterCode: {
      javascript: `function topKFrequent(nums, k) {
  // Write your solution here
}`,
      python: `def topKFrequent(nums, k):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2]",
      python: "[1, 2]",
      java: "[1, 2]",
    },
  },

  "longest-consecutive-sequence": {
    id: "longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    difficulty: "Medium",
    category: "Array • Hash Set",
    description: {
      text: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
      notes: ["You must write an algorithm that runs in O(n) time."],
    },
    examples: [
      {
        input: "nums = [100,4,200,1,3,2]",
        output: "4",
      },
    ],
    constraints: [
      "0 ≤ nums.length ≤ 10⁵",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
    ],
    starterCode: {
      javascript: `function longestConsecutive(nums) {
  // Write your solution here
}`,
      python: `def longestConsecutive(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int longestConsecutive(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴"],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
}`,
      python: `def isValid(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Binary Search",
    description: {
      text: "Given an array of integers nums sorted in ascending order, and an integer target, write a function to search target in nums.",
      notes: ["If target exists, return its index. Otherwise, return -1."],
    },
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
}`,
      python: `def search(nums, target):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
    },
  },
  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Sliding Window",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
      notes: ["Return the maximum profit you can achieve from this transaction."],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6).",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No transactions are done since prices only decrease.",
      },
      {
        input: "prices = [1,2]",
        output: "1",
      },
    ],
    constraints: [
      "1 ≤ prices.length ≤ 10⁵",
      "0 ≤ prices[i] ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
}`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0\n1",
      python: "5\n0\n1",
      java: "5\n0\n1",
    },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [],
    },
    examples: [
      { input: 's = "abcabcbb"', output: "3", explanation: "The answer is \"abc\"." },
      { input: 's = "bbbbb"', output: "1", explanation: "The answer is \"b\"." },
      { input: 's = "pwwkew"', output: "3", explanation: "The answer is \"wke\"." },
    ],
    constraints: ["0 ≤ s.length ≤ 5 * 10⁴"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
    },
  },

  "minimum-window-substring": {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    category: "String • Sliding Window",
    description: {
      text: "Given two strings s and t, return the minimum window substring of s such that every character in t is included in the window.",
      notes: ["If there is no such substring, return an empty string."],
    },
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' },
      { input: 's = "a", t = "a"', output: '"a"' },
      { input: 's = "a", t = "aa"', output: '""' },
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function minWindow(s, t) {
  // Write your solution here
}`,
      python: `def minWindow(s, t):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static String minWindow(String s, String t) {
        // Write your solution here
        return "";
    }
}`,
    },
    expectedOutput: {
      javascript: "BANC\na\n",
      python: "BANC\na\n",
      java: "BANC\na\n",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is the product of all the elements of nums except nums[i].",
      notes: ["You must write an algorithm that runs in O(n) time without using division."],
    },
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
      { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" },
      { input: "nums = [2,3]", output: "[3,2]" },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁵",
      "-30 ≤ nums[i] ≤ 30",
    ],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
}`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]\n[3,2]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[3, 2]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[3, 2]",
    },
  },
  "two-sum-ii-input-array-is-sorted": {
    id: "two-sum-ii-input-array-is-sorted",
    title: "Two Sum II – Input Array Is Sorted",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.",
      notes: [
        "Return the indices of the two numbers added by 1.",
        "You may not use the same element twice.",
      ],
    },
    examples: [
      { input: "numbers = [2,7,11,15], target = 9", output: "[1,2]" },
      { input: "numbers = [2,3,4], target = 6", output: "[1,3]" },
      { input: "numbers = [-1,0], target = -1", output: "[1,2]" },
    ],
    constraints: [
      "2 ≤ numbers.length ≤ 3 * 10⁴",
      "-1000 ≤ numbers[i] ≤ 1000",
    ],
    starterCode: {
      javascript: `function twoSum(numbers, target) {
  // Write your solution here
}`,
      python: `def twoSum(numbers, target):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int[] twoSum(int[] numbers, int target) {
        // Write your solution here
        return new int[0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2]\n[1,3]\n[1,2]",
      python: "[1, 2]\n[1, 3]\n[1, 2]",
      java: "[1, 2]\n[1, 3]\n[1, 2]",
    },
  },

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that they add up to zero.",
      notes: ["The solution set must not contain duplicate triplets."],
    },
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
      },
      {
        input: "nums = [0,0,0]",
        output: "[[0,0,0]]",
      },
    ],
    constraints: [
      "3 ≤ nums.length ≤ 3000",
      "-10⁵ ≤ nums[i] ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
}`,
      python: `def threeSum(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: "Triplet list",
      python: "Triplet list",
      java: "Triplet list",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given n non-negative integers where each represents a point at coordinate (i, height[i]), find two lines that together with the x-axis form a container that contains the most water.",
      notes: ["You may not slant the container."],
    },
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "height = [1,1]", output: "1" },
      { input: "height = [4,3,2,1,4]", output: "16" },
    ],
    constraints: [
      "2 ≤ height.length ≤ 10⁵",
      "0 ≤ height[i] ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
}`,
      python: `def maxArea(height):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1\n16",
      python: "49\n1\n16",
      java: "49\n1\n16",
    },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers",
    description: {
      text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      notes: [],
    },
    examples: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
      { input: "height = [4,2,0,3,2,5]", output: "9" },
      { input: "height = [1,2,3]", output: "0" },
    ],
    constraints: [
      "1 ≤ height.length ≤ 2 * 10⁴",
      "0 ≤ height[i] ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here
}`,
      python: `def trap(height):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n9\n0",
      python: "6\n9\n0",
      java: "6\n9\n0",
    },
  },

  "valid-parenthesis-string": {
    id: "valid-parenthesis-string",
    title: "Valid Parenthesis String",
    difficulty: "Medium",
    category: "Greedy • Stack",
    description: {
      text: "Given a string s containing '(', ')' and '*', return true if the string can be valid. '*' can be treated as '(', ')' or an empty string.",
      notes: [],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "(*)"', output: "true" },
      { input: 's = "(*))"', output: "true" },
    ],
    constraints: [
      "1 ≤ s.length ≤ 100",
    ],
    starterCode: {
      javascript: `function checkValidString(s) {
  // Write your solution here
}`,
      python: `def checkValidString(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean checkValidString(String s) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\ntrue",
      python: "True\nTrue\nTrue",
      java: "true\ntrue\ntrue",
    },
  },
  "daily-temperatures": {
    id: "daily-temperatures",
    title: "Daily Temperatures",
    difficulty: "Medium",
    category: "Array • Monotonic Stack",
    description: {
      text: "Given an array of integers temperatures representing daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.",
      notes: ["If there is no future day for which this is possible, keep answer[i] == 0."],
    },
    examples: [
      {
        input: "temperatures = [73,74,75,71,69,72,76,73]",
        output: "[1,1,4,2,1,1,0,0]",
      },
      {
        input: "temperatures = [30,40,50,60]",
        output: "[1,1,1,0]",
      },
      {
        input: "temperatures = [30,60,90]",
        output: "[1,1,0]",
      },
    ],
    constraints: [
      "1 ≤ temperatures.length ≤ 10⁵",
      "30 ≤ temperatures[i] ≤ 100",
    ],
    starterCode: {
      javascript: `function dailyTemperatures(temperatures) {
  // Write your solution here
}`,
      python: `def dailyTemperatures(temperatures):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int[] dailyTemperatures(int[] temperatures) {
        // Write your solution here
        return new int[0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,4,2,1,1,0,0]\n[1,1,1,0]\n[1,1,0]",
      python: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]\n[1, 1, 0]",
      java: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]\n[1, 1, 0]",
    },
  },

  "largest-rectangle-in-histogram": {
    id: "largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    category: "Array • Monotonic Stack",
    description: {
      text: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
      notes: [],
    },
    examples: [
      { input: "heights = [2,1,5,6,2,3]", output: "10" },
      { input: "heights = [2,4]", output: "4" },
      { input: "heights = [1,1]", output: "2" },
    ],
    constraints: [
      "1 ≤ heights.length ≤ 10⁵",
      "0 ≤ heights[i] ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function largestRectangleArea(heights) {
  // Write your solution here
}`,
      python: `def largestRectangleArea(heights):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int largestRectangleArea(int[] heights) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "10\n4\n2",
      python: "10\n4\n2",
      java: "10\n4\n2",
    },
  },

  "merge-intervals": {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Intervals • Sorting",
    description: {
      text: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.",
      notes: ["Return an array of the non-overlapping intervals."],
    },
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
      {
        input: "intervals = [[1,4],[4,5]]",
        output: "[[1,5]]",
      },
      {
        input: "intervals = [[1,4]]",
        output: "[[1,4]]",
      },
    ],
    constraints: [
      "1 ≤ intervals.length ≤ 10⁴",
      "intervals[i].length == 2",
    ],
    starterCode: {
      javascript: `function merge(intervals) {
  // Write your solution here
}`,
      python: `def merge(intervals):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int[][] merge(int[][] intervals) {
        // Write your solution here
        return new int[0][0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[[1,6],[8,10],[15,18]]\n[[1,5]]\n[[1,4]]",
      python: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]\n[[1, 4]]",
      java: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]\n[[1, 4]]",
    },
  },

  "insert-interval": {
    id: "insert-interval",
    title: "Insert Interval",
    difficulty: "Medium",
    category: "Intervals",
    description: {
      text: "You are given an array of non-overlapping intervals sorted by their start time and a new interval. Insert the new interval and merge if necessary.",
      notes: [],
    },
    examples: [
      {
        input: "intervals = [[1,3],[6,9]], newInterval = [2,5]",
        output: "[[1,5],[6,9]]",
      },
      {
        input: "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]",
        output: "[[1,2],[3,10],[12,16]]",
      },
      {
        input: "intervals = [], newInterval = [5,7]",
        output: "[[5,7]]",
      },
    ],
    constraints: [
      "0 ≤ intervals.length ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function insert(intervals, newInterval) {
  // Write your solution here
}`,
      python: `def insert(intervals, newInterval):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int[][] insert(int[][] intervals, int[] newInterval) {
        // Write your solution here
        return new int[0][0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[[1,5],[6,9]]\n[[1,2],[3,10],[12,16]]\n[[5,7]]",
      python: "[[1, 5], [6, 9]]\n[[1, 2], [3, 10], [12, 16]]\n[[5, 7]]",
      java: "[[1, 5], [6, 9]]\n[[1, 2], [3, 10], [12, 16]]\n[[5, 7]]",
    },
  },

  "reverse-linked-list": {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List",
    description: {
      text: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
      notes: [],
    },
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "head = [1,2]", output: "[2,1]" },
      { input: "head = []", output: "[]" },
    ],
    constraints: [
      "0 ≤ number of nodes ≤ 5000",
    ],
    starterCode: {
      javascript: `function reverseList(head) {
  // Write your solution here
}`,
      python: `def reverseList(head):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static ListNode reverseList(ListNode head) {
        // Write your solution here
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "[5,4,3,2,1]\n[2,1]\n[]",
      python: "[5, 4, 3, 2, 1]\n[2, 1]\n[]",
      java: "[5, 4, 3, 2, 1]\n[2, 1]\n[]",
    },
  },
  "linked-list-cycle": {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    difficulty: "Easy",
    category: "Linked List • Two Pointers",
    description: {
      text: "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
      notes: ["Use O(1) extra space if possible."],
    },
    examples: [
      { input: "head = [3,2,0,-4], pos = 1", output: "true" },
      { input: "head = [1,2], pos = 0", output: "true" },
      { input: "head = [1], pos = -1", output: "false" },
    ],
    constraints: [
      "0 ≤ number of nodes ≤ 10⁴",
      "-10⁵ ≤ Node.val ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function hasCycle(head) {
  // Write your solution here
}`,
      python: `def hasCycle(head):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean hasCycle(ListNode head) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List",
    description: {
      text: "Merge two sorted linked lists and return it as a new sorted list.",
      notes: [],
    },
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = []", output: "[]" },
      { input: "list1 = [], list2 = [0]", output: "[0]" },
    ],
    constraints: [
      "0 ≤ number of nodes ≤ 50",
    ],
    starterCode: {
      javascript: `function mergeTwoLists(list1, list2) {
  // Write your solution here
}`,
      python: `def mergeTwoLists(list1, list2):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Write your solution here
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4]\n[]\n[0]",
      python: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
      java: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
    },
  },

  "reorder-list": {
    id: "reorder-list",
    title: "Reorder List",
    difficulty: "Medium",
    category: "Linked List",
    description: {
      text: "Given a singly linked list L0 → L1 → … → Ln-1 → Ln, reorder it to L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …",
      notes: ["Do not return anything, modify the list in-place."],
    },
    examples: [
      { input: "head = [1,2,3,4]", output: "[1,4,2,3]" },
      { input: "head = [1,2,3,4,5]", output: "[1,5,2,4,3]" },
      { input: "head = [1]", output: "[1]" },
    ],
    constraints: [
      "1 ≤ number of nodes ≤ 5 * 10⁴",
    ],
    starterCode: {
      javascript: `function reorderList(head) {
  // Write your solution here
}`,
      python: `def reorderList(head):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static void reorderList(ListNode head) {
        // Write your solution here
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,4,2,3]\n[1,5,2,4,3]\n[1]",
      python: "[1, 4, 2, 3]\n[1, 5, 2, 4, 3]\n[1]",
      java: "[1, 4, 2, 3]\n[1, 5, 2, 4, 3]\n[1]",
    },
  },

  "remove-nth-node-from-end-of-list": {
    id: "remove-nth-node-from-end-of-list",
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    category: "Linked List • Two Pointers",
    description: {
      text: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
      notes: [],
    },
    examples: [
      { input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" },
      { input: "head = [1], n = 1", output: "[]" },
      { input: "head = [1,2], n = 1", output: "[1]" },
    ],
    constraints: [
      "1 ≤ number of nodes ≤ 30",
    ],
    starterCode: {
      javascript: `function removeNthFromEnd(head, n) {
  // Write your solution here
}`,
      python: `def removeNthFromEnd(head, n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static ListNode removeNthFromEnd(ListNode head, int n) {
        // Write your solution here
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,3,5]\n[]\n[1]",
      python: "[1, 2, 3, 5]\n[]\n[1]",
      java: "[1, 2, 3, 5]\n[]\n[1]",
    },
  },

  "maximum-depth-of-binary-tree": {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Given the root of a binary tree, return its maximum depth.",
      notes: [],
    },
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "3" },
      { input: "root = [1,null,2]", output: "2" },
      { input: "root = []", output: "0" },
    ],
    constraints: [
      "0 ≤ number of nodes ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function maxDepth(root) {
  // Write your solution here
}`,
      python: `def maxDepth(root):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int maxDepth(TreeNode root) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n2\n0",
      python: "3\n2\n0",
      java: "3\n2\n0",
    },
  },
  "binary-tree-inorder-traversal": {
    id: "binary-tree-inorder-traversal",
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
      notes: ["Inorder traversal is left → root → right."],
    },
    examples: [
      { input: "root = [1,null,2,3]", output: "[1,3,2]" },
      { input: "root = []", output: "[]" },
      { input: "root = [1]", output: "[1]" },
    ],
    constraints: [
      "0 ≤ number of nodes ≤ 100",
    ],
    starterCode: {
      javascript: `function inorderTraversal(root) {
  // Write your solution here
}`,
      python: `def inorderTraversal(root):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static List<Integer> inorderTraversal(TreeNode root) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,3,2]\n[]\n[1]",
      python: "[1, 3, 2]\n[]\n[1]",
      java: "[1, 3, 2]\n[]\n[1]",
    },
  },

  "binary-tree-preorder-traversal": {
    id: "binary-tree-preorder-traversal",
    title: "Binary Tree Preorder Traversal",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Given the root of a binary tree, return the preorder traversal of its nodes' values.",
      notes: ["Preorder traversal is root → left → right."],
    },
    examples: [
      { input: "root = [1,null,2,3]", output: "[1,2,3]" },
      { input: "root = []", output: "[]" },
      { input: "root = [1]", output: "[1]" },
    ],
    constraints: [
      "0 ≤ number of nodes ≤ 100",
    ],
    starterCode: {
      javascript: `function preorderTraversal(root) {
  // Write your solution here
}`,
      python: `def preorderTraversal(root):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static List<Integer> preorderTraversal(TreeNode root) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,3]\n[]\n[1]",
      python: "[1, 2, 3]\n[]\n[1]",
      java: "[1, 2, 3]\n[]\n[1]",
    },
  },

  "binary-tree-postorder-traversal": {
    id: "binary-tree-postorder-traversal",
    title: "Binary Tree Postorder Traversal",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Given the root of a binary tree, return the postorder traversal of its nodes' values.",
      notes: ["Postorder traversal is left → right → root."],
    },
    examples: [
      { input: "root = [1,null,2,3]", output: "[3,2,1]" },
      { input: "root = []", output: "[]" },
      { input: "root = [1]", output: "[1]" },
    ],
    constraints: [
      "0 ≤ number of nodes ≤ 100",
    ],
    starterCode: {
      javascript: `function postorderTraversal(root) {
  // Write your solution here
}`,
      python: `def postorderTraversal(root):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static List<Integer> postorderTraversal(TreeNode root) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: "[3,2,1]\n[]\n[1]",
      python: "[3, 2, 1]\n[]\n[1]",
      java: "[3, 2, 1]\n[]\n[1]",
    },
  },

  "validate-binary-search-tree": {
    id: "validate-binary-search-tree",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    category: "Tree • DFS",
    description: {
      text: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
      notes: [
        "The left subtree must contain only nodes with keys less than the node’s key.",
        "The right subtree must contain only nodes with keys greater than the node’s key.",
      ],
    },
    examples: [
      { input: "root = [2,1,3]", output: "true" },
      { input: "root = [5,1,4,null,null,3,6]", output: "false" },
      { input: "root = [1,1]", output: "false" },
    ],
    constraints: [
      "1 ≤ number of nodes ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function isValidBST(root) {
  // Write your solution here
}`,
      python: `def isValidBST(root):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean isValidBST(TreeNode root) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
    },
  },

  "lowest-common-ancestor-of-a-binary-search-tree": {
    id: "lowest-common-ancestor-of-a-binary-search-tree",
    title: "Lowest Common Ancestor of a Binary Search Tree",
    difficulty: "Medium",
    category: "Tree • BST",
    description: {
      text: "Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.",
      notes: [],
    },
    examples: [
      {
        input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        output: "6",
      },
      {
        input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4",
        output: "2",
      },
      {
        input: "root = [2,1], p = 2, q = 1",
        output: "2",
      },
    ],
    constraints: [
      "2 ≤ number of nodes ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function lowestCommonAncestor(root, p, q) {
  // Write your solution here
}`,
      python: `def lowestCommonAncestor(root, p, q):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // Write your solution here
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n2\n2",
      python: "6\n2\n2",
      java: "6\n2\n2",
    },
  },
  "binary-tree-level-order-traversal": {
    id: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    category: "Tree • BFS",
    description: {
      text: "Given the root of a binary tree, return the level order traversal of its nodes' values.",
      notes: ["Level order traversal is breadth-first traversal."],
    },
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" },
      { input: "root = [1]", output: "[[1]]" },
      { input: "root = []", output: "[]" },
    ],
    constraints: ["0 ≤ number of nodes ≤ 2000"],
    starterCode: {
      javascript: `function levelOrder(root) {
  // Write your solution here
}`,
      python: `def levelOrder(root):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static List<List<Integer>> levelOrder(TreeNode root) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: "[[3],[9,20],[15,7]]\n[[1]]\n[]",
      python: "[[3], [9, 20], [15, 7]]\n[[1]]\n[]",
      java: "[[3], [9, 20], [15, 7]]\n[[1]]\n[]",
    },
  },

  "diameter-of-binary-tree": {
    id: "diameter-of-binary-tree",
    title: "Diameter of Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Given the root of a binary tree, return the length of the diameter of the tree.",
      notes: ["The diameter is the number of edges between any two nodes."],
    },
    examples: [
      { input: "root = [1,2,3,4,5]", output: "3" },
      { input: "root = [1,2]", output: "1" },
      { input: "root = [1]", output: "0" },
    ],
    constraints: ["1 ≤ number of nodes ≤ 10⁴"],
    starterCode: {
      javascript: `function diameterOfBinaryTree(root) {
  // Write your solution here
}`,
      python: `def diameterOfBinaryTree(root):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int diameterOfBinaryTree(TreeNode root) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n0",
      python: "3\n1\n0",
      java: "3\n1\n0",
    },
  },

  "balanced-binary-tree": {
    id: "balanced-binary-tree",
    title: "Balanced Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Given a binary tree, determine if it is height-balanced.",
      notes: ["A height-balanced tree is defined as one where the depths of the two subtrees never differ by more than one."],
    },
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "true" },
      { input: "root = [1,2,2,3,3,null,null,4,4]", output: "false" },
      { input: "root = []", output: "true" },
    ],
    constraints: ["0 ≤ number of nodes ≤ 5000"],
    starterCode: {
      javascript: `function isBalanced(root) {
  // Write your solution here
}`,
      python: `def isBalanced(root):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean isBalanced(TreeNode root) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "invert-binary-tree": {
    id: "invert-binary-tree",
    title: "Invert Binary Tree",
    difficulty: "Easy",
    category: "Tree",
    description: {
      text: "Given the root of a binary tree, invert the tree.",
      notes: [],
    },
    examples: [
      { input: "root = [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" },
      { input: "root = [2,1,3]", output: "[2,3,1]" },
      { input: "root = []", output: "[]" },
    ],
    constraints: ["0 ≤ number of nodes ≤ 100"],
    starterCode: {
      javascript: `function invertTree(root) {
  // Write your solution here
}`,
      python: `def invertTree(root):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static TreeNode invertTree(TreeNode root) {
        // Write your solution here
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "[4,7,2,9,6,3,1]\n[2,3,1]\n[]",
      python: "[4, 7, 2, 9, 6, 3, 1]\n[2, 3, 1]\n[]",
      java: "[4, 7, 2, 9, 6, 3, 1]\n[2, 3, 1]\n[]",
    },
  },

  "same-tree": {
    id: "same-tree",
    title: "Same Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Given the roots of two binary trees p and q, write a function to check if they are the same or not.",
      notes: ["Two trees are considered the same if they are structurally identical and the nodes have the same value."],
    },
    examples: [
      { input: "p = [1,2,3], q = [1,2,3]", output: "true" },
      { input: "p = [1,2], q = [1,null,2]", output: "false" },
      { input: "p = [1,2,1], q = [1,1,2]", output: "false" },
    ],
    constraints: ["0 ≤ number of nodes ≤ 100"],
    starterCode: {
      javascript: `function isSameTree(p, q) {
  // Write your solution here
}`,
      python: `def isSameTree(p, q):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean isSameTree(TreeNode p, TreeNode q) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
    },
  },
  "subtree-of-another-tree": {
    id: "subtree-of-another-tree",
    title: "Subtree of Another Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot.",
      notes: [],
    },
    examples: [
      {
        input: "root = [3,4,5,1,2], subRoot = [4,1,2]",
        output: "true",
      },
      {
        input: "root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]",
        output: "false",
      },
      {
        input: "root = [1,1], subRoot = [1]",
        output: "true",
      },
    ],
    constraints: [
      "0 ≤ number of nodes ≤ 2000",
    ],
    starterCode: {
      javascript: `function isSubtree(root, subRoot) {
  // Write your solution here
}`,
      python: `def isSubtree(root, subRoot):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean isSubtree(TreeNode root, TreeNode subRoot) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "construct-binary-tree-from-preorder-and-inorder-traversal": {
    id: "construct-binary-tree-from-preorder-and-inorder-traversal",
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    difficulty: "Medium",
    category: "Tree • DFS",
    description: {
      text: "Given two integer arrays preorder and inorder, construct and return the binary tree.",
      notes: ["All values are unique."],
    },
    examples: [
      {
        input: "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
        output: "[3,9,20,null,null,15,7]",
      },
      {
        input: "preorder = [-1], inorder = [-1]",
        output: "[-1]",
      },
      {
        input: "preorder = [1,2], inorder = [2,1]",
        output: "[1,2]",
      },
    ],
    constraints: [
      "1 ≤ preorder.length ≤ 3000",
    ],
    starterCode: {
      javascript: `function buildTree(preorder, inorder) {
  // Write your solution here
}`,
      python: `def buildTree(preorder, inorder):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static TreeNode buildTree(int[] preorder, int[] inorder) {
        // Write your solution here
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "[3,9,20,null,null,15,7]\n[-1]\n[1,2]",
      python: "[3, 9, 20, null, null, 15, 7]\n[-1]\n[1, 2]",
      java: "[3, 9, 20, null, null, 15, 7]\n[-1]\n[1, 2]",
    },
  },

  "kth-smallest-element-in-a-bst": {
    id: "kth-smallest-element-in-a-bst",
    title: "Kth Smallest Element in a BST",
    difficulty: "Medium",
    category: "Tree • BST",
    description: {
      text: "Given the root of a binary search tree and an integer k, return the kth smallest value.",
      notes: [],
    },
    examples: [
      { input: "root = [3,1,4,null,2], k = 1", output: "1" },
      { input: "root = [5,3,6,2,4,null,null,1], k = 3", output: "3" },
      { input: "root = [2,1,3], k = 2", output: "2" },
    ],
    constraints: [
      "1 ≤ k ≤ number of nodes",
    ],
    starterCode: {
      javascript: `function kthSmallest(root, k) {
  // Write your solution here
}`,
      python: `def kthSmallest(root, k):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int kthSmallest(TreeNode root, int k) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n3\n2",
      python: "1\n3\n2",
      java: "1\n3\n2",
    },
  },

  "binary-tree-right-side-view": {
    id: "binary-tree-right-side-view",
    title: "Binary Tree Right Side View",
    difficulty: "Medium",
    category: "Tree • BFS",
    description: {
      text: "Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
      notes: [],
    },
    examples: [
      { input: "root = [1,2,3,null,5,null,4]", output: "[1,3,4]" },
      { input: "root = [1,null,3]", output: "[1,3]" },
      { input: "root = []", output: "[]" },
    ],
    constraints: [
      "0 ≤ number of nodes ≤ 100",
    ],
    starterCode: {
      javascript: `function rightSideView(root) {
  // Write your solution here
}`,
      python: `def rightSideView(root):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static List<Integer> rightSideView(TreeNode root) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,3,4]\n[1,3]\n[]",
      python: "[1, 3, 4]\n[1, 3]\n[]",
      java: "[1, 3, 4]\n[1, 3]\n[]",
    },
  },

  "count-good-nodes-in-binary-tree": {
    id: "count-good-nodes-in-binary-tree",
    title: "Count Good Nodes in Binary Tree",
    difficulty: "Medium",
    category: "Tree • DFS",
    description: {
      text: "Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.",
      notes: [],
    },
    examples: [
      { input: "root = [3,1,4,3,null,1,5]", output: "4" },
      { input: "root = [3,3,null,4,2]", output: "3" },
      { input: "root = [1]", output: "1" },
    ],
    constraints: [
      "1 ≤ number of nodes ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function goodNodes(root) {
  // Write your solution here
}`,
      python: `def goodNodes(root):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int goodNodes(TreeNode root) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n3\n1",
      python: "4\n3\n1",
      java: "4\n3\n1",
    },
  },
  "number-of-islands": {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graph • DFS/BFS",
    description: {
      text: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
      notes: ["An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically."],
    },
    examples: [
      {
        input: `grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]`,
        output: "1",
      },
      {
        input: `grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]`,
        output: "3",
      },
      {
        input: `grid = [["0"]]`,
        output: "0",
      },
    ],
    constraints: [
      "1 ≤ m, n ≤ 300",
    ],
    starterCode: {
      javascript: `function numIslands(grid) {
  // Write your solution here
}`,
      python: `def numIslands(grid):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int numIslands(char[][] grid) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n3\n0",
      python: "1\n3\n0",
      java: "1\n3\n0",
    },
  },

  "max-area-of-island": {
    id: "max-area-of-island",
    title: "Max Area of Island",
    difficulty: "Medium",
    category: "Graph • DFS",
    description: {
      text: "Given a non-empty 2D array grid of 0's and 1's, return the maximum area of an island.",
      notes: ["An island is a group of 1's connected 4-directionally."],
    },
    examples: [
      {
        input: "grid = [[0,0,1,0,0],[0,1,1,1,0],[0,0,1,0,0]]",
        output: "5",
      },
      {
        input: "grid = [[0,0,0,0,0]]",
        output: "0",
      },
      {
        input: "grid = [[1]]",
        output: "1",
      },
    ],
    constraints: [
      "1 ≤ m, n ≤ 50",
    ],
    starterCode: {
      javascript: `function maxAreaOfIsland(grid) {
  // Write your solution here
}`,
      python: `def maxAreaOfIsland(grid):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int maxAreaOfIsland(int[][] grid) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0\n1",
      python: "5\n0\n1",
      java: "5\n0\n1",
    },
  },

  "clone-graph": {
    id: "clone-graph",
    title: "Clone Graph",
    difficulty: "Medium",
    category: "Graph • DFS/BFS",
    description: {
      text: "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.",
      notes: ["Each node contains a value and a list of its neighbors."],
    },
    examples: [
      { input: "adjList = [[2,4],[1,3],[2,4],[1,3]]", output: "Cloned graph" },
      { input: "adjList = [[]]", output: "Single node graph" },
      { input: "adjList = []", output: "Empty graph" },
    ],
    constraints: [
      "0 ≤ number of nodes ≤ 100",
    ],
    starterCode: {
      javascript: `function cloneGraph(node) {
  // Write your solution here
}`,
      python: `def cloneGraph(node):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static Node cloneGraph(Node node) {
        // Write your solution here
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "Graph clone\nSingle node\nEmpty",
      python: "Graph clone\nSingle node\nEmpty",
      java: "Graph clone\nSingle node\nEmpty",
    },
  },

  "rotting-oranges": {
    id: "rotting-oranges",
    title: "Rotting Oranges",
    difficulty: "Medium",
    category: "Graph • BFS",
    description: {
      text: "You are given an m x n grid where each cell can have one of three values: 0 empty, 1 fresh orange, 2 rotten orange. Every minute, fresh oranges adjacent to rotten ones become rotten.",
      notes: ["Return the minimum number of minutes until no fresh oranges remain, or -1 if impossible."],
    },
    examples: [
      {
        input: "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        output: "4",
      },
      {
        input: "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        output: "-1",
      },
      {
        input: "grid = [[0,2]]",
        output: "0",
      },
    ],
    constraints: [
      "1 ≤ m, n ≤ 10",
    ],
    starterCode: {
      javascript: `function orangesRotting(grid) {
  // Write your solution here
}`,
      python: `def orangesRotting(grid):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int orangesRotting(int[][] grid) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1\n0",
      python: "4\n-1\n0",
      java: "4\n-1\n0",
    },
  },

  "pacific-atlantic-water-flow": {
    id: "pacific-atlantic-water-flow",
    title: "Pacific Atlantic Water Flow",
    difficulty: "Medium",
    category: "Graph • DFS",
    description: {
      text: "Given an m x n matrix of heights, return all coordinates where water can flow to both the Pacific and Atlantic oceans.",
      notes: ["Water can flow from a cell to another with height less than or equal."],
    },
    examples: [
      {
        input: "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        output: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
      },
      {
        input: "heights = [[1]]",
        output: "[[0,0]]",
      },
      {
        input: "heights = [[1,2],[4,3]]",
        output: "[]",
      },
    ],
    constraints: [
      "1 ≤ m, n ≤ 200",
    ],
    starterCode: {
      javascript: `function pacificAtlantic(heights) {
  // Write your solution here
}`,
      python: `def pacificAtlantic(heights):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static List<List<Integer>> pacificAtlantic(int[][] heights) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: "Coordinates list\n[[0,0]]\n[]",
      python: "Coordinates list\n[[0, 0]]\n[]",
      java: "Coordinates list\n[[0, 0]]\n[]",
    },
  },
  "course-schedule": {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graph • Topological Sort",
    description: {
      text: "There are numCourses courses you have to take, labeled from 0 to numCourses - 1. Given prerequisites, return true if you can finish all courses.",
      notes: ["Prerequisites are pairs [a, b] meaning b must be taken before a."],
    },
    examples: [
      { input: "numCourses = 2, prerequisites = [[1,0]]", output: "true" },
      { input: "numCourses = 2, prerequisites = [[1,0],[0,1]]", output: "false" },
      { input: "numCourses = 1, prerequisites = []", output: "true" },
    ],
    constraints: ["1 ≤ numCourses ≤ 2000"],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {
  // Write your solution here
}`,
      python: `def canFinish(numCourses, prerequisites):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "course-schedule-ii": {
    id: "course-schedule-ii",
    title: "Course Schedule II",
    difficulty: "Medium",
    category: "Graph • Topological Sort",
    description: {
      text: "Return the ordering of courses you should take to finish all courses.",
      notes: ["If impossible, return an empty array."],
    },
    examples: [
      { input: "numCourses = 2, prerequisites = [[1,0]]", output: "[0,1]" },
      { input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]", output: "[0,1,2,3]" },
      { input: "numCourses = 1, prerequisites = []", output: "[0]" },
    ],
    constraints: ["1 ≤ numCourses ≤ 2000"],
    starterCode: {
      javascript: `function findOrder(numCourses, prerequisites) {
  // Write your solution here
}`,
      python: `def findOrder(numCourses, prerequisites):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int[] findOrder(int numCourses, int[][] prerequisites) {
        // Write your solution here
        return new int[0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[0,1,2,3]\n[0]",
      python: "[0, 1]\n[0, 1, 2, 3]\n[0]",
      java: "[0, 1]\n[0, 1, 2, 3]\n[0]",
    },
  },

  "graph-valid-tree": {
    id: "graph-valid-tree",
    title: "Graph Valid Tree",
    difficulty: "Medium",
    category: "Graph • Union Find",
    description: {
      text: "Given n nodes labeled from 0 to n-1 and edges, determine if the graph is a valid tree.",
      notes: ["A valid tree has exactly n-1 edges and is fully connected."],
    },
    examples: [
      { input: "n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]", output: "true" },
      { input: "n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]", output: "false" },
      { input: "n = 1, edges = []", output: "true" },
    ],
    constraints: ["1 ≤ n ≤ 2000"],
    starterCode: {
      javascript: `function validTree(n, edges) {
  // Write your solution here
}`,
      python: `def validTree(n, edges):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean validTree(int n, int[][] edges) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "redundant-connection": {
    id: "redundant-connection",
    title: "Redundant Connection",
    difficulty: "Medium",
    category: "Graph • Union Find",
    description: {
      text: "Given edges forming a graph that started as a tree, return the edge that creates a cycle.",
      notes: ["If multiple answers exist, return the last one."],
    },
    examples: [
      { input: "edges = [[1,2],[1,3],[2,3]]", output: "[2,3]" },
      { input: "edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]", output: "[1,4]" },
      { input: "edges = [[1,2],[2,3],[3,1]]", output: "[3,1]" },
    ],
    constraints: ["1 ≤ edges.length ≤ 1000"],
    starterCode: {
      javascript: `function findRedundantConnection(edges) {
  // Write your solution here
}`,
      python: `def findRedundantConnection(edges):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int[] findRedundantConnection(int[][] edges) {
        // Write your solution here
        return new int[0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[2,3]\n[1,4]\n[3,1]",
      python: "[2, 3]\n[1, 4]\n[3, 1]",
      java: "[2, 3]\n[1, 4]\n[3, 1]",
    },
  },

  "accounts-merge": {
    id: "accounts-merge",
    title: "Accounts Merge",
    difficulty: "Medium",
    category: "Graph • Union Find",
    description: {
      text: "Merge accounts that belong to the same person based on shared email addresses.",
      notes: ["Return merged accounts with sorted emails."],
    },
    examples: [
      { input: 'accounts = [["John","a@mail.com","b@mail.com"],["John","b@mail.com","c@mail.com"]]', output: "Merged John account" },
      { input: 'accounts = [["Mary","x@mail.com"]]', output: "Same account" },
      { input: 'accounts = [["A","a@mail.com"],["B","b@mail.com"]]', output: "Separate accounts" },
    ],
    constraints: ["1 ≤ accounts.length ≤ 1000"],
    starterCode: {
      javascript: `function accountsMerge(accounts) {
  // Write your solution here
}`,
      python: `def accountsMerge(accounts):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static List<List<String>> accountsMerge(List<List<String>> accounts) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: "Merged\nSame\nSeparate",
      python: "Merged\nSame\nSeparate",
      java: "Merged\nSame\nSeparate",
    },
  },

  "number-of-connected-components-in-an-undirected-graph": {
    id: "number-of-connected-components-in-an-undirected-graph",
    title: "Number of Connected Components in an Undirected Graph",
    difficulty: "Medium",
    category: "Graph • DFS",
    description: {
      text: "Given n nodes and edges, return the number of connected components.",
      notes: [],
    },
    examples: [
      { input: "n = 5, edges = [[0,1],[1,2],[3,4]]", output: "2" },
      { input: "n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]", output: "1" },
      { input: "n = 1, edges = []", output: "1" },
    ],
    constraints: ["1 ≤ n ≤ 2000"],
    starterCode: {
      javascript: `function countComponents(n, edges) {
  // Write your solution here
}`,
      python: `def countComponents(n, edges):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int countComponents(int n, int[][] edges) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n1\n1",
      python: "2\n1\n1",
      java: "2\n1\n1",
    },
  },

  "word-ladder": {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "Graph • BFS",
    description: {
      text: "Return the length of the shortest transformation sequence from beginWord to endWord.",
      notes: ["Only one letter can change at a time."],
    },
    examples: [
      { input: 'beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log","cog"]', output: "5" },
      { input: 'beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log"]', output: "0" },
      { input: 'beginWord="a", endWord="c", wordList=["a","b","c"]', output: "2" },
    ],
    constraints: ["1 ≤ wordList.length ≤ 5000"],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Write your solution here
}`,
      python: `def ladderLength(beginWord, endWord, wordList):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0\n2",
      python: "5\n0\n2",
      java: "5\n0\n2",
    },
  }
  "k-closest-points-to-origin": {
    id: "k-closest-points-to-origin",
    title: "K Closest Points to Origin",
    difficulty: "Medium",
    category: "Heap • Priority Queue",
    description: {
      text: "Given an array of points where points[i] = [xi, yi], return the k closest points to the origin (0,0).",
      notes: ["Distance is Euclidean distance squared."],
    },
    examples: [
      { input: "points = [[1,3],[-2,2]], k = 1", output: "[[-2,2]]" },
      { input: "points = [[3,3],[5,-1],[-2,4]], k = 2", output: "[[3,3],[-2,4]]" },
      { input: "points = [[0,1],[1,0]], k = 2", output: "[[0,1],[1,0]]" },
    ],
    constraints: ["1 ≤ points.length ≤ 10⁴"],
    starterCode: {
      javascript: `function kClosest(points, k) {
  // Write your solution here
}`,
      python: `def kClosest(points, k):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int[][] kClosest(int[][] points, int k) {
        // Write your solution here
        return new int[0][0];
    }
}`,
    },
    expectedOutput: {
      javascript: "Closest points\nClosest points\nClosest points",
      python: "Closest points\nClosest points\nClosest points",
      java: "Closest points\nClosest points\nClosest points",
    },
  },

  "top-k-frequent-words": {
    id: "top-k-frequent-words",
    title: "Top K Frequent Words",
    difficulty: "Medium",
    category: "Heap • Hash Table",
    description: {
      text: "Given an array of strings words and an integer k, return the k most frequent strings.",
      notes: ["Sort by frequency, then lexicographically."],
    },
    examples: [
      { input: 'words = ["i","love","leetcode","i","love","coding"], k = 2', output: '["i","love"]' },
      { input: 'words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4', output: '["the","is","sunny","day"]' },
      { input: 'words = ["a"], k = 1', output: '["a"]' },
    ],
    constraints: ["1 ≤ words.length ≤ 10⁵"],
    starterCode: {
      javascript: `function topKFrequent(words, k) {
  // Write your solution here
}`,
      python: `def topKFrequent(words, k):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static List<String> topKFrequent(String[] words, int k) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: '["i","love"]\n["the","is","sunny","day"]\n["a"]',
      python: '["i", "love"]\n["the", "is", "sunny", "day"]\n["a"]',
      java: "[i, love]\n[the, is, sunny, day]\n[a]",
    },
  },

  "task-scheduler": {
    id: "task-scheduler",
    title: "Task Scheduler",
    difficulty: "Medium",
    category: "Heap • Greedy",
    description: {
      text: "Given a list of tasks and a cooldown n, return the least number of units of time required to finish all tasks.",
      notes: [],
    },
    examples: [
      { input: 'tasks = ["A","A","A","B","B","B"], n = 2', output: "8" },
      { input: 'tasks = ["A","A","A","B","B","B"], n = 0', output: "6" },
      { input: 'tasks = ["A","A","A","A","B","B","C","C"], n = 2', output: "10" },
    ],
    constraints: ["1 ≤ tasks.length ≤ 10⁴"],
    starterCode: {
      javascript: `function leastInterval(tasks, n) {
  // Write your solution here
}`,
      python: `def leastInterval(tasks, n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int leastInterval(char[] tasks, int n) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "8\n6\n10",
      python: "8\n6\n10",
      java: "8\n6\n10",
    },
  },

  "find-median-from-data-stream": {
    id: "find-median-from-data-stream",
    title: "Find Median from Data Stream",
    difficulty: "Hard",
    category: "Heap • Design",
    description: {
      text: "Design a data structure that supports adding numbers and finding the median.",
      notes: ["Use two heaps."],
    },
    examples: [
      { input: "addNum(1), addNum(2), findMedian()", output: "1.5" },
      { input: "addNum(1), addNum(2), addNum(3), findMedian()", output: "2" },
      { input: "addNum(5), findMedian()", output: "5" },
    ],
    constraints: ["-10⁵ ≤ num ≤ 10⁵"],
    starterCode: {
      javascript: `class MedianFinder {
  constructor() {}
  addNum(num) {}
  findMedian() {}
}`,
      python: `class MedianFinder:
    def __init__(self):
        pass
    def addNum(self, num):
        pass
    def findMedian(self):
        pass`,
      java: `class MedianFinder {
    public MedianFinder() {}
    public void addNum(int num) {}
    public double findMedian() { return 0.0; }
}`,
    },
    expectedOutput: {
      javascript: "1.5\n2\n5",
      python: "1.5\n2\n5",
      java: "1.5\n2\n5",
    },
  },

  "reorganize-string": {
    id: "reorganize-string",
    title: "Reorganize String",
    difficulty: "Medium",
    category: "Heap • Greedy",
    description: {
      text: "Rearrange the string so that no two adjacent characters are the same.",
      notes: ["Return empty string if impossible."],
    },
    examples: [
      { input: 's = "aab"', output: '"aba"' },
      { input: 's = "aaab"', output: '""' },
      { input: 's = "vvvlo"', output: '"vlvov"' },
    ],
    constraints: ["1 ≤ s.length ≤ 500"],
    starterCode: {
      javascript: `function reorganizeString(s) {
  // Write your solution here
}`,
      python: `def reorganizeString(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static String reorganizeString(String s) {
        // Write your solution here
        return "";
    }
}`,
    },
    expectedOutput: {
      javascript: "aba\n\nvlvov",
      python: "aba\n\nvlvov",
      java: "aba\n\nvlvov",
    },
  },
  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming • 1D",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb either 1 or 2 steps.",
      notes: ["Return the number of distinct ways to reach the top."],
    },
    examples: [
      { input: "n = 2", output: "2" },
      { input: "n = 3", output: "3" },
      { input: "n = 5", output: "8" },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
}`,
      python: `def climbStairs(n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n3\n8",
      python: "2\n3\n8",
      java: "2\n3\n8",
    },
  },

  "house-robber": {
    id: "house-robber",
    title: "House Robber",
    difficulty: "Medium",
    category: "Dynamic Programming • 1D",
    description: {
      text: "Given an integer array nums representing the amount of money in each house, return the maximum amount you can rob without robbing adjacent houses.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,2,3,1]", output: "4" },
      { input: "nums = [2,7,9,3,1]", output: "12" },
      { input: "nums = [2,1,1,2]", output: "4" },
    ],
    constraints: ["1 ≤ nums.length ≤ 100"],
    starterCode: {
      javascript: `function rob(nums) {
  // Write your solution here
}`,
      python: `def rob(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int rob(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n12\n4",
      python: "4\n12\n4",
      java: "4\n12\n4",
    },
  },

  "house-robber-ii": {
    id: "house-robber-ii",
    title: "House Robber II",
    difficulty: "Medium",
    category: "Dynamic Programming • 1D",
    description: {
      text: "Houses are arranged in a circle. You cannot rob adjacent houses.",
      notes: [],
    },
    examples: [
      { input: "nums = [2,3,2]", output: "3" },
      { input: "nums = [1,2,3,1]", output: "4" },
      { input: "nums = [1]", output: "1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 100"],
    starterCode: {
      javascript: `function rob(nums) {
  // Write your solution here
}`,
      python: `def rob(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int rob(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n4\n1",
      python: "3\n4\n1",
      java: "3\n4\n1",
    },
  },

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming • 1D",
    description: {
      text: "Given coins of different denominations and an amount, return the fewest number of coins needed to make up that amount.",
      notes: ["Return -1 if the amount cannot be made up."],
    },
    examples: [
      { input: "coins = [1,2,5], amount = 11", output: "3" },
      { input: "coins = [2], amount = 3", output: "-1" },
      { input: "coins = [1], amount = 0", output: "0" },
    ],
    constraints: ["1 ≤ coins.length ≤ 12"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
}`,
      python: `def coinChange(coins, amount):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n-1\n0",
      python: "3\n-1\n0",
      java: "3\n-1\n0",
    },
  },

  "longest-increasing-subsequence": {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    category: "Dynamic Programming • Binary Search",
    description: {
      text: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
      notes: [],
    },
    examples: [
      { input: "nums = [10,9,2,5,3,7,101,18]", output: "4" },
      { input: "nums = [0,1,0,3,2,3]", output: "4" },
      { input: "nums = [7,7,7,7]", output: "1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 2500"],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {
  // Write your solution here
}`,
      python: `def lengthOfLIS(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int lengthOfLIS(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n4\n1",
      python: "4\n4\n1",
      java: "4\n4\n1",
    },
  },

  "unique-paths": {
    id: "unique-paths",
    title: "Unique Paths",
    difficulty: "Medium",
    category: "Dynamic Programming • 2D",
    description: {
      text: "A robot is located at the top-left corner of an m x n grid and can only move right or down.",
      notes: ["Return the number of unique paths to the bottom-right corner."],
    },
    examples: [
      { input: "m = 3, n = 7", output: "28" },
      { input: "m = 3, n = 2", output: "3" },
      { input: "m = 1, n = 1", output: "1" },
    ],
    constraints: ["1 ≤ m, n ≤ 100"],
    starterCode: {
      javascript: `function uniquePaths(m, n) {
  // Write your solution here
}`,
      python: `def uniquePaths(m, n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int uniquePaths(int m, int n) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "28\n3\n1",
      python: "28\n3\n1",
      java: "28\n3\n1",
    },
  },

  "minimum-path-sum": {
    id: "minimum-path-sum",
    title: "Minimum Path Sum",
    difficulty: "Medium",
    category: "Dynamic Programming • 2D",
    description: {
      text: "Given a grid filled with non-negative numbers, find a path from top-left to bottom-right with minimum sum.",
      notes: [],
    },
    examples: [
      { input: "grid = [[1,3,1],[1,5,1],[4,2,1]]", output: "7" },
      { input: "grid = [[1,2,3],[4,5,6]]", output: "12" },
      { input: "grid = [[0]]", output: "0" },
    ],
    constraints: ["1 ≤ m, n ≤ 200"],
    starterCode: {
      javascript: `function minPathSum(grid) {
  // Write your solution here
}`,
      python: `def minPathSum(grid):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int minPathSum(int[][] grid) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "7\n12\n0",
      python: "7\n12\n0",
      java: "7\n12\n0",
    },
  },
  "palindromic-substrings": {
    id: "palindromic-substrings",
    title: "Palindromic Substrings",
    difficulty: "Medium",
    category: "Dynamic Programming • String",
    description: {
      text: "Given a string s, return the number of palindromic substrings in it.",
      notes: ["A substring is contiguous."],
    },
    examples: [
      { input: 's = "abc"', output: "3" },
      { input: 's = "aaa"', output: "6" },
      { input: 's = "abba"', output: "6" },
    ],
    constraints: ["1 ≤ s.length ≤ 1000"],
    starterCode: {
      javascript: `function countSubstrings(s) {
  // Write your solution here
}`,
      python: `def countSubstrings(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int countSubstrings(String s) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n6\n6",
      python: "3\n6\n6",
      java: "3\n6\n6",
    },
  },

  "longest-palindromic-substring": {
    id: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "Dynamic Programming • String",
    description: {
      text: "Given a string s, return the longest palindromic substring.",
      notes: [],
    },
    examples: [
      { input: 's = "babad"', output: '"bab"' },
      { input: 's = "cbbd"', output: '"bb"' },
      { input: 's = "a"', output: '"a"' },
    ],
    constraints: ["1 ≤ s.length ≤ 1000"],
    starterCode: {
      javascript: `function longestPalindrome(s) {
  // Write your solution here
}`,
      python: `def longestPalindrome(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static String longestPalindrome(String s) {
        // Write your solution here
        return "";
    }
}`,
    },
    expectedOutput: {
      javascript: "bab\nbb\na",
      python: "bab\nbb\na",
      java: "bab\nbb\na",
    },
  },

  "decode-ways": {
    id: "decode-ways",
    title: "Decode Ways",
    difficulty: "Medium",
    category: "Dynamic Programming • String",
    description: {
      text: "Given a string containing only digits, return the number of ways to decode it.",
      notes: ["Mapping: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26."],
    },
    examples: [
      { input: 's = "12"', output: "2" },
      { input: 's = "226"', output: "3" },
      { input: 's = "06"', output: "0" },
    ],
    constraints: ["1 ≤ s.length ≤ 100"],
    starterCode: {
      javascript: `function numDecodings(s) {
  // Write your solution here
}`,
      python: `def numDecodings(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int numDecodings(String s) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n3\n0",
      python: "2\n3\n0",
      java: "2\n3\n0",
    },
  },

  "edit-distance": {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Hard",
    category: "Dynamic Programming • String",
    description: {
      text: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
      notes: ["Operations: insert, delete, replace."],
    },
    examples: [
      { input: 'word1 = "horse", word2 = "ros"', output: "3" },
      { input: 'word1 = "intention", word2 = "execution"', output: "5" },
      { input: 'word1 = "", word2 = "a"', output: "1" },
    ],
    constraints: ["0 ≤ word1.length, word2.length ≤ 500"],
    starterCode: {
      javascript: `function minDistance(word1, word2) {
  // Write your solution here
}`,
      python: `def minDistance(word1, word2):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int minDistance(String word1, String word2) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n5\n1",
      python: "3\n5\n1",
      java: "3\n5\n1",
    },
  },

  "partition-equal-subset-sum": {
    id: "partition-equal-subset-sum",
    title: "Partition Equal Subset Sum",
    difficulty: "Medium",
    category: "Dynamic Programming • Knapsack",
    description: {
      text: "Given a non-empty array nums, determine if it can be partitioned into two subsets with equal sum.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,5,11,5]", output: "true" },
      { input: "nums = [1,2,3,5]", output: "false" },
      { input: "nums = [2,2,3,5]", output: "false" },
    ],
    constraints: ["1 ≤ nums.length ≤ 200"],
    starterCode: {
      javascript: `function canPartition(nums) {
  // Write your solution here
}`,
      python: `def canPartition(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean canPartition(int[] nums) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
    },
  },

  "word-break": {
    id: "word-break",
    title: "Word Break",
    difficulty: "Medium",
    category: "Dynamic Programming • String",
    description: {
      text: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into words from the dictionary.",
      notes: [],
    },
    examples: [
      { input: 's = "leetcode", wordDict = ["leet","code"]', output: "true" },
      { input: 's = "applepenapple", wordDict = ["apple","pen"]', output: "true" },
      { input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 300"],
    starterCode: {
      javascript: `function wordBreak(s, wordDict) {
  // Write your solution here
}`,
      python: `def wordBreak(s, wordDict):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean wordBreak(String s, List<String> wordDict) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },

  "combination-sum-iv": {
    id: "combination-sum-iv",
    title: "Combination Sum IV",
    difficulty: "Medium",
    category: "Dynamic Programming • Counting",
    description: {
      text: "Given an array of distinct integers nums and a target integer, return the number of possible combinations that add up to target.",
      notes: ["Order matters."],
    },
    examples: [
      { input: "nums = [1,2,3], target = 4", output: "7" },
      { input: "nums = [9], target = 3", output: "0" },
      { input: "nums = [2,3], target = 7", output: "3" },
    ],
    constraints: ["1 ≤ nums.length ≤ 200"],
    starterCode: {
      javascript: `function combinationSum4(nums, target) {
  // Write your solution here
}`,
      python: `def combinationSum4(nums, target):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int combinationSum4(int[] nums, int target) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "7\n0\n3",
      python: "7\n0\n3",
      java: "7\n0\n3",
    },
  },
  "subsets": {
    id: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    category: "Backtracking",
    description: {
      text: "Given an integer array nums, return all possible subsets (the power set).",
      notes: ["The solution set must not contain duplicate subsets."],
    },
    examples: [
      { input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" },
      { input: "nums = [0]", output: "[[],[0]]" },
      { input: "nums = []", output: "[[]]" },
    ],
    constraints: ["0 ≤ nums.length ≤ 10"],
    starterCode: {
      javascript: `function subsets(nums) {
  // Write your solution here
}`,
      python: `def subsets(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static List<List<Integer>> subsets(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: "Power set\nPower set\nPower set",
      python: "Power set\nPower set\nPower set",
      java: "Power set\nPower set\nPower set",
    },
  },

  "permutations": {
    id: "permutations",
    title: "Permutations",
    difficulty: "Medium",
    category: "Backtracking",
    description: {
      text: "Given an array nums of distinct integers, return all possible permutations.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,2,3]", output: "All permutations" },
      { input: "nums = [0,1]", output: "All permutations" },
      { input: "nums = [1]", output: "[[1]]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 6"],
    starterCode: {
      javascript: `function permute(nums) {
  // Write your solution here
}`,
      python: `def permute(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static List<List<Integer>> permute(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: "Permutations\nPermutations\n[[1]]",
      python: "Permutations\nPermutations\n[[1]]",
      java: "Permutations\nPermutations\n[[1]]",
    },
  },

  "combination-sum": {
    id: "combination-sum",
    title: "Combination Sum",
    difficulty: "Medium",
    category: "Backtracking",
    description: {
      text: "Given an array of distinct integers candidates and a target, return all unique combinations that sum to target.",
      notes: ["Same number may be chosen unlimited times."],
    },
    examples: [
      { input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]" },
      { input: "candidates = [2,3,5], target = 8", output: "[[2,2,2,2],[2,3,3],[3,5]]" },
      { input: "candidates = [2], target = 1", output: "[]" },
    ],
    constraints: ["1 ≤ candidates.length ≤ 30"],
    starterCode: {
      javascript: `function combinationSum(candidates, target) {
  // Write your solution here
}`,
      python: `def combinationSum(candidates, target):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: "[[2,2,3],[7]]\n[[2,2,2,2],[2,3,3],[3,5]]\n[]",
      python: "[[2, 2, 3], [7]]\n[[2, 2, 2, 2], [2, 3, 3], [3, 5]]\n[]",
      java: "[[2,2,3],[7]]\n[[2,2,2,2],[2,3,3],[3,5]]\n[]",
    },
  },

  "word-search": {
    id: "word-search",
    title: "Word Search",
    difficulty: "Medium",
    category: "Backtracking",
    description: {
      text: "Given a grid of characters and a word, return true if the word exists in the grid.",
      notes: ["The word must be constructed from sequentially adjacent cells."],
    },
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true" },
      { input: 'board = [["A","B"],["C","D"]], word = "ACDB"', output: "true" },
      { input: 'board = [["A","B"],["C","D"]], word = "ABCD"', output: "false" },
    ],
    constraints: ["1 ≤ board.length, board[0].length ≤ 6"],
    starterCode: {
      javascript: `function exist(board, word) {
  // Write your solution here
}`,
      python: `def exist(board, word):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean exist(char[][] board, String word) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },

  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Bit Manipulation",
    description: {
      text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
      notes: ["Use bitwise XOR."],
    },
    examples: [
      { input: "nums = [2,2,1]", output: "1" },
      { input: "nums = [4,1,2,1,2]", output: "4" },
      { input: "nums = [1]", output: "1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴"],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
}`,
      python: `def singleNumber(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n4\n1",
      python: "1\n4\n1",
      java: "1\n4\n1",
    },
  },

  "counting-bits": {
    id: "counting-bits",
    title: "Counting Bits",
    difficulty: "Easy",
    category: "Bit Manipulation • DP",
    description: {
      text: "Given an integer n, return an array ans where ans[i] is the number of 1's in the binary representation of i.",
      notes: [],
    },
    examples: [
      { input: "n = 2", output: "[0,1,1]" },
      { input: "n = 5", output: "[0,1,1,2,1,2]" },
      { input: "n = 0", output: "[0]" },
    ],
    constraints: ["0 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function countBits(n) {
  // Write your solution here
}`,
      python: `def countBits(n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int[] countBits(int n) {
        // Write your solution here
        return new int[0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1,1]\n[0,1,1,2,1,2]\n[0]",
      python: "[0, 1, 1]\n[0, 1, 1, 2, 1, 2]\n[0]",
      java: "[0,1,1]\n[0,1,1,2,1,2]\n[0]",
    },
  },

  "implement-trie-prefix-tree": {
    id: "implement-trie-prefix-tree",
    title: "Implement Trie (Prefix Tree)",
    difficulty: "Medium",
    category: "Trie • Design",
    description: {
      text: "Implement a trie with insert, search, and startsWith methods.",
      notes: [],
    },
    examples: [
      { input: 'insert("apple"), search("apple")', output: "true" },
      { input: 'search("app")', output: "false" },
      { input: 'startsWith("app")', output: "true" },
    ],
    constraints: ["1 ≤ word.length ≤ 2000"],
    starterCode: {
      javascript: `class Trie {
  constructor() {}
  insert(word) {}
  search(word) {}
  startsWith(prefix) {}
}`,
      python: `class Trie:
    def __init__(self):
        pass
    def insert(self, word):
        pass
    def search(self, word):
        pass
    def startsWith(self, prefix):
        pass`,
      java: `class Trie {
    public Trie() {}
    public void insert(String word) {}
    public boolean search(String word) { return false; }
    public boolean startsWith(String prefix) { return false; }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};