const userInput = document.querySelector(".input");
const generate = document.querySelector(".generate");
const answer = document.querySelector(".answer");


let answerValue = ''
const convert =(value)=>{
   for(let i =0; i < value.length; i++){
      answerValue += `0${value[i].charCodeAt(0).toString(2)},`
   }
   answer.innerHTML = answerValue
}

const validateInputs=()=>{
    if(!userInput.value.trim()){
      alert("please  input a value  in the input field")
      return
  }

   const value = userInput.value
  
   
  convert(value)
}

generate.addEventListener("click", validateInputs);

