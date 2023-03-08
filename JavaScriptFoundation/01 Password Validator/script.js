function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    console.log(password, cnfrmPassword);
    let massage = document.getElementById("massage");

    if(password.length != 0){
        if(password == cnfrmPassword){
            massage.textContent = "Password match";
            massage.style.color ="blue";
        }
        else{
            massage.textContent = "Passwords don't match";
            massage.style.color = "red";
        }
    }
    else{
        alert("You can be not empty");
    }
}