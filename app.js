let max = parseInt(prompt("Enter the maximum number!"));
while (!max) {
    Max = parseInt(prompt("Enter a valid number!"));
}
const num = Math.floor(Math.random() * max) + 1;

let guess = parseInt(prompt("Enter your first guess:"));
let attempts = 1;

while (parseInt(guess) !== num) {
    if (guess === 'q') { break; }
    attempts++;
    if (guess > num) {
        guess = prompt('Too high! guess again:');
    }
    else {
        guess = prompt('Too low! Guess again:');
    }
}
if (guess === 'q') {
    console.log('Ok, Exiting')
} else {
    console.log('Winner!!! It took you ' + attempts + ' guesses')
}