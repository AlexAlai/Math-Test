let min = 1
let max = 9
let correct = 0
let incorrect = 0
document.querySelector(".mul").onclick = function () {
  let num1 = getRandomIntInclusive(min, max);
  let num2 = getRandomIntInclusive(min, max);
  let answer = num1 * num2
  let useranswer = prompt(`${num1}*${num2}=`, "")
  checkanswer(useranswer, answer)
}
document.querySelector(".div").onclick = function () {
  let num1 = getRandomIntInclusive(min, max);
  let num2 = getRandomIntInclusive(min, max);
  let answer = num1 / num2
  let useranswer = prompt(`${num1}/${num2}=`, "")
  checkanswer(useranswer, answer)
}
document.querySelector(".add").onclick = function () {
  let num1 = getRandomIntInclusive(min, max);
  let num2 = getRandomIntInclusive(min, max);
  let answer = num1 + num2
  let useranswer = prompt(`${num1}+${num2}=`, "")
  checkanswer(useranswer, answer)
}
document.querySelector(".sub").onclick = function () {
  let num1 = getRandomIntInclusive(min, max);
  let num2 = getRandomIntInclusive(min, max);
  let answer = num1 - num2
  let useranswer = prompt(`${num1}-${num2}=`, "")
  checkanswer(useranswer, answer)
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
function checkanswer(useranswer, answer) {
  if (useranswer == answer) {
    alert("your answer is correct")
    correct += 1
  } else {
    alert("your answer is incorrect")
    incorrect += 1
  }
}
document.getElementById("level").onchange = function () {
  let level = document.getElementById("level").value
  console.log(level)
  // if (level == "easy") {
  //   min = 1
  //   max = 9
  // }
  // else if (level == "medium") {
  //   min = 10
  //   max = 99
  // }
  // else if (level == "hard") {
  //   min = 100
  //   max = 999
  // }
  // else if (level == "veryhard") {
  //   min = 1000
  //   max = 9999
  // }
  // else  if (level=="physiclyimpossible"){
  //   min=10000
  //   max=99999
  // }
  switch(level){
    case "easy": {
       
      min=1
      max=9
      break;
    }
    case "medium":{
      min=10
      max=99

      break;
    }
    case "hard":{
      min=100
      max=999

      break;
    }
    case "veryhard":{
      min=1000
      max=9999

      break;
    }
    case "physiclyimpossible":{
      min=10000
      max=99999

      break;
    }
  }
  

  console.log(min,max)
}
document.querySelector(".stats").onclick=function(){
  alert (`correct:${correct}\nincorrect:${incorrect}`)
}
document.querySelector(".reset").onclick=function(){
  correct=0
  incorrect=0
}
