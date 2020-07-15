const digit10 = document.getElementById('d10')
const digit1 = document.getElementById('d1')
let enterPossible = true
let inputPossible = true
let won = false
let randomNumber = 0

function buttonPressed(n) {
    if (inputPossible) {
        digit10.innerText = digit1.innerText
        digit1.innerText = n
        if (digit10.innerText != 0) {
            inputPossible = false
        }
    }
}

function resetPressed() {
    digit1.innerText = 0
    digit10.innerText = 0
    inputPossible = true
}

function enterPressed() {
    if (enterPossible) {
        inputPossible = false
        enterPossible = false
        const number = digit10.innerText + digit1.innerText

        if (number == randomNumber) {
            won = true
        } else {
            if (number < randomNumber) {
                console.log("My number is higher")
            } else {
                console.log("My number is lower")
            }
        }
        console.log(number)

        enterPossible = true
        resetPressed()
    }
}

function startGame() {
    resetPressed()
    randomNumber = Math.floor(Math.random() * 100)
    won = false
    console.log(randomNumber)
}

// On load
startGame()