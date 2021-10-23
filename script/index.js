function start(){
    document.getElementById('login_div').style.display = "";
    document.getElementById('register_div').style.display = "none"; 
    document.getElementById('loggedin_div').style.display = "none";
}

function gotoregister(){
    document.getElementById("login_div").style.display = "none";
    document.getElementById("register_div").style.display = ""; 
    document.getElementById("loggedin_div").style.display = "none";
}   

function gotologin(){
    document.getElementById("login_div").style.display = "";
    document.getElementById("register_div").style.display = "none";
    document.getElementById("loggedin_div").style.display = "none";
}

function clicktoregister(){
    var email = document.getElementsByClassName("email");
    var password = document.getElementsByClassName("password");
    var username = document.getElementsByClassName("username");

    window.alert("Welcome Test Message\n\nEMAIL : "+email[1].value+"\n\nPASSWORD : "+password[1].value);
}


