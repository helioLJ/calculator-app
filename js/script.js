const btnTheme1 = document.getElementById('btn-theme-1');
const btnTheme2 = document.getElementById('btn-theme-2');
const btnTheme3 = document.getElementById('btn-theme-3');
const themeBar = document.getElementById('theme-bar');
const themeCircle = document.getElementById('theme-circle');
const result = document.querySelector('.result');
const keypad = document.querySelector('.digits');
const btn1 = document.querySelectorAll('.btn-style-1');
const btn2 = document.querySelectorAll('.btn-style-2');
const btn3 = document.querySelectorAll('.btn-style-3');
const textColor = document.querySelectorAll('.text');

const changeTheme1 = () => {
    themeCircle.style.left = "3px";
    themeCircle.style.backgroundColor = "var(--red)";
    themeBar.style.backgroundColor = "var(--very-dark-desaturated-blue2)";
    
    document.body.style.backgroundColor = "var(--very-dark-desaturated-blue1)";
    result.style.backgroundColor = "var(--very-dark-desaturated-blue3)";
    keypad.style.backgroundColor = "var(--very-dark-desaturated-blue2)";
    
    btn1.forEach((btn) => {
        btn.style.backgroundColor = "var(--light-grayish-orange)";
        btn.style.boxShadow = "0px 4px 0px -1px var(--grayish-orange)";
        
        btn.style.color = "var(--very-dark-grayish-blue)";
    })

    btn2.forEach((btn) => {
        btn.style.backgroundColor = "var(--desaturated-dark-blue1)";
        btn.style.boxShadow = "0px 4px 0px -1px var(--desaturated-dark-blue2)";
        
        btn.style.color = "var(--white)";
    })

    btn3.forEach((btn) => {
        btn.style.backgroundColor = "var(--red)";
        btn.style.boxShadow = "0px 4px 0px -1px var(--dark-red)";
        
        btn.style.color = "var(--white)";
    })

    textColor.forEach((txt) => {
        txt.style.color = "var(--white)";
    })
}

const changeTheme2 = () => {
    themeCircle.style.left = "16.5px";
    themeCircle.style.backgroundColor = "var(--orange)";
    themeBar.style.backgroundColor = "var(--grayish-red)";
    
    document.body.style.backgroundColor = "var(--light-gray)";
    result.style.backgroundColor = "var(--very-light-gray)";
    keypad.style.backgroundColor = "var(--grayish-red)";
    
    btn1.forEach((btn) => {
        btn.style.backgroundColor = "var(--light-grayish-yellow)";
        btn.style.boxShadow = "0px 4px 0px -1px var(--dark-grayish-orange)";
        
        btn.style.color = "var(--very-dark-grayish-yellow)";
    })
    
    btn2.forEach((btn) => {
        btn.style.backgroundColor = "var(--dark-moderate-cyan)";
        btn.style.boxShadow = "0px 4px 0px -1px var(--very-dark-cyan)";
        
        btn.style.color = "var(--white)";
    })
    
    btn3.forEach((btn) => {
        btn.style.backgroundColor = "var(--orange)";
        btn.style.boxShadow = "0px 4px 0px -1px var(--dark-orange)";
        
        btn.style.color = "var(--white)";
    })
    
    textColor.forEach((txt) => {
        txt.style.color = "var(--very-dark-grayish-yellow)";
    })
}

const changeTheme3 = () => {
    themeCircle.style.left = "32px";
    themeCircle.style.backgroundColor = "var(--pure-cyan)";
    themeBar.style.backgroundColor = "var(--very-dark-violet2)";
    
    document.body.style.backgroundColor = "var(--very-dark-violet)";
    result.style.backgroundColor = "var(--very-dark-violet2)";
    keypad.style.backgroundColor = "var(--very-dark-violet2)";
    
    btn1.forEach((btn) => {
        btn.style.backgroundColor = "var(--very-dark-violet)";
        btn.style.boxShadow = "0px 4px 0px -1px var(--dark-magenta)";
        
        btn.style.color = "var(--light-yellow)";
    })
    
    btn2.forEach((btn) => {
        btn.style.backgroundColor = "var(--dark-violet)";
        btn.style.boxShadow = "0px 4px 0px -1px var(--vivid-magenta)";

        btn.style.color = "var(--white)";
    })
    
    btn3.forEach((btn) => {
        btn.style.backgroundColor = "var(--pure-cyan)";
        btn.style.boxShadow = "0px 4px 0px -1px var(--soft-cyan)";
        
        btn.style.color = "var(--very-dark-blue)";
    })
    
    textColor.forEach((txt) => {
        txt.style.color = "var(--light-yellow)";
    })
}

btnTheme1.addEventListener('click', changeTheme1);
btnTheme2.addEventListener('click', changeTheme2);
btnTheme3.addEventListener('click', changeTheme3);

class Calculator {
    constructor(previousOperandTextElButton, currentOperandTextElButton) {
        this.previousOperandTextElButton = previousOperandTextElButton
        this.currentOperandTextElButton = currentOperandTextElButton
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return // will stop the function if the currendOperand already have a .
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') {  // do more than 1 operation without click =
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation // the result of our operation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case 'x':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if(decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElButton.innerText =
         this.getDisplayNumber(this.currentOperand)
        if(this.operation != null) { // if we have a operation
            this.previousOperandTextElButton.innerText =
             `${this.previousOperand} ${this.operation}`
        } else {
            this.previousOperandTextElButton.innerText = ''
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const previousOperandTextElButton = document.querySelector('[data-previous-operand]');
const currentOperandTextElButton = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElButton, currentOperandTextElButton)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

resetButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})