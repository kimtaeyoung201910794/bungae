var prevScrollpos = window.pageYOffset;
console.log("first Y offset : "+ prevScrollpos)
window.onscroll = info_headerToggle
function info_headerToggle() {
    var info_header = document.getElementById("info_header");
    var logo_img = document.getElementById("logo_img");
    var info1 = document.getElementById("info1");
    var info2 = document.getElementById("info2");
    var info3 = document.getElementById("info3");
    var info4 = document.getElementById("info4");
    var info5 = document.getElementById("info5");
    var info6 = document.getElementById("info6");
    var info7 = document.getElementById("info7");

    var currentScrollpos = window.pageYOffset;
    if(prevScrollpos < currentScrollpos) {
        info_header.style.backgroundColor='white';
        logo_img.src = "https://bgzt.co.kr/assets/icon/icon_bunjang.svg";
        info1.style.color = "black";
        info2.style.color = "black";
        info3.style.color = "black";
        info4.style.color = "black";
        info5.style.color = "black";
        info6.style.color = "black";
        info7.style.color = "black";

    }
    else {
        info_header.style.backgroundColor='black';
        logo_img.src = "https://bgzt.co.kr/assets/icon/icon_bunjang_white.svg";
        info1.style.color = "white";
        info2.style.color = "white";
        info3.style.color = "white";
        info4.style.color = "white";
        info5.style.color = "white";
        info6.style.color = "white";
        info7.style.color = "white";

    }
}