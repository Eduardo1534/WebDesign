const imgHist = document.getElementById("imgHist")
const imgExem = document.getElementById("imgExem")
const imgAbout = document.getElementById("imgAbout")
const divHist = document.getElementById("divHist")
const divExem = document.getElementById("divExem")
const divAbout = document.getElementById("divAbout")
const close = document.getElementById("close")
const open = document.getElementById("open")

const hist = document.getElementById("hist")
const exemp = document.getElementById("exemp")
const about = document.getElementById("about")
const nav = document.getElementById("nav")


const histText = document.getElementById("histText")
const exemText = document.getElementById("exemText")
const aboutText = document.getElementById("aboutText")




open.addEventListener("mouseover",openHover)
open.addEventListener("mouseout",openOut)

close.addEventListener("mouseover",closeHover)
close.addEventListener("mouseout",closeOut)

divHist.addEventListener("mouseover", histHover)
divHist.addEventListener("mouseout", histOut)

divExem.addEventListener("mouseover",exemHover)
divExem.addEventListener("mouseout",exemOut)

divAbout.addEventListener("mouseover",aboutHover)
divAbout.addEventListener("mouseout",aboutOut)

function openHover(){
    open.src = "./img/openHover.png "
}

function openOut(){
    open.src = "./img/open.png "
}

function closeHover(){
    close.src = "./img/closeHover.png "
    console.log("foi")
}

function closeOut(){
    close.src = "./img/close.png "
}

function histHover(){
    imgHist.src = "./img/bookHover.png "
}

function histOut(){
    imgHist.src = "./img/book.png "
}

function exemHover(){
    imgExem.src = "./img/exemploHover.png "
}

function exemOut(){
    imgExem.src = "./img/exemplo.png "
}

function aboutHover(){
    imgAbout.src = "./img/aboutHover.png "
}

function aboutOut(){
    imgAbout.src = "./img/about.png "
}




function closeBar(){
    hist.style.display = "none"
    exemp.style.display = "none"  
    about.style.display = "none"
    nav.style.width = "5%"
    open.style.display="block"
    divHist.style.marginLeft = "20%"
    divExem.style.marginLeft = "20%"
    divAbout.style.marginLeft = "20%"
    close.style.display = "none"
  
}
function openBar(){

    nav.style.width = "15%"
    open.style.display="none"
    divHist.style.marginLeft = "9%"
    divExem.style.marginLeft = "9%"
    divAbout.style.marginLeft = "9%"
    close.style.display = "block"
    hist.style.display = "inline"
    exemp.style.display = "inline"  
    about.style.display = "inline"
}


function openHist(){


    divExem.style.backgroundColor ="transparent"
    divAbout.style.backgroundColor ="transparent"

    divHist.style.backgroundColor ="rgb(22, 22, 22)"
    divHist.style.borderRadius = "5%"

    exemText.style.display = "none"
    aboutText.style.display = "none"

    histText.style.display = "block"
}
function openExem(){

    divHist.style.backgroundColor ="transparent"
    divAbout.style.backgroundColor ="transparent"

    divExem.style.backgroundColor ="rgb(22, 22, 22)"
    divExem.style.borderRadius = "5%"

    histText.style.display = "none"
    aboutText.style.display = "none"

    exemText.style.display = "block"
}
function openAbout(){

    divHist.style.backgroundColor ="transparent"
    divExem.style.backgroundColor ="transparent"

    divAbout.style.backgroundColor ="rgb(22, 22, 22)"
    divAbout.style.borderRadius = "5%"

    histText.style.display = "none"
    exemText.style.display = "none"

    aboutText.style.display = "block"
}




