let popup_btn=document.getElementById("popup-btn");
let popup_close_btn=document.getElementById("popup-close-btn");
let my_popup=document.getElementById("overlay-popup");

//Opened
popup_btn.addEventListener("click", ()=>{
    my_popup.style.transform="scale(1)";
});
//Closed
popup_close_btn.addEventListener("click", ()=>{
    my_popup.style.transform="scale(0)";
});