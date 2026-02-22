const API = "http://localhost:3000/api";

function saveToken(token){
    localStorage.setItem("token", token);
}

function getToken(){
    return localStorage.getItem("token");
}

function getHeaders(){
    return {
        "Content-Type":"application/json",
        "Authorization":"Bearer " + getToken()
    };
}

function logout(){
    localStorage.removeItem("token");
    window.location.href="login.html";
}