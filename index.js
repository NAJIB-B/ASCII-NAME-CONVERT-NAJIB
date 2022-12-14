const userInput = document.querySelector(".input");
const generate = document.querySelector(".generate");
const answer = document.querySelector(".answer");


let answerValue = ''
const convert =(value)=>{
   for(let i =0; i < value.length; i++){
      answerValue += `${value[i]}--0${value[i].charCodeAt(0).toString(2)}`
  
   }
   answer.innerHTML = answerValue
}

const validateInputs=()=>{
    if(!userInput.value.trim()){
      alert("please  input a value  in the input field")
      return
  }

   const value = userInput.value

   let letters = /^[A-Za-z]+$/;

   if(!value.match(letters))
   {
      alert("please  input only letters")
    return 
   }
   
  convert(value)
}

generate.addEventListener("click", validateInputs);

