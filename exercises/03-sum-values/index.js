// adding the function to the window makes it globally available
const stringA = document.querySelector("#firstNumber");
const stringB = document.querySelector("#secondNumber");

const resultNumber = document.querySelector("#resultNumber");
const button = document.querySelector("#button");

button.onclick = function () {
	let A = parseInt(stringA.value);
	let B = parseInt(stringB.value);

	document.getElementById("resultNumber").value = A + B
}