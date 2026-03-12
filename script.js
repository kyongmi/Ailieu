document.addEventListener("DOMContentLoaded", function(){

let popup = document.querySelector(".area14");
let closeBtns = document.querySelectorAll(".area14 .close, .area14 .close2");
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

/* close と close2 両方対応 */
closeBtns.forEach(function(btn){
  btn.addEventListener("click", closePopup);
});


/* -----------------------
   PC 離脱検知
----------------------- */

document.addEventListener("mouseleave", function(e){
  if(e.clientY <= 0){
    showPopup();
  }
});


/* -----------------------
   戻るボタン（SP）
----------------------- */

history.pushState(null,null,location.href);

window.addEventListener("popstate", function(){
  showPopup();
  history.pushState(null,null,location.href);
});


/* -----------------------
   最下部スクロール
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
