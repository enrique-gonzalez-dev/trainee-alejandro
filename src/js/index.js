const increase = document.getElementById('increase-button');
const decrease = document.getElementById('decrease-button');
const counter = document.getElementById('counter');

let count = 0;

increase.addEventListener('click', () => {
  if (count === 10) return;
  count++;
  counter.textContent = count;
});

decrease.addEventListener('click', () => {
  if (count === 0) return;
  count--;
  counter.textContent = count;
});


// // document DOM
// document.getElementsByClassName
// document.getElementsByTagName
// document.getElementById
// document.querySelector
// document.querySelectorAll

// addEventListener('click', () => {
//   // do something
// }

// addEventListener('change', () => {  
//   // do something
// }

// // Inputs
// .target
// .value
// .checked
// .disabled
// .focus()
// .blur()
// .select()

// // Identificadores
// css
// .element
// #element
// element