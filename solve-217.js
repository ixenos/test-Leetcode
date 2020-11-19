/*
217. 存在重复元素
给定一个整数数组，判断是否存在重复元素。

如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

 

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
*/

/**
 * 解法一：字典法，利用对象，模拟Set --ixenos 2020-11-19 15:31:14
 * 92 ms	46.2 MB
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    let ret = false;
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]==1){
            ret = true;
            break;
        }
        map[nums[i]] = 1;
    }
    return ret;
};

/**
 * 解法一修改：字典法，利用数组，模拟Set --ixenos 2020-11-19 15:39:00
 * 2104 ms	42.5 MB （indexOf有点拉胯啊）
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = [];
    let ret = false;
    for(let i = 0; i < nums.length; i++){
        if(map.indexOf(nums[i])!=-1){
            ret = true;
            break;
        }
        map.push(nums[i]);
    }
    return ret;
};

/**
 * 解法一修改：ES6有Set --ixenos 2020-11-19 15:39:00
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    let ret = false;
    for(let i = 0; i < nums.length; i++){
        if(set.get(nums[i])){
            ret = true;
            break;
        }
        set.add(nums[i]);
    }
    return ret;
};
//简化
var containsDuplicate = function(nums) {
    return new Set(nums).size != nums.length;
};

