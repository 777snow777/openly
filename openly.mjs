function toggleVideo(e) {
    let vids = Array.from(document.getElementsByClassName("bgVideo"))
    if (e.target.innerHTML == "pause video"){
        e.target.innerHTML = "play video"
        for (let i =0; i < vids.length; i ++){
            vids[i].pause();
        }
    }else{
        e.target.innerHTML = "pause video"
        for (let i =0; i < vids.length; i ++){
            vids[i].play();
        }    }
}

window.onload= (ev)=>{
   
    let bg = document.getElementById("toggle-vid")
    if (bg != null){
        bg.addEventListener('click', (e)=>toggleVideo(e))
    }
}