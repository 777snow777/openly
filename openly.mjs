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

function createGrid(p) {
    for (let i = 0; i < 10; i ++){
        let row = document.createElement("div")
        row.classList.add("grid-row")
        if (i % 2 == 0){
            row.addEventListener("mouseenter", (e)=>{
                document.getElementById("birds").pause()
            });
        }else{
            row.addEventListener("mouseenter", (e)=>{
                document.getElementById("birds").play()
            });
        }
        for (let j = 0; j < 10; j ++){
            let txtCell = document.createElement("div")
            txtCell.classList.add("grid-cell")
            txtCell.style.width = "10vw"
            row.appendChild(txtCell)
        }
        row.style.height = "10vh";
        p.appendChild(row)
    }
}

window.onload= (ev)=>{
    // let gridspace = document.getElementById("openlyBody")
    // if (gridspace != null){
    //     createGrid(gridspace)
    // }
    let enter = document.getElementById("enter-openly")
    enter.addEventListener("click", (e)=>{
        document.getElementById("openly-body").style.display = "none"
        document.getElementById("openly-poem").style.display = "none"
        document.getElementById("main-body").style.display = "block"
        let bg = document.getElementById("bodyBg")
        bg.id = "main"
    })

}