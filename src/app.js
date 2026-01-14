import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardNumbers = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]
const cardSuit = ['spade', 'club', 'heart', 'diamond']
const modeInfo = document.querySelector('#modeInfo')
let timerInterval = null

function randomizeCard() {
  let cardNumber = document.querySelector('#cardNumber')
  cardNumber.innerHTML = cardNumbers[Math.floor(Math.random() * cardNumbers.length)]

  let topIcon = document.querySelector('.top-icon').querySelector('i')
  let bottomIcon = document.querySelector('.bottom-icon').querySelector('i')

  topIcon.classList.remove(topIcon.classList[1])
  bottomIcon.classList.remove(bottomIcon.classList[1])

  let randomSuit = cardSuit[Math.floor(Math.random() * cardSuit.length)]
  topIcon.classList.add(randomSuit)
  bottomIcon.classList.add(randomSuit)
}

function stopTimer(){
  if(timerInterval != null) {
    clearInterval(timerInterval)

    timerInterval = null
  }
}

function renderRandomizeBtn() {
  stopTimer()
  modeInfo.innerHTML = '<button type="button" id="randomizeBtn">Press to change the card</button>'
  let randomizeBtn = document.querySelector('#randomizeBtn')
  randomizeBtn.addEventListener('click', () =>{randomizeCard()})
}

function renderTimer() {
  modeInfo.innerHTML = '<h1>Tick Tack</h1><div id="timer-display">00:10</div>'
  let timerDisplay = document.querySelector('#timer-display')
  let seconds = 10
  randomizeCard()
  timerInterval = setInterval(() => {
    seconds--

    if (seconds == 0){
      seconds = 10;
      randomizeCard()
    }

    timerDisplay.innerHTML = `00:${seconds < 10 ? '0' : ''}${seconds}`
  }, 1000)
}

window.onload = function() {
  //write your code here
  randomizeCard()
  let selectMode = document.querySelector('#selectMode')

  selectMode.addEventListener('change', () => {
    if (selectMode.value == 'buttonMode') renderRandomizeBtn()
    if (selectMode.value == 'timeMode') renderTimer()
    }
  )

}
