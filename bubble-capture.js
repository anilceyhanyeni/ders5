let eleman1 = document.querySelector("#pr-1")
let eleman2 = document.querySelector("section")

eleman1.addEventListener("click", function(olay) {
    console.log("Paragraf 1 tıklandı")
    olay.stopPropagation();

})

eleman2.addEventListener("click", function(olay) {
    console.log("Section tıklandı")
    eleman2.style.backgroundColor="purple";
    olay.stopPropagation();

})
