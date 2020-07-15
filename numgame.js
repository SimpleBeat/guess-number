const digit10 = document.getElementById('d10')
const digit1 = document.getElementById('d1')
let enterPossible = true
let inputPossible = true
let won = false
let randomNumber = 0
let currentAttempt = 1

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
        const number = digit10.innerText == 0 ? digit1.innerText : digit10.innerText + digit1.innerText

        if (number == randomNumber) {
            console.log("You won!")
            setTimeout(() => {
                startGame()
            }, 2000)
        } else {
            if (number < randomNumber) {
                document.getElementById('attempt'+currentAttempt).innerText = "Attempt "+currentAttempt+": my number is higher than "+number+"!"
            } else {
                document.getElementById('attempt'+currentAttempt).innerText = "Attempt "+currentAttempt+": my number is lower than "+number+"!"
            }
            currentAttempt++
        }
        if (currentAttempt == 7) {
            console.log("Sorry, you're out of attempts!")
            setTimeout(() => {
                startGame()
            }, 2000)
        }

        enterPossible = true
        resetPressed()
    }
}

function startGame() {
    resetPressed()
    for (let i=1; i<7; i++) {
        document.getElementById('attempt'+i).innerText = "|"
    }
    randomNumber = Math.floor(Math.random() * 100)
    currentAttempt = 1
    console.log(randomNumber)
}

// On load
startGame()