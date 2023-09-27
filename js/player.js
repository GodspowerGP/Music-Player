const player = document.querySelector("#player");
const pause = document.querySelector("#pause");
const play = document.querySelector("#play");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

// cover image selector
const cover = document.querySelector("img[alt=cover]");

let track_num = 1;

play.addEventListener("click", ()=>{
    pause.classList.toggle("d-none");
    play.classList.toggle("d-none");
    cover.classList.toggle("playing");

    if (player.getAttribute("data-set") == "unset") {
        cover.setAttribute("src", `audio_images/${track_num}.jpg`);
        player.setAttribute("src", `audio/${track_num}.mp3`);
        player.setAttribute("data-set", "set")
    }
    player.play();
});

pause.addEventListener("click", ()=>{
    play.classList.toggle("d-none");
    pause.classList.toggle("d-none");
    cover.classList.toggle("playing");

    player.pause();
});

next.addEventListener("click",()=>{
    track_num++;
    if (track_num > 9) {
        track_num = 1
    }

    play.classList.add("d-none");
    pause.classList.remove("d-none");
    cover.classList.add("playing");

    cover.setAttribute("src", `audio_images/${track_num}.jpg`);
    player.setAttribute("src", `audio/${track_num}.mp3`);
    player.setAttribute("data-set", "set")


    player.play();
    
})

prev.addEventListener("click",()=>{
    track_num--;
    if (track_num < 1) {  
        track_num = 9
    }

    play.classList.add("d-none");
    pause.classList.remove("d-none");
    cover.classList.add("playing");

    cover.setAttribute("src", `audio_images/${track_num}.jpg`);
    player.setAttribute("src", `audio/${track_num}.mp3`);
    player.setAttribute("data-set", "set")

    
    player.play();
    
})
