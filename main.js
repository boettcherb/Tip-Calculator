// function called when the calculate button of the form is clicked
function formSubmitted() {
    // get the values of the inputs
    const payment = document.getElementById('payment').value;
    const percent = document.getElementById('rating').value;
    const people = document.getElementById('num-people').value;

    // calculate the tip amount from the input values
    // and round the number to the nearest cent
    const tip = calculateTip(payment, percent, people).toFixed(2);
    
    // get the div that will contain the answer text
    const answerText = document.getElementById('answer');

    // if there is more than one person paying the bill,
    // specify that the tip will be split as well
    if (people == 1) {
        answerText.textContent = `Tip Amount: $${tip}`;
    } else {
        answerText.textContent = `Tip Amount: $${tip} each.`;
    }

    // enlarge the height of the div that contains the answer
    // text so that the text fits properly
    document.getElementById('answer').style.height = "50px";
}

function calculateTip(payment, percent, people) {
    return payment * percent / people;
}