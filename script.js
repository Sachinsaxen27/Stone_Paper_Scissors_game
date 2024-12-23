function handlerulebox() {
    let box = document.getElementById('ruleboxcontainer')
    const currentDisplay = getComputedStyle(box).display;
    if (currentDisplay === 'none') {
        box.style.display = 'block'
    }
    console.log("Box Open", box.style.display)
}
function handleruleboxclose() {
    let box = document.getElementById('ruleboxcontainer')
    if (box.style.display === 'block') {
        box.style.display = 'none'
    }
    console.log("Box Close")
}
const optionarray = ['Rock', 'Scissor', 'Paper']
let p = Number(localStorage.getItem('playercount')) || 0
let c = Number(localStorage.getItem('computercount')) || 0
let playervalue = document.getElementById('playerscore')
let computervalue = document.getElementById('computerscore')
const newdiv5 = document.createElement('div')
const players = document.getElementById('playerwinsss')
const computers = document.getElementById('computerwinss')
const drawresult = document.getElementById('drawresult')
const playerimage = document.getElementById('player')
const computerimage = document.getElementById('computer')
const aplayerimage = document.getElementById('aplayer')
const acomputerimage = document.getElementById('acomputer')
const drawaplayerimage = document.getElementById('drawplayer')
const drawacomputerimage = document.getElementById('drawcomp')
let newimages1 = document.getElementById('imagedrawpla')
let newimages2 = document.getElementById('imagedrawcom')
let newimage3 = document.getElementById('enterimage')
let newimage4 = document.getElementById('entercomimage')
let newimages5 = document.getElementById('enterimages')
let newimages6 = document.getElementById('entercomimages')
const playbutton = document.getElementById('play-option')
const hurray=document.getElementById('hurraypage')
function optioninput(playerChoice) {
    let max = 3
    let computerChoice = optionarray[Math.floor(Math.random() * max)]
    if (playerChoice === computerChoice) {
        console.log("It's a draw!")
        localStorage.setItem('playercount', p)
        newimages1.src = `./image/${playerChoice}.png`
        newimages1.alt = `${playerChoice}`
        newimages1.style.width = '60px'
        newimages1.style.paddingTop = '16px'
        newimages2.src = `./image/${computerChoice}.png`
        newimages2.alt = `${computerChoice}`
        newimages2.style.width = '60px'
        newimages2.style.paddingTop = '16px'
        console.log(newimages1)
        if (playerChoice === "Rock") {
            drawaplayerimage.className = 'option1'
            drawacomputerimage.className = 'option1'
        }
        else if (playerChoice === 'Scissor') {
            drawaplayerimage.className = 'option2'
            drawacomputerimage.className = 'option2'
        } 
        else {
            drawaplayerimage.className = 'option3'
            drawacomputerimage.className = 'option3'
        }
        playbutton.style.display = 'none'
        drawresult.style.display = 'flex'
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {
        p += 1
        localStorage.setItem('playercount', p)
        newimage3.src = `./image/${playerChoice}.png`
        newimage3.alt = `${playerChoice}`
        newimage3.style.width = '60px'
        newimage3.style.paddingTop = '16px'
        newimage4.src = `./image/${computerChoice}.png`
        newimage4.alt = `${computerChoice}`
        newimage4.style.width = '60px'
        newimage4.style.paddingTop = '16px'
        if (playerChoice === "Rock") {
            playerimage.className = 'option1'
            computerimage.className = 'option2'
        } else if (playerChoice === 'Scissor') {
            playerimage.className = 'option2'
            computerimage.className = 'option3'
        } else {
            playerimage.className = 'option3'
            computerimage.className = 'option1'
        }
        players.style.display = 'flex'
        playbutton.style.display = 'none'
        hurray.style.display='block'

    } else {
        c += 1
        localStorage.setItem('computercount', c)
        newimages6.src = `./image/${computerChoice}.png`
        newimages6.alt = `${computerChoice}`
        newimages6.style.width = '60px'
        newimages6.style.paddingTop = '16px'
        newimages5.src = `./image/${playerChoice}.png`
        newimages5.alt = `${playerChoice}`
        newimages5.style.width = '60px'
        newimages5.style.paddingTop = '16px'
        if (playerChoice === "Rock") {
            aplayerimage.className = 'option1'
            acomputerimage.className = 'option3'
        } else if (playerChoice === 'Scissor') {
            aplayerimage.className = 'option2'
            acomputerimage.className = 'option1'
        } else {
            aplayerimage.className = 'option3'
            acomputerimage.className = 'option2'
        }
        playbutton.style.display = 'none'
        computers.style.display = 'flex'
    }
    updatedisplay()
    console.log('computer=', computerChoice, 'Player=', playerChoice)
}
document.addEventListener('DOMContentLoaded', () => {
    updatedisplay();
});
function updatedisplay() {
    playervalue.textContent = `${p}`
    computervalue.textContent = `${c}`
}
window.addEventListener("storage", (event) => {
    if (event.key === 'playercount' || event.key === 'computercount') {
        p = Number(localStorage.getItem('playercount')) || 0;
        c = Number(localStorage.getItem('computercount')) || 0;
        updatedisplay(); // Update display when localStorage changes in another tab
    }
});
function playagain() {
    newimages1.src = ''
    newimages1.alt = ''
    newimages2.src = ''
    newimages2.alt = ''
    newimage3.src = ''
    newimage3.alt = ''
    newimage4.src = ''
    newimage4.alt = ''
    newimages5.src = ''
    newimages5.alt = ''
    newimages6.src = ''
    newimages6.alt = ''
    playbutton.style.display = 'flex'
    drawresult.style.display = 'none'
    players.style.display = 'none'
    computers.style.display = 'none'
    hurray.style.display='none'
}
// localStorage.clear()