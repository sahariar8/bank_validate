document.getElementById("btn").addEventListener("click", function(){
    const email = document.getElementById("email");
    const emailValue = email.value;
    const pass = document.getElementById("pass");
    const passValue = pass.value;
    if(emailValue === "admin@gmail.com" && passValue === "admin"){
        window.location.href = "bank.html";
    }else{
        alert("Wrong Email & password Entered");
    }
})

