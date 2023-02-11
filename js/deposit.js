// step-01:add event listener to the depositor
document.getElementById('btn-deposit').addEventListener('click',function(){
//    step-2:get the deposit amount from the deposit input field
// for input field use .value to the inside the input field
    const depositField =document.getElementById('deposit-field');
    const depositAmount =depositField.value;
    

    // step -3:get the current deposit total
    // for non-input(element other than input ,textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal =depositTotalElement.innerText;
    depositTotalElement.innerText=depositAmount;
})