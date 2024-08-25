function generateRandomDigit() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var randomDigit = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result").innerHTML = `The random digit generated with in the range of ${min} and ${max} is: ${randomDigit}`;
}  