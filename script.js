document.addEventListener("DOMContentLoaded", function(){

const popup = document.querySelector(".area14");
const closeBtns = document.querySelectorAll(".area14 .close, .area14 .close2");

let popupShown = false;

function showPopup(){
  if(!popupShown){
    popup.classList.add("active");
    popupShown = true;
  }
}

function closePopup(e){
  e.preventDefault();
  popup.classList.remove("active");
}

closeBtns.forEach(btn=>{
  btn.addEventListener("click",closePopup);
});


/* ----------------
PC：離脱検知
---------------- */

document.addEventListener("mouseout",function(e){

  if(!e.relatedTarget && e.clientY <= 10){
    showPopup();
  }

});


/* ----------------
SP：戻るボタン
---------------- */

history.pushState({page:1}, "", "");

window.addEventListener("popstate", function(){

  if(!popupShown){
    showPopup();

    setTimeout(function(){
      history.pushState({page:1}, "", "");
    },10);

  }

});


/* ----------------
スクロール最下部
---------------- */

window.addEventListener("scroll",function(){

  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;

  if(scrollPosition >= pageHeight - 20){
    showPopup();
  }

});

});
