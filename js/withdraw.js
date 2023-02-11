//1. add event handler with the withdraw button
// 2.get the widthdraw amount from the widthdraw input field
// 2.5 : also make sure to convert the input into a number by using pasreFloat
// 3.get previous widthdrawtotal
// 4.calculate the total widthdraw amount
// 4.5 : set total widthdraw amount
// 5/get the previous balance total

// 6.calculate new balance total
// 6.5:set the new balance total


// 7.clear the input field

// step -1 :
document.getElementById('btn-widthdraw').addEventListener('click',function(){
// step -2 :
const widthdrawField=document.getElementById('widthdraw-field');
const newWidthdrawAmountString =widthdrawField.value;
const newWidthdrawAmount =parseFloat(newWidthdrawAmountString);

// step-3
const widthdrawTotalElement = document.getElementById('widthdraw-total');
const previousWidthdrawTotalString =widthdrawTotalElement.innerText;
const previoueWidthdrawTotal = parseFloat(previousWidthdrawTotalString);
// 



// step-5:
const balanceTotalElement =document.getElementById('balance-total');
const previousBalanceTotalString =balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);

// step -7:
widthdrawField.value = '';


if(newWidthdrawAmount>previousBalanceTotal){
    alert('Not enough money on your account');
    return;
}

// step -4
const currentWidthdrawTotal =previoueWidthdrawTotal+newWidthdrawAmount;
widthdrawTotalElement.innerText=currentWidthdrawTotal;
// step-6
const newBalanceTotal =previousBalanceTotal - newWidthdrawAmount;
balanceTotalElement.innerText=newBalanceTotal;


})


