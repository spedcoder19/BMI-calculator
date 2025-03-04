document.getElementById("submit").addEventListener("click", function () {
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const output = document.getElementById("output");

    
    if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
        output.textContent = "Please enter valid numbers for age, height, and weight.";
        output.style.color = "red";
        return;
    }

    
    const bmi = weight / (age * height);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

   
    output.textContent = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
    output.style.color = "black";
});
