//Task 1

const firstName = "Мария";
const lastName = "Будаева";
const age = 20;

console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет`);

//Task 2

const city = "Алматы";
console.log("Я родом из города " + city);

//Task 3

const password = "jdfsiogj";
let hasAccess;
if (password === "") {
  hasAccess = false;
} else {
  hasAccess = true;
}

console.log(password, hasAccess);

//Task 4

const isMember = false;
const isMemberString = isMember.toString();

console.log(isMemberString, typeof isMemberString);

//Task 5

const cartItems = 0;
const isCartFull = Boolean(cartItems);

console.log(isCartFull);
// корзина пустая, потому что, когда мы конвертируем такие значения, как 0, '', null, undefined, они отображаются как false, все остальные значения отображаются как true

//Task 6

const averageScore = 89.75695;
const averageScoreRounded = averageScore.toFixed(1);

console.log(averageScoreRounded);

//Task 7

const greetingMessage =
  "      Приветствуем вас в мире программирования!        ";
const greetingMessageTrimmed = greetingMessage.trim();
console.log(greetingMessageTrimmed);
console.log(greetingMessageTrimmed.toUpperCase());
console.log(greetingMessageTrimmed.includes("программирования"));

//Task 8

const enteredAge = prompt("Please enter your age");
if (enteredAge === "" || enteredAge === null) {
  alert("Please enter something");
} else if (isNaN(enteredAge)) {
  alert("Please enter a number");
} else if (enteredAge < 18) {
  alert("You have to be at least 18 years old to enter this website");
} else {
  alert("Welcome!");
}

//Task 9

const num = 5;
const guessedNum = prompt("Enter a number between 1 and 10");
if (guessedNum == num) {
  alert("You guessed it right!");
} else if (guessedNum > num) {
  alert("The number you guessed is too big");
} else {
  alert("The number you guessed is too small");
}

//Task 10

const dayTime = prompt(
  "What time of the day is it? (morning, afternoon, evening)",
);

if (dayTime === "" || dayTime === null) {
  alert("Please enter something");
} else if (!isNaN(dayTime)) {
  alert("Please enter a string");
} else if (dayTime.toLowerCase() === "morning") {
  alert("Would you like a coffee?");
} else if (dayTime.toLowerCase() === "afternoon") {
  alert("Would you like tea?");
} else if (dayTime.toLowerCase() === "evening") {
  alert("Would you like hot chocolate?");
} else {
  alert("Please enter either 'morning', 'afternoon' or 'evening'");
}
