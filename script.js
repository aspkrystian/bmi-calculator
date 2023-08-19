const btn = document.querySelector(".result");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");

function bmiFunction() {
    const result = (weight.value / ((height.value * height.value)/10000)).toFixed(2);
    document.getElementById("test").innerHTML = "Your BMI is: " + result;
}
btn.addEventListener("click", function () {
  bmiFunction();
});
