/**
 * 136. 只出现一次的数字
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
 */

 /**
  * 解法一：利用收尾索引是否相同来判断  --ixenos 2020-11-19 16:27:39
  * 执行用时：964 ms, 在所有 JavaScript 提交中击败了5.13%的用户
    内存消耗：40.3 MB, 在所有 JavaScript 提交中击败了33.03%的用户

    这操蛋的indexOf效率真滴低

 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ret;
    for(let i=0; i<nums.length; i++){
        if(nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])){
            ret = nums[i];
        }
    }
    return ret;
};