// Progran statement
let numpoints = document.getElementById("output1");

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let score = 0;

  let answer1 = document.getElementById("input1").value.toLowerCase();
  if (answer1 === "5") {
    document.getElementById("outcome1").innerHTML = " Correct";
    score++;
    numpoints.innerHTML = score;
    document.getElementById("input1").style.borderColor = "green";
    document.getElementById("outcome1").style.color = "green";
  } else {
    document.getElementById("outcome1").innerHTML = " Incorrect";
    document.getElementById("input1").style.borderColor = "red";
    document.getElementById("outcome1").style.color = "red";
  }

  let answer2 = document.getElementById("input2").value.toLowerCase();
  if (answer2 === "36") {
    document.getElementById("outcome2").innerHTML = " Correct";
    score++;
    numpoints.innerHTML = score;
    document.getElementById("input2").style.borderColor = "green";
    document.getElementById("outcome2").style.color = "green";
  } else {
    document.getElementById("outcome2").innerHTML = " Incorrect";
    document.getElementById("input2").style.borderColor = "red";
    document.getElementById("outcome2").style.color = "red";
  }

  let answer3 = document.getElementById("input3").value.toLowerCase();
  if (
    answer3 === "0 chocolates" ||
    answer3 === "0" ||
    answer3 === "No more chocolates"
  ) {
    document.getElementById("outcome3").innerHTML = " Correct";
    score++;
    numpoints.innerHTML = score;
    document.getElementById("input3").style.borderColor = "green";
    document.getElementById("outcome3").style.color = "green";
  } else {
    document.getElementById("outcome3").innerHTML = " Incorrect";
    document.getElementById("input3").style.borderColor = "red";
    document.getElementById("outcome3").style.color = "red";
  }

  let answer4 = document.getElementById("input4").value.toLowerCase();
  if (answer4 === "9") {
    document.getElementById("outcome4").innerHTML = " Correct";
    score++;
    numpoints.innerHTML = score;
    document.getElementById("input4").style.borderColor = "green";
    document.getElementById("outcome4").style.color = "green";
  } else {
    document.getElementById("outcome4").innerHTML = " Incorrect";
    document.getElementById("input4").style.borderColor = "red";
    document.getElementById("outcome4").style.color = "red";
  }

  let total = score * 25;
  document.getElementById("output2").innerHTML = Math.round(total);

  if (total === 0) {
    document.getElementById("response").innerHTML = "Wow..";
  } else if (total === 25) {
    document.getElementById("response").innerHTML = "No";
  } else if (total === 50) {
    document.getElementById("response").innerHTML = "A disappointing effort";
  } else if (total === 75) {
    document.getElementById("response").innerHTML = "Alright";
  } else {
    document.getElementById("response").innerHTML = "Perfect";
  }
}
