
let hum = document.getElementById("hum");
let links = document.getElementById("links");

hum.onclick = function () {

  hum.classList.toggle("active");
  links.classList.toggle("humbrg");

}
let scroll = document.querySelector('.scroll');
let nav = document.getElementById("nav");
window.onscroll = function(){
  if(scrollY >= 300){
    scroll.classList.add('scrr');
   nav.classList.add('shadow');
  }
  else {
    scroll.classList.remove('scrr');
  nav.classList.remove('shadow');
  }
}
document.onkeydown = function(e) {
if (e.keyCode == 123) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode ==  I .charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode ==  J .charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.keyCode ==  U .charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode ==  C .charCodeAt(0)) {
return false;
}

}