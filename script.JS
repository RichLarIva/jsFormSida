var random = [];


function numbGenerator(){

    // Generates a random number and adds it to the random array
    for(let i = 0; i < 10; i++){
        var genNumb = Math.floor(Math.random() * 101);
        random[i] = genNumb;
        // Checks if the generated number already exists, if so generate new number.
       if(random.indexOf(i) == genNumb){
           random[i] = Math.floor(Math.random() * 101);
       }
       document.getElementById("unsortedID").innerHTML += " " + random[i]; //Replaces the text within the document to the random array.
   }
   //Sorts the generated array.
   random.sort();
   for(let i = 0; i < 10; i++){
    document.getElementById("sortedID").innerHTML += " " + random[i];
   }
   
}


function submitForm(){
    var username = document.getElementById("userName");
    // Mail format checks that the email address doens't have weird symbols in the start or at all.
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordSame = false;
    var emailReal = false;
    var password = document.getElementById("pwd");
    var confirmPwd = document.getElementById("confirmPwd");
    var emailText = document.getElementById("email");
    var emptyChecker = false;
    var checkbox = document.getElementById("checkBox");

    if(username.value.length == 0){
        alert("You can't have a short username!!!");
    }

    if(username.value.length > 0){
        emptyChecker = true;
    }

    verifyPWD(password, confirmPwd)
    
    if(emailText.value.match(mailformat)){
        console.log("VALID EMAIL!!");
        emailReal = true;
    }
    else{
        alert("You have entered an invalid email address!");
        emailReal = false;
    }

    if(passwordSame == true && emailReal == true && checkbox.checked == true && emptyChecker == true){
        return true;

    }
    else{
        alert("READ THE TERMS!");
        return false;
    }

    
}

function verifyPWD(password, confirmPwd){
    if(password.value.length <6){
        alert("PASSWORD NOT LONG ENOUGH")
        return false;
    }

    if(password.value == confirmPwd.value)
    {
        passwordSame = true;
    }
    else if(password.value !== confirmPwd.value){
        alert("Make sure to write the same password.")
    }
}