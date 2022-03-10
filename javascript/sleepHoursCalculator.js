
function addHours () {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let num3 = parseInt(document.getElementById("num3").value);
  let num4 = parseInt(document.getElementById("num4").value);
  let num5 = parseInt(document.getElementById("num5").value);
  let num6 = parseInt(document.getElementById("num6").value);
  let num7 = parseInt(document.getElementById("num7").value);
  document.getElementById("output").innerHTML = num1 + num2 + num3 + num4 + num5 + num6 + num7;
  advicePar();
  };
 

const resultDisplay = document.getElementById("result");
const input = document.getElementById("output");
let res;

const advicePar = () => {
  
  if(input.innerHTML >= 50 && input.innerHTML <= 56){
      res = "You have slept the right amount of hours!"
  }else if(input.innerHTML > 56){
      res = "You have slept to many hours! Don't waste your time sleeping."
  }else if(input.innerHTML < 50){
    res = "You haven't slept enough! Get some rest."
  }else{
    res = "Please fill in all the boxes."
  }
  resultDisplay.innerHTML = res;
};





 