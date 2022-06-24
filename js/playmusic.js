var music = document.getElementById("music");

function playmusic() {
    music.play();
    music.loop = true;
    music.volume = 0.5;
    document.getElementById("audio").classList.add("item-hide");
    document.getElementById("wrapper").classList.remove("item-hide");
}

function stopmusic() {
    document.getElementById("audio").classList.add("item-hide");
    document.getElementById("wrapper").classList.remove("item-hide");
}