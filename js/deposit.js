document.getElementById("deposit").addEventListener("click", function(){
    const depo = document.getElementById("depo-amount");
    const depoAmount = depo.value;

    const show = document.getElementById("depo");
    const showvalue = show.innerText;
    const totalDepo = parseFloat(showvalue) + parseFloat(depoAmount);
    show.innerText = totalDepo;
    depo.value = "";

    //Total Balance

    const bal = document.getElementById("bal");
    const balAmount = bal.innerText;
    const totalBal = parseFloat(balAmount) + parseFloat(depoAmount);
    bal.innerText = totalBal;
})