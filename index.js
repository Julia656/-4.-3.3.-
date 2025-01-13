const number = prompt("Введіть п'ятизначне число:");
if (number.length === 5 && !isNaN(number)) {
    
    console.log(number.split('').join(' '));
} else {
    console.log("Будь ласка, введіть коректне п'ятизначне число.");
}