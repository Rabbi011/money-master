document.getElementById('calculate-button').addEventListener('click',function(){
    // console.log('clicked');
    const incomeUserInputText = document.getElementById('income-input');
    const incomeUserInputValue = parseFloat(incomeUserInputText.value);
    // console.log(incomeUserInputValue)

    const expensesFoodInputText = document.getElementById('expenses-food-input');
    const expensesFoodInputValue = parseFloat(expensesFoodInputText.value);
    // console.log(expensesFoodInputValue)

    
    const expensesRentRnputText = document.getElementById('expenses-rent-input');
    const expensesRentRnputValue = parseFloat(expensesRentRnputText.value);
    // console.log(expensesRentRnputValue)

    const expensesClothesInputText = document.getElementById('expenses-clothes-input');
    const expensesClothesInputValue = parseFloat(expensesClothesInputText.value);
    // console.log(expensesClothesInputValue)
    const calculateExpensesText = document.getElementById('calculate-total-expenses');
    // const calculateExpensesvalue = parseFloat(calculateExpensesText.innerText);
// total value
   const  calculateTotalExpensesvalue = expensesClothesInputValue + expensesRentRnputValue + expensesFoodInputValue;
   console.log(calculateTotalExpensesvalue)
    calculateExpensesText.innerText = calculateTotalExpensesvalue;
    // balance

   const totalBalanceText = document.getElementById('total-balance');
   const balanceAmount = incomeUserInputValue - calculateTotalExpensesvalue ;
   totalBalanceText.innerText = balanceAmount ;




    // console.log(calculateTotalExpensesvalue)

    // clear the expenses input
    // expensesFoodInputText.value = '';
    // expensesRentRnputText.value = '';
    // expensesClothesInputText.value = '';
    // incomeUserInputText.value = '';
});

document.getElementById('save-button').addEventListener('click',function(){
    // console.log('clicking ');
    // double korse
    const incomeUserInputText = document.getElementById('income-input');
    const incomeUserInputValue = parseFloat(incomeUserInputText.value);

    const saveInputFieldText = document.getElementById('save-input-field');
    const saveInputFieldValue =  parseFloat(saveInputFieldText.value);
    // console.log(saveInputFieldValue)
    const savingAmountText = document.getElementById('saving-amount');
    // show saving amount
   const saveAmount = incomeUserInputValue - (((100 - saveInputFieldValue) * incomeUserInputValue) / 100 ) ;
   console.log(saveAmount)
    savingAmountText.innerText = saveAmount;
    // console.log(saveAmount)
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
    // console.log( calculateTotalExpensesvalue)

    const totalBalanceText = document.getElementById('total-balance');
   const balanceAmount = incomeUserInputValue - calculateTotalExpensesvalue ;
//    console.log(balanceAmount)



remainingBalance.innerText =(parseFloat(balanceAmount) - saveAmount) ;

})