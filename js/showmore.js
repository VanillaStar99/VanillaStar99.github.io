morebtn.onclick = function () {
    document.getElementById("morecostume01").style.display = "block";
    document.getElementById("morecostume02").style.display = "block";
    document.getElementById("morebtn").style.display = "none";
    document.getElementById("lessbtn").style.display = "inline-block";
}

lessbtn.onclick = function () {
    document.getElementById("morecostume01").style.display = "none";
    document.getElementById("morecostume02").style.display = "none";
    document.getElementById("morebtn").style.display = "inline-block";
    document.getElementById("lessbtn").style.display = "none";
    document.getElementById("morecostume01").classList.remove("fadein");
    document.getElementById("morecostume02").classList.remove("fadein");
    document.getElementById("lessbtn").classList.remove("fadein");
}