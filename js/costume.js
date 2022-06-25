var imgbox = document.getElementById("imgbox");
var img01 = document.getElementById("imgbig01");
var img02 = document.getElementById("imgbig02");
var img03 = document.getElementById("imgbig03");
var img04 = document.getElementById("imgbig04");
var img05 = document.getElementById("imgbig05");

costumebtn01.onclick = function () {
    imgbox.classList.toggle("item-hide");
    img01.classList.toggle("item-hide");
}

costumebtn02.onclick = function () {
    imgbox.classList.toggle("item-hide");
    img02.classList.toggle("item-hide");
}

costumebtn03.onclick = function () {
    imgbox.classList.toggle("item-hide");
    img03.classList.toggle("item-hide");
}

costumebtn04.onclick = function () {
    imgbox.classList.toggle("item-hide");
    img04.classList.toggle("item-hide");
}

costumebtn05.onclick = function () {
    imgbox.classList.toggle("item-hide");
    img05.classList.toggle("item-hide");
}

imgbox.onclick = function () {
    imgbox.classList.toggle("item-hide");
    img01.classList.add("item-hide");
    img02.classList.add("item-hide");
    img03.classList.add("item-hide");
    img04.classList.add("item-hide");
    img05.classList.add("item-hide");
}

var costume01 = document.getElementById("morecostume01");
var costume02 = document.getElementById("morecostume02");
var costume03 = document.getElementById("morecostume03");
var more = document.getElementById("morebtn");
var less = document.getElementById("lessbtn");


morebtn.onclick = function () {
    costume02.classList.toggle("item-hide");
    costume03.classList.toggle("item-hide");
    more.classList.toggle("item-hide");
    less.classList.toggle("item-hide");
    costume01.classList.toggle("costume-item-margin");
}

lessbtn.onclick = function () {
    costume02.classList.toggle("item-hide");
    costume03.classList.toggle("item-hide");
    more.classList.toggle("item-hide");
    less.classList.toggle("item-hide");
    costume01.classList.toggle("costume-item-margin");
    costume02.classList.toggle("fadein");
    costume03.classList.toggle("fadein");
    less.classList.toggle("fadein");
}