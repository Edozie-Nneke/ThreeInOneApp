
const topDisplay = document.getElementById('top-display');
const calcInput = document.getElementById('calc-input');

const calcButton = document.querySelectorAll('.calc-button');

const cancel = document.getElementById('cancel');
const divide = document.getElementById('divide');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const multiply = document.getElementById('multiply');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const subtract = document.getElementById('subtract');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const add = document.getElementById('add');
const dot = document.getElementById('dot');
const zero = document.getElementById('zero');
const equal = document.getElementById('equal');


// RESET CALULATOR INPUT
cancel.addEventListener('click', () => {
    calcInput.value = '0';  
});

// KEY INPUT
for(let i = 0; i < calcButton.length; i++){
    let specificButton = calcButton[i];

    specificButton.addEventListener('click', e => {
        calcInput.value = calcInput.value + specificButton.value;
        console.log(specificButton.name);
    })
}


