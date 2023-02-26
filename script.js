const charf = document.getElementById("char-f")
const chars = document.getElementById("char-s")
const chart = document.getElementById("char-t")

function dropdown(char) {
    const character = document.getElementById("Character");
    const charObj = document.getElementById("char-" + char);
    
    character.classList.add("clicked");
    
    setTimeout(function(){
        character.style.display = "none";
        charObj.style.display = "inline-block";
        character.classList.remove("clicked");
    }, 1000);
}