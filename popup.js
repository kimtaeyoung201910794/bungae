"use strict";

const login_id = document.getElementById("LOGIN_ID");
const login_pw = document.getElementById("LOGIN_PW");
const login_btn = document.getElementById("LOGIN_BTN");

function change_color() {
    if((login_id.value.length>0 && login_id.value.indexOf("@")!=-1) && login_pw.value.length>= 5){
        login_btn.style.backgroundColor = "#0095F6";
        login_btn.disabled = false;
    }
    else{
        login_btn.style.backgroundColor="#C0DFFD";
        login_btn.disabled = true;
    }
}

function moveToMain(){
    location.replace("./main.html");
}

login_id.addEventListener('keyup',change_color);
login_pw.addEventListener('keyup',change_color);
login_btn.addEventListener('click',moveToMain);