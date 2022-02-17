document.getElementById('calculate-button').addEventListener('click',function(){
    
    const incomeUserInputText = document.getElementById('income-input');
    const incomeUserInputValue = parseFloat(incomeUserInputText.value);
    

    const expensesFoodInputText = document.getElementById('expenses-food-input');
    const expensesFoodInputValue = parseFloat(expensesFoodInputText.value);
    

    
    const expensesRentRnputText = document.getElementById('expenses-rent-input');
    const expensesRentRnputValue = parseFloat(expensesRentRnputText.value);
    
    const expensesClothesInputText = document.getElementById('expenses-clothes-input');
    const expensesClothesInputValue = parseFloat(expensesClothesInputText.value);
    
    const calculateExpensesText = document.getElementById('calculate-total-expenses');
   
// total value
   const  calculateTotalExpensesvalue = expensesClothesInputValue + expensesRentRnputValue + expensesFoodInputValue;
   
    calculateExpensesText.innerText = calculateTotalExpensesvalue;
    // balance

   const totalBalanceText = document.getElementById('total-balance');
   const balanceAmount = incomeUserInputValue - calculateTotalExpensesvalue ;
   totalBalanceText.innerText = balanceAmount ;
 
});

document.getElementById('save-button').addEventListener('click',function(){
   
    // double korse
    const incomeUserInputText = document.getElementById('income-input');
    const incomeUserInputValue = parseFloat(incomeUserInputText.value);
// save part
    const saveInputFieldText = document.getElementById('save-input-field');
    const saveInputFieldValue =  parseFloat(saveInputFieldText.value);
    
    const savingAmountText = document.getElementById('saving-amount');
    // show saving amount
   const saveAmount = incomeUserInputValue - (((100 - saveInputFieldValue) * incomeUserInputValue) / 100 ) ;

  
    savingAmountText.innerText = saveAmount;
    
    // double
    const remainingBalance = document.getElementById('remaining-balance');

    // double2
    const expensesFoodInputText = document.getElementById('expenses-food-input');
    const expensesFoodInputValue = parseFloat(expensesFoodInputText.value);

    const expensesRentRnputText = document.getElementById('expenses-rent-input');
    const expensesRentRnputValue = parseFloat(expensesRentRnputText.value);

    const expensesClothesInputText = document.getElementById('expenses-clothes-input');
    const expensesClothesInputValue = parseFloat(expensesClothesInputText.value);
    const  calculateTotalExpensesvalue = expensesClothesInputValue + expensesRentRnputValue + expensesFoodInputValue;
    

    const totalBalanceText = document.getElementById('total-balance');
   const balanceAmount = incomeUserInputValue - calculateTotalExpensesvalue ;

remainingBalance.innerText =(parseFloat(balanceAmount) - saveAmount) ;

})