section = 0
projects = ["obfuscation/obfuscation1", "snowfairy/snowfairy1", "openly/opening", "openly/perpendicular", "openly/tomyskin", "openly/throughourknuckles", "openly/potholes","openly/sunspots_sinkholes", "yourarmswerethewindows", "openly/softspiral","openly/insidethelight", "openly/reopening"]

phrases = [
    ["for my best friend", "who left me playing with the stars", "dripping in light"], //under the moon
    ["for the tall trees", "surrounded by foam flowers", "pressed into sand"], //foam flowers
    ["for Cempasúchil", "blooming in a field of mist",],//blooming in a field of mist
    ["for the shore", "i can see it all so clearly", "it was high tide", "you held me under the water", "can i stay here forever"], //Lola
    ["for my baby", "held by the clouds", "sleeping with the angels"]//baby forever
    ["for the world we build", "fully in balance", "an estuary", "between your heart and mine"]//orobouros
]


//estuary_songs = ["blooming in a field of midst", "foam flowers", "a sparkly pink fault tucked in feathermoss","subcurrent","Cempasúchil", "Lola (seeds scattered in the cloud forest","Lola (seeds scattered in the cloud forest", 

window.onload= (ev)=>{
    AddMoreContent()
}
window.addEventListener("scroll", (event) => {
    if (section > projects.length){
        return
    }
    if  ($(window).scrollTop() >= ($(document).height() - $(window).height()-1)){
        AddMoreContent();
   }
});

function AddMoreContent(){
    let project = projects[section] 
    let id = project.split("/")[1]
    $("#"+id).load("drops/" + project+".html", function(){
        if (id == "estuary"){
            console.log("estuary")
            let gridspace = document.getElementById("estuary-grid")
            if (gridspace != null){
                createGrid(gridspace)
            }
        }
    });
    section += 1
}

function triggerText(songID, iteration, phrase){
    let txt = document.createElement("div")
    let cont = document.getElementById("container-estuary-"+songID)
    txt.className= "fade-text"
    txt.innerText = phrase
    let spacing = 50*(iteration+1)
    let pad = iteration*spacing
    txt.style.paddingLeft = pad + "px"
    ///txt.style.paddingTop = pad+ "px"

    cont.appendChild(txt)
    i = 0
    let words = phrases[songID]
    if (iteration < words.length){
        setTimeout(function() {
            console.log(iteration)
            let phrase = words[iteration];
            triggerText(songID, iteration+1, phrase)
        }, 3000);
        i+=1

    }
}

function toggleSong(songID){
    let toggle = document.getElementById("toggle-"+songID)
    if (toggle.className == "play"){ 
        document.getElementById(songID).play()
        toggle.innerHTML="&#9208;"
        toggle.className ="pause"
        let index = songID.split("-")[1]
        triggerText(index, 0, phrases[index][0])
    }else{
        document.getElementById(songID).pause()
        toggle.innerHTML="&#9658;" 
        toggle.className ="play"

    }
}

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
    for (let i = 0; i < 20; i ++){
        let row = document.createElement("div")
        row.classList.add("grid-row")
        for (let j = 0; j < 10; j ++){
            let txtCell = document.createElement("div")
            txtCell.classList.add("grid-cell")
            txtCell.style.width = "13vw"
            var phrase = phrases[Math.floor(Math.random()*phrases.length)];
            txtCell.innerText = phrase
            row.appendChild(txtCell)
        }
        row.style.height = "10vh";
        p.appendChild(row)
    }
}

