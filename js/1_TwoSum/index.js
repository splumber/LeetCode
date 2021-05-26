/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var nums = [0, 1, 3, 5, 8, 9, 10];
var target = 8;

var twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];

    if (nums[i] in hash) {
      return [hash[nums[i]], i];
    } else {
      hash[num] = i;
    }
  }

  return [];
};
