document.getElementById("withdraw").addEventListener("click", function(){
   const getValue = document.getElementById("value");
   const value = getValue.value;  
   const newValue = parseFloat(value);
    //
   const showWithdraw = document.getElementById("with");
   const withdrawValue = showWithdraw.innerText;
   const withdrawValueConvert = parseFloat(withdrawValue);

   //
//    const Total = parseFloat(withdrawValue) + parseFloat(value);
//    showWithdraw.innerText = Total;

    //total Balance

    const bal = document.getElementById("bal");
    const balAmount = bal.innerText;
    const balAmountConvert = parseFloat(balAmount);
    const totalBalance = balAmountConvert - newValue;

    getValue.value = "";

   if(newValue > balAmount){
        alert("No sufficient funds");
        return;
   }

    const Total = withdrawValueConvert + newValue
    showWithdraw.innerText = Total;
    
    bal.innerText = totalBalance;
   

   
   


    
})