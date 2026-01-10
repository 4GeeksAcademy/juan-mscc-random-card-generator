import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const cardNumbers = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]
  const cardSuit = ['spade', 'club', 'heart', 'diamond']
  
  let cardNumber = document.querySelector('#cardNumber')
  cardNumber.innerHTML = cardNumbers[Math.floor(Math.random() * cardNumbers.length)]

  let topIcon = document.querySelector('.top-icon').querySelector('i')
  let bottomIcon = document.querySelector('.bottom-icon').querySelector('i')

  let randomSuit = cardSuit[Math.floor(Math.random() * cardSuit.length)]
  console.log(randomSuit)
  topIcon.classList.add(randomSuit)
  bottomIcon.classList.add(randomSuit)
};
