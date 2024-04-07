const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const LowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let randomNumber = (parseInt(Math.random() * 100 + 1))


let prevGuess = []
let NumGuessess = 1
let PlayGame = true

if (PlayGame) {
    submit.addEventListener('click', (event) => {
        event.preventDefault()
        let guess = parseInt(userInput.value)
        ValidateGuess(guess)
    })
}
let ValidateGuess = (guess) => {
    if (isNaN(guess)) {
        alert('Please Enter a Valid Number')
    } else if (guess < 1) {
        alert('Please Enter a Number more than 1')

    } else if (guess > 100) {
        alert('Please Enter a Number less than 100')

    } else {
        prevGuess.push(guess)
        if (NumGuessess === 11) {
            guessDisplay(guess)
            displayMessage(`Game Over, Random Number Was ${randomNumber}`)
            EndGame()
        } else {
            guessDisplay(guess)
            checkGuess(guess)
        }
    }
}

let checkGuess = (guess) => {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        EndGame()
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is too Low `)
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`)
    }
}

let guessDisplay = (guess) => {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    NumGuessess++;
    lastResult.innerHTML = `${11 - NumGuessess}`
}

let displayMessage = (message) => {
    LowOrHi.innerHTML = `<h2>${message}</h2>`

}

let EndGame = () => {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New game</h2>`;
    StartOver.appendChild(p)
    PlayGame = false
    NewGame()
}

let NewGame = () => {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (event) => {
        randomNumber = (parseInt(Math.random() * 100 + 1))
        prevGuess = []
        NumGuessess = 1
        guessSlot.innerHTML = ''
        lastResult.innerHTML = `${11 - NumGuessess} `;
        userInput.removeAttribute('disabled')
        StartOver.removeChild(p)
        PlayGame = true
    })
}