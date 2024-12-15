let display = document.getElementById('display');
let memory = 0;  // Memory to store value

// Function to append numbers to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        // Evaluate the expression in the display
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function for square root
function calculateSquareRoot() {
    let value = parseFloat(display.value);
    if (value >= 0) {
        display.value = Math.sqrt(value);
    } else {
        display.value = 'Error';  // Handle negative square root
    }
}

// Function for percentage
function calculatePercentage() {
    let value = parseFloat(display.value);
    display.value = value / 100;
}

// Memory functions
function memoryAdd() {
    memory += parseFloat(display.value);
}

function memorySubtract() {
    memory -= parseFloat(display.value);
}

function memoryRecall() {
    display.value = memory;
}

function memoryClear() {
    memory = 0;
}
