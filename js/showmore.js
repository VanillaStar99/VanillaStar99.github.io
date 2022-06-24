morebtn.onclick = function () {
    document.getElementById("morecostume02").classList.remove("item-hide");
    document.getElementById("morecostume03").classList.remove("item-hide");
    document.getElementById("morebtn").classList.add("item-hide");
    document.getElementById("lessbtn").classList.remove("item-hide");
    document.getElementById("morecostume01").classList.remove("costume-item-margin");
}

lessbtn.onclick = function () {
    document.getElementById("morecostume02").classList.add("item-hide");
    document.getElementById("morecostume03").classList.add("item-hide");
    document.getElementById("morebtn").classList.remove("item-hide");
    document.getElementById("lessbtn").classList.add("item-hide");
    document.getElementById("morecostume01").classList.add("costume-item-margin");
    document.getElementById("morecostume02").classList.remove("fadein");
    document.getElementById("morecostume03").classList.remove("fadein");
    document.getElementById("lessbtn").classList.remove("fadein");
}