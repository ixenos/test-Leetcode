/*
    给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

    不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

    示例 1:

    给定数组 nums = [1,1,2], 

    函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

    你不需要考虑数组中超出新长度后面的元素。
    示例 2:

    给定 nums = [0,0,1,1,1,2,2,3,3,4],

    函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

    你不需要考虑数组中超出新长度后面的元素。
 */


//解法1 --ixenos 2019-11-29 16:17:08
var removeDuplicates1 = function(nums) {
    //1.排序后逐个扫
    //2.记录当前长度，将重复数与数组不重复段的最后一位交换，然后重新计数
    var lastNum = NaN;
    var curLen = nums.length;
    var tmp;
    for(var i=nums.length-1;i>=0;i--){
        if(lastNum==nums[i]){
            tmp = nums[i];
            nums[i] = nums[curLen-1];
            nums[curLen-1] = tmp;
            curLen--;
        }else{
            lastNum=nums[i];
        }
    }
    nums.length = curLen;
    nums.sort(function(a,b){return a-b;});
    return curLen;
};


//解法2 --ixenos 2019-11-29 16:17:14
var removeDuplicates2 = function(nums) {
    //1.排序后逐个扫
    //2.直接删除重复元素，修改原数组的操作较为频繁
    var lastNum = NaN;
    for(var i=0;i<nums.length;i++){
        if(lastNum==nums[i]){
            nums.splice(i,1);
            i--;
        }else{
            lastNum=nums[i];
        }
    }
    return nums.length;
};