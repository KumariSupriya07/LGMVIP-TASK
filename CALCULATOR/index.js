// JavaScript functions

    function appendToDisplay(value) {
        document.getElementById('display').value += value;
        document.getElementById('display').style.color = 'red'; // Change display text color
    }

    function calculate() {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
        document.getElementById('display').style.color = 'black'; // Reset display text color
    }
