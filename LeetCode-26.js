/**
 * 输入：可能带有重复项的已排序数组，如[-2,-1,1,2,2,3,4,5,5,6]
 * 输出：删除重复项后的数组长度，且原数组修改为[-2,-1,1,2,3,4,5,6]
 */


//解法1
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


//解法2
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