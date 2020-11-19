/*
    https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

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
var removeDuplicates = function(nums) {
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
    nums.sort(function(a,b){return a-b;});//这里耗时了
    return curLen;
};


//解法2 --ixenos 2019-11-29 16:17:14
var removeDuplicates = function(nums) {
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

//解法3 双指针法 --ixenos 2019-11-30 15:27:57
//因为结果不要求删除元素，只是取返回长度对应的数组，所以直接用双指针将不重复值提前
var removeDuplicates = function(nums) {
    var rsIdx=0, curIdx=0;
    for(curIdx=0;curIdx<nums.length;curIdx++){
        if(nums[rsIdx]!=nums[curIdx]){
            nums[++rsIdx]=nums[curIdx];
        }
    }
    return ++rsIdx;
};

//解法三优化 --ixenos 2020-11-19 11:16:34
var removeDuplicates = function(nums) {
    var len = !nums?0:nums.length;
    if(len<=1){
        return len;
    }
    for(var i=1, j=1; i<len; i++){
        if(nums[i] != nums[j-1]){
            nums[j++] = nums[i];
        }
    }
    return j;
};