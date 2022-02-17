function getInputValue(inputId){
    
    const userInputText = document.getElementById(inputId);
    const userInputValue = parseFloat(userInputText.value);
    if(userInputValue > 0){
        return userInputValue;
    }
    else if(userInputValue < 0){

    }
   
}

document.getElementById('calculate-button').addEventListener('click',function(){
    
    // input part
    const incomeUserInputValue = getInputValue('income-input'); 
    const expensesFoodInputValue = getInputValue('expenses-food-input');
    const expensesRentRnputValue = getInputValue('expenses-rent-input');
    const expensesClothesInputValue = getInputValue('expenses-clothes-input');

    // total value
   const  calculateTotalExpensesvalue = expensesClothesInputValue + expensesRentRnputValue + expensesFoodInputValue;
   if(incomeUserInputValue > calculateTotalExpensesvalue){
    const calculateExpensesText = document.getElementById('calculate-total-expenses');
    calculateExpensesText.innerText = calculateTotalExpensesvalue;
    const totalBalanceText = document.getElementById('total-balance');
   const balanceAmount = incomeUserInputValue - calculateTotalExpensesvalue ;
   totalBalanceText.innerText = balanceAmount ;
   }
   else{

   }

 
});

     document.getElementById('save-button').addEventListener('click',function(){
   
    const incomeUserInputValue = getInputValue('income-input'); 
    
// save part
    const saveInputFieldText = document.getElementById('save-input-field');
    const saveInputFieldValue =  parseFloat(saveInputFieldText.value);
    
    const savingAmountText = document.getElementById('saving-amount');
    // show saving amount


   const saveAmount = incomeUserInputValue - (((100 - saveInputFieldValue) * incomeUserInputValue) / 100 ) ;
    
    const remainingBalance = document.getElementById('remaining-balance');

    const expensesFoodInputValue = getInputValue('expenses-food-input');
    const expensesRentRnputValue = getInputValue('expenses-rent-input');
    const expensesClothesInputValue = getInputValue('expenses-clothes-input');

    const  calculateTotalExpensesvalue = expensesClothesInputValue + expensesRentRnputValue + expensesFoodInputValue;
    

    const totalBalanceText = document.getElementById('total-balance');
   const balanceAmount = incomeUserInputValue - calculateTotalExpensesvalue ;

  
   if(incomeUserInputValue > calculateTotalExpensesvalue && balanceAmount > saveAmount){
    savingAmountText.innerText = saveAmount;
    remainingBalance.innerText =(parseFloat(balanceAmount) - saveAmount) ;
    
}
else{
    
}

});