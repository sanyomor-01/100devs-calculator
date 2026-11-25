const display = document.querySelector('#display')
const buttons = document.querySelectorAll('#calculator button')


class Calculator {
    constructor() {
        this.currentValue = 0
    }


    add(number) {
        this.currentValue += number
    }

    subtract(number) {
        this.currentValue -= number;
    }

    multiply(number) {
        this.currentValue *= number
    }

    divide(number) {
        if (number === 0) {
            console.error('Cannot divide by zero')
            returnv
        }

        this.currentValue /= number
    }

    clear() {
        this.currentValue = 0;
    }
}



let calc = new Calculator
let operator = null
let firstOperand = null


buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent


        if (!isNaN(value) || value === ".") {
            if (value === "." && display.textContent.includes(".")) return;

            if (display.textContent === '0' && value !== ".") {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        }
        else if (['+', '-', '*', '/'].includes(value)) {
            firstOperand = parseFloat(display.textContent);
            operator = value;
            display.textContent = '0';
        }


        else if (value === '=') {
            let secondOperand = parseFloat(display.textContent);

            switch (operator) {
                case '+': calc.currentValue = firstOperand; calc.add(secondOperand); break;
                case '-': calc.currentValue = firstOperand; calc.subtract(secondOperand); break;
                case '*': calc.currentValue = firstOperand; calc.multiply(secondOperand); break;
                case '/': calc.currentValue = firstOperand; calc.divide(secondOperand); break;
            }

            display.textContent = calc.currentValue;
            operator = null;
        }

        else if (value === 'C') {
            calc.clear();
            firstOperand = null;
            operator = null;
            display.textContent = '0';
        }


    })

});



