const digit10 = document.getElementById('d10')
const digit1 = document.getElementById('d1')
let enterPossible = true

function buttonPressed(n) {
    if (enterPossible) {
        digit10.innerText = digit1.innerText
        digit1.innerText = n
        if (digit10.innerText != 0) {
            enterPossible = false
        }
    }
}

function resetPressed() {
    digit1.innerText = 0
    digit10.innerText = 0
    enterPossible = true
}
