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
    calculateExpensesText.innerText = calculateTotalExpensesvalue;

   const totalBalanceText = document.getElementById('total-balance');

totalBalanceText.innerText = incomeUserInputValue - calculateTotalExpensesvalue ;


    // console.log(calculateTotalExpensesvalue)

    // clear the expenses input
    expensesFoodInputText.value = '';
    expensesRentRnputText.value = '';
    expensesClothesInputText.value = '';
    incomeUserInputText.value = '';
});
