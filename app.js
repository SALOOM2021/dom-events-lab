/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button');
const display = document.querySelector(".display");

/*-------------------------------- Variables --------------------------------*/

let number1 = "";
let number2 = "";
let result = "";
let operator = "";
let wholeInput = "";

/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let input = event.target.innerText;

        // to capture any numbers
        if (input >= "0" && input <= "9") {
            wholeInput += input;
            display.textContent = number1 + "" + operator + "" + wholeInput;
        }

        // to capture operators
        else if (input === "+" || input === "-" || input === "*" || input === "/") {
            if (number1 === "") {
                number1 = wholeInput;
                operator = input;
                wholeInput = "";
                display.textContent = number1 + " " + operator;
            }
        }

        // to capture equal sign and show the result
        else if (input === "=") {
            number2 = wholeInput;
            calculate();
            display.textContent = result;

        }
        // to clear the operation
        else if (input === "C") {
            number1 = "";
            number2 = "";
            result = "";
            operator = "";
            wholeInput = "";
            display.textContent = "0";
        }
    });
});

/*-------------------------------- Functions --------------------------------*/

function calculate() {

    // convert numbers from string to actual numbers
    number1 = Number(number1);
    number2 = Number(number2);

    if (operator === "+") {
        result = number1 + number2;

    } else if (operator === "-") {
        result = number1 - number2;

    } else if (operator === "*") {
        result = number1 * number2;

    } else if (operator === "/") {
        if (number2 === 0) {
            result = "Error";
        } else {
            result = number1 / number2;
        }
    }
    // convert numbers to string again 
    result = result.toString();
}