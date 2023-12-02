
let hum = document.getElementById("hum");
let links = document.getElementById("links");

hum.onclick = function () {

  hum.classList.toggle("active");
  links.classList.toggle("humbrg");

}
let scroll = document.querySelector('.scroll');
let shadow = document.querySelector("nav");

window.onscroll = function(){
  if(scrollY >= 100){
    scroll.classList.add('scrr');
    shadow.classList.add('shadow');
  }
  else {
    scroll.classList.remove('scrr');
    shadow.classList.remove('shadow');

  }
}
let discover = document.querySelector(".discover");
let discover0 = document.getElementById("discover0");
let disAr = document.getElementById("disAr");
let close = document.getElementById("close");

discover0.onclick = function () {
  discover.classList.toggle("trans");
}
close.onclick = function () {
  discover.classList.remove("trans");
}

let translate = document.getElementById("translate");
let home = document.getElementById("home");
let disEn = document.getElementById("disEn");
let homeAr = document.getElementById("homeAr");

translate.onclick = function () {
  if (translate.innerHTML === "translate" && discover0.innerHTML === "READ MORE" ) {
  translate.innerHTML = "ترجمة";
  discover0.innerHTML = "اقرا المزيد";

}else {
  translate.innerHTML = "translate";
  discover0.innerHTML = "READ MORE";
}
  home.classList.toggle("none");
  homeAr.classList.toggle("block");
  disEn.classList.toggle("none");
  disAr.classList.toggle("block");
}

let translate00 = document.getElementById("translate00");
let about = document.getElementById("about");
let aboutAr = document.getElementById("aboutAr");

translate00.onclick = function () {
  if (translate00.innerHTML === "translate") {
  translate00.innerHTML = "ترجمة";
}else {
  translate00.innerHTML = "translate";
}
  about.classList.toggle("none");
  aboutAr.classList.toggle("block");
}
let translate0 = document.getElementById("translate-0");
let home0 = document.getElementById("home-0");
let ar0 = document.getElementById("ar-0");
let head0 = document.getElementById("head-0");
let ara0 = document.getElementById("ara-0");

translate0.onclick = function () {
  if (translate0.innerHTML === "translate") {
  translate0.innerHTML = "ترجمة";
}else {
  translate0.innerHTML = "translate";

}
  home0.classList.toggle("none");
  ar0.classList.toggle("block");
  head0.classList.toggle("none");
  ara0.classList.toggle("block");
}

let translate1 = document.getElementById("translate-1");
let home1 = document.getElementById("home-1");
let ar1 = document.getElementById("ar-1");
let head1 = document.getElementById("head-1");
let ara1 = document.getElementById("ara-1");

translate1.onclick = function () {
  if (translate1.innerHTML === "translate") {
  translate1.innerHTML = "ترجمة";
}else {
  translate1.innerHTML = "translate";

}
  home1.classList.toggle("none");
  ar1.classList.toggle("block");
  head1.classList.toggle("none");
  ara1.classList.toggle("block");
}

let translate2 = document.getElementById("translate-2");
let home2 = document.getElementById("home-2");
let ar2 = document.getElementById("ar-2");
let head2 = document.getElementById("head-2");
let ara2 = document.getElementById("ara-2");

translate2.onclick = function () {
  if (translate2.innerHTML === "translate") {
  translate2.innerHTML = "ترجمة";
}else {
  translate2.innerHTML = "translate";

}
  home2.classList.toggle("none");
  ar2.classList.toggle("block");
  head2.classList.toggle("none");
  ara2.classList.toggle("block");
}

let translate3 = document.getElementById("translate-3");
let home3 = document.getElementById("home-3");
let ar3 = document.getElementById("ar-3");
let head3 = document.getElementById("head-3");
let ara3 = document.getElementById("ara-3");

translate3.onclick = function () {
  if (translate3.innerHTML === "translate") {
  translate3.innerHTML = "ترجمة";
}else {
  translate3.innerHTML = "translate";

}
  home3.classList.toggle("none");
  ar3.classList.toggle("block");
  head3.classList.toggle("none");
  ara3.classList.toggle("block");
}

let translate4 = document.getElementById("translate-4");
let home4 = document.getElementById("home-4");
let ar4 = document.getElementById("ar-4");
let head4 = document.getElementById("head-4");
let ara4 = document.getElementById("ara-4");

translate4.onclick = function () {
  if (translate4.innerHTML === "translate") {
  translate4.innerHTML = "ترجمة";
}else {
  translate4.innerHTML = "translate";

}
  home4.classList.toggle("none");
  ar4.classList.toggle("block");
  head4.classList.toggle("none");
  ara4.classList.toggle("block");
}

let translate5 = document.getElementById("translate-5");
let home5 = document.getElementById("home-5");
let ar5 = document.getElementById("ar-5");
let head5 = document.getElementById("head-5");
let ara5 = document.getElementById("ara-5");

translate5.onclick = function () {
  if (translate5.innerHTML === "translate") {
  translate5.innerHTML = "ترجمة";
}else {
  translate5.innerHTML = "translate";

}
  home5.classList.toggle("none");
  ar5.classList.toggle("block");
  head5.classList.toggle("none");
  ara5.classList.toggle("block");
}

let translate6 = document.getElementById("translate-6");
let home6 = document.getElementById("home-6");
let ar6 = document.getElementById("ar-6");
let head6 = document.getElementById("head-6");
let ara6 = document.getElementById("ara-6");

translate6.onclick = function () {
  if (translate6.innerHTML === "translate") {
  translate6.innerHTML = "ترجمة";
}else {
  translate6.innerHTML = "translate";

}
  home6.classList.toggle("none");
  ar6.classList.toggle("block");
  head6.classList.toggle("none");
  ara6.classList.toggle("block");
}

let translate7 = document.getElementById("translate-7");
let home7 = document.getElementById("home-7");
let ar7 = document.getElementById("ar-7");

translate7.onclick = function () {
  if (translate7.innerHTML === "translate") {
  translate7.innerHTML = "ترجمة";
}else {
  translate7.innerHTML = "translate";

}
  home7.classList.toggle("none");
  ar7.classList.toggle("block");
}

 let input = document.getElementById("input");
 let submit = document.getElementById("submit");

 submit.onclick = function () {
   if(input.value === ""){
    input.classList.add("error");
  }else {
    input.classList.remove("error");
  }
 }
