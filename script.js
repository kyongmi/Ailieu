document.addEventListener("DOMContentLoaded", function(){

let popup = document.querySelector(".area14");
let closeBtn = document.querySelector(".area14 .close");
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

closeBtn.addEventListener("click", closePopup);



/* -----------------------
   ① PC 離脱検知
----------------------- */

document.addEventListener("mouseleave", function(e){
  if(e.clientY <= 0){
    showPopup();
  }
});


/* -----------------------
   ② 戻るボタン検知（SP対応）
----------------------- */

history.pushState(null,null,location.href);

window.addEventListener("popstate", function(){
  showPopup();
  history.pushState(null,null,location.href);
});


/* -----------------------
   ③ ページ最下部スクロール
----------------------- */

window.addEventListener("scroll", function(){

  let scrollTop = window.scrollY;
  let windowHeight = window.innerHeight;
  let docHeight = document.body.scrollHeight;

  if(scrollTop + windowHeight >= docHeight - 50){
    showPopup();
  }

});

});