function calculateThirdSide() {
  var firstSide = document.getElementById("firstNumber").value;

  var secondSide = document.getElementById("secondNumber").value;
  var thirdSide = Math.sqrt(firstSide * firstSide + secondSide * secondSide);

  document.getElementById("finalAnswer").value = thirdSide;
}