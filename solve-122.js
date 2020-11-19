/*
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1:

输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
示例 2:

输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
示例 3:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
*/

//解法一，贪心算法 --ixenos 2019-12-03 14:07:18
var maxProfit = function(prices) {
    //两两对比，有增长趋势的，idx++直至减少, 计数缓存
    var profit = 0;
    var base = prices[0];
    var last = prices[0];
    for(var i=1;i<prices.length;i++){
        if(prices[i]<last){
            base = prices[i];
        }else if(prices[i]>last){
            profit += prices[i]-last;
        }
        last = prices[i];
    }
    return profit;
};

//解法一改进 --other
var maxProfit = function(prices) {
    var profit = 0;
    for(var i=0;i<prices.length-1;i++){
        if(prices[i+1]>prices[i]){
            profit += prices[i+1]-prices[i];
        }
    }
    return profit;
};

//解法二： --ixenos 2020-11-19 11:50:26
var maxProfit = function(prices) {
    //先买入，后卖出
    //买入时机：当后值比前值大时即可买入
    //卖出时机：当后值比前值大，且后值的后值，比前值小时即可卖出
    var profit = 0; 
    var buy = null;
    for(var i = 0; i<prices.length; i++){
        if(buy==null){
            if(i+1<prices.length && prices[i]<prices[i+1]){
                buy = prices[i];
            }
        }else{
            if(prices[i]>prices[i+1] || i+1>=prices.length){
                profit += prices[i]-buy;
                buy = null;
            }
        }
    }
    return profit;
};