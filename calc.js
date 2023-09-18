let firstNumber = null;
let calc = '';
let sign = null;
let secondNumber = null;
let value = '';


const display = document.querySelector('.display');

const numbers = document.querySelectorAll('.num');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (calc !== '') {
            value += number.value;
            if (value.length > 9) {
                display.textContent = value.slice(0, 9) + '...';
            }else{
                display.textContent = value;
            };
            calc = ''
        }else{
            value += number.value;
            if (value.length > 9) {
                display.textContent = value.slice(0, 9) + '...';
            }else{
                display.textContent = value;
            };
        }

    });
});
  

const symbs = document.querySelectorAll('.op');
symbs.forEach(sym => {
    sym.addEventListener('click', () => {
        if (firstNumber === null) {
            firstNumber = parseFloat(value);
            sign = sym.value;
            value = '';
            secondNumber = null;
        }else {
            if (checker(value)) { 
                secondNumber = parseFloat(value);
                calc = operator(firstNumber, secondNumber, sign)
                if (calc.length > 9) {
                    display.textContent = calc.slice(0, 9) + '...';
                }else{
                    display.textContent = calc;
                };
                firstNumber = calc;
                value = '';
                sign = sym.value
            }
        }
        
    })
});

function clearContent () {
    display.textContent = '0';
    value = '';
    firstNumber = null;
    secondNumber = null;
    sign = null;    
}

function operator (a, b, sign) {
    let eq = null;
    if (sign === "+") {
        eq = a + b;
    } else if (sign === '-') {
        eq = a - b;
    } else if (sign === '*') {
        eq = a * b;
    } else if (sign === '/') {
        if (b === 0) {
            return 'Error';
        }
        eq = (a / b).toFixed(5);
    }
    return eq;
}

function checker (num) {
    return (num !== null && num !== '');
} 
        

const clear = document.querySelector('.spec.clr');
clear.addEventListener('click', clearContent);

const result = document.querySelector('.spec.eq');
result.addEventListener('click', () => {
    if (checker(value) && firstNumber !== null) {
        secondNumber = parseFloat(value);
        calc = operator(firstNumber, secondNumber, sign);
        if (calc.length > 9) {
            display.textContent = calc.slice(0, 9) + '...';
        }else{
            display.textContent = calc;
        };
        firstNumber = calc;
        value = '';
    }
});


