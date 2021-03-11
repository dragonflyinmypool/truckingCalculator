

function calculate(e) {
	if (e.preventDefault) e.preventDefault();

  var x = document.getElementById("calculator");
  var amounts = [];
  var i;
  for (i = 0; i < x.length-1; i++) {
    amounts.push(x.elements[i].value);
  }

  displayResults(amounts)	
  return false;

}

var form = document.getElementById('calculator');
if (form.attachEvent) {
    form.attachEvent("submit", calculate);
} else {
    form.addEventListener("submit", calculate);
}

function displayResults(amounts) {
	let resultAmount = amounts[0] * amounts[1] * amounts[2];
	let n = resultAmount;
	let resultsArray = (""+n).split("");

	if (resultsArray.length > 3) {
		resultsArray.splice(resultsArray.length-3,0,",")
	}
  
	resultAmount = resultsArray.join("");

	console.log(resultsArray)


	document.getElementById("resultsSpan").innerText = resultAmount
}