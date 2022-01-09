"use strict"


window.onload = () => {




    console.log("I am ready")



    let treasureMap = document.getElementById("treasureMap")




    let treasure = document.getElementById("treasure")
    let positions = document.createElement("p")
    document.addEventListener("click", getPosition)
    document.addEventListener("click", distance)

    let clicks = 0
    let mouseX = 0
    let mouseY = 0
    let treasureX = 0
    let treasureY = 0
    let hypotenuse = 0
    let attempts = document.createElement("p")
    let currentState = document.createElement("p")

    function getPosition(event) {
        mouseX = event.clientX
        mouseY = event.clientY
        document.body.appendChild(positions)
        positions.textContent = `PositionX: ${mouseX} PositionY: ${mouseY}`
    }

    function distance() {

        clicks += 1
        document.body.appendChild(attempts)
        attempts.textContent = `Attempts: ${clicks}`
        let sumSquares = Math.pow((mouseX - treasureX), 2) + Math.pow((mouseY - treasureY), 2)
        hypotenuse = Math.sqrt(sumSquares)
        document.body.appendChild(currentState)
        currentState.textContent = "Good Luck"
        console.log(hypotenuse)
        if (hypotenuse >= 25 && hypotenuse <= 40) {
            attempts.textContent = `Attempts: ${clicks}`
            alert("You are a true hero")
            let anotherRound = prompt("Would you like to play another round?".toLowerCase())
            resetGame(anotherRound)
        }
        else if (hypotenuse <= 70) {
        currentState.textContent = "lava"
        }
        else if (hypotenuse <= 120) {
        currentState.textContent = "very hot"
        }
        else if (hypotenuse <= 220) {
        currentState.textContent = "warmer"
        }
        else if (hypotenuse <= 340) {
        currentState.textContent = "not as cold"
        }
        else {
        currentState.textContent = "cold"
        }
    }

    function resetGame(decision) {
        if(decision.toLowerCase() == "yes") {
            changeTreasurePosition()
            clicks = 0
            attempts.textContent = `Attempts: 0`
            currentState.textContent = "Good luck"
        }
        else {
            alert("Have a lovely day")
        }


    }


    function changeTreasurePosition() {
        treasureX = Math.floor(Math.random() * (treasureMap.offsetWidth - 50)) + 1 
        treasureY = Math.floor(Math.random() * (treasureMap.offsetHeight - 50)) + 1
        treasure.style.left = treasureX + "px"
        treasure.style.top =  treasureY + "px"

        console.log(treasureX)
        console.log(treasureY)
    }

    changeTreasurePosition()
}