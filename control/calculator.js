
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

console.log(calcInput);
// RESET CALULATOR INPUT
cancel.addEventListener('click', () => {
    calcInput.value = '0';
    topDisplay.innerHTML = '';  
});

// KEY INPUT
for(let i = 0; i < calcButton.length; i++){
    let specificButton = calcButton[i];

    specificButton.addEventListener('click', e => {
        const nameOfSign = specificButton.name;
/** Refractor to use chained if-else blocks to check all
 * possible outcomes
 */
        switch (nameOfSign) {
            case 'divide':
                let divide = '';
                if([' X ', ' + ', ' - '].indexOf(calcInput.value)){
                    return;
                }else{
                divide = `${calcInput.value} /`;
                topDisplay.innerHTML = divide;
                }
                break;

            case 'multiply':
                let multiply = '';
                multiply = `${calcInput.value} X`;
                topDisplay.innerHTML = multiply;
                break;

            case 'add':
                let add = '';
                add = `${calcInput.value} +`;
                topDisplay.innerHTML = add;
                break;

            case 'subtract':
                let subtract = '';
                subtract = `${calcInput.value} -`;
                topDisplay.innerHTML = subtract;
                break;
                
            default:
                break;
        }
        // if(['divide', 'multipy', 'add', 'subtract'].indexOf(nameOfSign) > -1){
        //     let sign = '';
        //         sign = `${calcInput.value} / `;
        //         topDisplay.innerHTML = sign; 
        // }else{
            if(calcInput.value === '0' && specificButton.value !== '.'){
                calcInput.value = specificButton.value;
            }else{
                calcInput.value = calcInput.value + specificButton.value;    
            }
        
    });
}


