var audio = document.getElementById("audio");
var music = document.getElementById("music");
var wrapper = document.getElementById("wrapper");

function playmusic() {
    music.play();
    music.loop = true;
    music.volume = 0.5;
    audio.classList.toggle("item-hide");
    wrapper.classList.toggle("item-hide");
}

function stopmusic() {
    audio.classList.toggle("item-hide");
    wrapper.classList.toggle("item-hide");
}