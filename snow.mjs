section = 0
sections = ["obfuscation1", "snowfairy1", "stillmylove", "opening", "perpendicular", "tomyskin", "throughourknuckles", "potholes","sunspots_sinkholes", "yourarmswerethewindows", "softspiral","insidethelight", "reopening"]
window.onload= (ev)=>{
    AddMoreContent()
}
window.addEventListener("scroll", (event) => {
    if (section > sections.length){
        return
    }
    if  ($(window).scrollTop() >= ($(document).height() - $(window).height()-1)){
        AddMoreContent();
   }
});

function AddMoreContent(){
    let id = sections[section] 
    console.log(id)
    $("#"+id).load("drops/" + id+".html");
    section += 1
}
