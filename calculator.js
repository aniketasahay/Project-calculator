console.log('im good');
let currentDisplay = '';
document.querySelector('#display').value = currentDisplay;

// document.querySelectorAll('.button').onclick=" currentDisplay= currentDisplay + button; "
const buttons = document.querySelectorAll('.button');
buttons.forEach(object =>{
  object.addEventListener("click", ()=>{
    buttonValue = object.value;
    currentDisplay = currentDisplay+ buttonValue;
    document.querySelector('#display').value = currentDisplay;
  });
});
document.querySelector('#clear').addEventListener("click",()=>{
  currentDisplay= '';
  document.querySelector('#display').value = currentDisplay;
});
// document.querySelector('#sub').addEventListener("click",()=>{
//   document.querySelector('#display').value = '';
// });
document.querySelector('#calc').addEventListener("click",()=>{
   try{
    currentDisplay= eval(currentDisplay);
  document.querySelector('#display').value = currentDisplay;
   } catch(error){
    document.querySelector('#display').value = "error";
   }
});

