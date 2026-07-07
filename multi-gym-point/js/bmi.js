const bmiForm = document.querySelector(".bmi-form");
const bmiResult = document.querySelector("#bmi-result");

bmiForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const height = Number(document.querySelector("#height").value) / 100;
  const weight = Number(document.querySelector("#weight").value);

  if (!height || !weight) {
    bmiResult.textContent = "Please enter both height and weight.";
    return;
  }

  const bmi = weight / (height * height);
  let status = "Normal";
  if (bmi < 18.5) status = "Underweight";
  if (bmi >= 25) status = "Overweight";
  if (bmi >= 30) status = "Obese";

  bmiResult.textContent = `Your BMI is ${bmi.toFixed(1)} - ${status}.`;
});
