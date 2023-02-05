var guess = prompt("Enter a whole number:");
var guessNumber = parseInt(guess);

if (isNaN(guess) || guess == "") {
    alert("Invalid input!");
    window.location.reload(false)
}

document.body.style.background = "black";
document.body.style.color = "white";
document.body.style.fontFamily = "Courier";
document.body.style.textAlign = "center";

var tempNumber = guessNumber;
var origNumber = guessNumber;

guessNumber += 9
document.write("I added 9 to " + tempNumber + ". The new number is " + guessNumber + ". <br>");
tempNumber = guessNumber;

guessNumber *= 2;
document.write("I multiplied " + tempNumber + " by 2. " + " The new number is " + guessNumber + ". <br>");
tempNumber = guessNumber;

guessNumber -= 4;
document.write("I subtracted 4 from " + tempNumber + "." + " The new number is " + guessNumber + ". <br>");
tempNumber = guessNumber;

guessNumber = guessNumber / 2;
document.write("I divided " + tempNumber + " by 2. " + " The new number is " + guessNumber + ". <br>");
tempNumber = guessNumber;

document.write("I subtracted your original number of " + origNumber + " from " + guessNumber + ". <br>");
guessNumber -= origNumber;

document.write("<h3>Your final number is " + guessNumber + ". </h3>");
document.write("<h1> Thank you for playing Number Trick! <br>");
document.write("<a href = \"javascript:window.location.reload(false)\"> <br> Play Again? </a></h1>");
