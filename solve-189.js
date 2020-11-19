/*
旋转数组

给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]

说明:
尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的 原地 算法。
*/

//解法一，不符合要求的解法，--ixenos 2019-12-17 17:45:38
var rotate = function(nums, k) {
    for(var i=0;i<k;i++){
        nums.unshift(nums.pop())        
    }
};

//解法二，递归，同样不符合，--ixenos 2019-12-17 17:45:45
var count = 0;
var rotate = function(nums, k) {
    if(count<k){
        var last = nums[nums.length-1];
        for(var i=nums.length-1; i>=0; i--){
            var aim = nums[i-1];
            if(aim==null){
                aim = last;
            }
            nums[i] = aim;
        };
        count++;
        rotate(nums,k);
    }
};

//解法三，暴力，非原地算法 --ixenos 2020-11-19 14:18:49
var rotate = function(nums, k) {
    nums.splice.apply(nums,[0,0].concat(nums.splice(nums.length-k,k)));
};

