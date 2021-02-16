// 2.0 changes
// - Attempting to write as much as possible without live preview
// - gameData global var declared
// - reference https://www.reddit.com/r/incremental_games/comments/ahf6nx/how_to_make_an_incremental_game/

//global var
var gameData = {
    pats: 0,
    patPower: 1,
    costHands: 10,
    costFren: 100,
    costMaxBork: 1000,
    ownedHands: 0,
    ownedFren: 0,
    ownedMaxBork: 0,
}

// doggo sayings

const petSayings = [
    "oyes fren", 
    "thamnx", 
    "treatos pls", 
    "moar pls", 
    "thamnx fren",
    "bork",
    "can haz moar?",
    "o hecc",
    "beep boop",
    "petpetpet",
    "swish swish",
    "KONY 2012",
    "am gud boi?",
    "ohi fren",
]

const doggo = document.getElementById("doggo")

// score

const gameTick = 1000;

const score = document.getElementById("score")
score.innerHTML = gameData.pats

const displayPatPower = document.getElementById("patPower")
displayPatPower.innerHTML = gameData.patPower

//upgrade info

const displayHandsOwned = document.getElementById("ownedHands")
const displayHandsCost = document.getElementById("costHands")

const displayFrenOwned = document.getElementById("ownedFren")
const displayFrenCost = document.getElementById("costFren")

const displayMoreHandsUpgrade = document.querySelector("#moreHandsUpgrade")
const displayFrenUpgrade = document.querySelector("#frenUpgrade")

displayHandsOwned.innerHTML = gameData.ownedHands;
displayHandsCost.innerHTML = gameData.costHands;
displayFrenOwned.innerHTML = gameData.ownedFren;
displayFrenCost.innerHTML = gameData.costFren;

//actions

function doggoPat() {
    gameData.pats += gameData.patPower;
    score.innerHTML = Math.round(gameData.pats);
    doggo.innerHTML = petSayings[Math.floor(Math.random() * petSayings.length)];


    function checkUpgrade(){
        if (gameData.pats >= gameData.costHands){
            displayMoreHandsUpgrade.classList.remove("hidden")
        }
        if (gameData.pats >= gameData.costFren){
            displayFrenUpgrade.classList.remove("hidden")
        }
    }
    checkUpgrade()
}

function buyHands() {
    if (gameData.pats >= gameData.costHands) {
        gameData.pats -= gameData.costHands
        gameData.patPower *= 1.25;
        gameData.costHands *= 2;
        gameData.ownedHands += 1;
        displayHandsOwned.innerHTML = gameData.ownedHands;
        displayHandsCost.innerHTML = Math.round(gameData.costHands);
        score.innerHTML = Math.round(gameData.pats);
        displayPatPower.innerHTML = gameData.patPower
    }
}

function buyFren(){
    if (gameData.pats >= gameData.costFren) {
        gameData.pats -= gameData.costFren
        gameData.costFren *= 2;
        gameData.ownedFren += 1;
        displayFrenOwned.innerHTML = gameData.ownedFren;
        displayFrenCost.innerHTML = Math.round(gameData.costFren);
        score.innerHTML = Math.round(gameData.pats);
        displayPatPower.innerHTML = gameData.patPower

    }
    autoPet()
}
function autoPet(){
    if (gameData.ownedFren >= 1) {
        let mainGameLoop = window.setInterval(function() {
            doggoPat()
         }, gameTick)
    }
}
