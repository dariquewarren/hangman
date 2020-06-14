import Hangman from './hangman'
import getPuzzle from './requests'


var gameStatus = document.querySelector('#status')
// const guessform = document.querySelector('#guessForm')
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    game1.calculateStatus()
    render()
})
 
// guessform.addEventListener('submit', (e)=>{
//     const guessy = e.target.value
//     game1.makeGuess(guessy)
//     render()
// })

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage
    gameStatus.textContent = game1.calculateStatus
    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

