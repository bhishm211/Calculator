// =========== Theme Toggle ===========
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// =========== AC Bill Calculator ===========
function calculateACBill() {
  const watt = parseFloat(document.getElementById('ac-watt').value);
  const hours = parseFloat(document.getElementById('ac-hours').value);
  const days = parseFloat(document.getElementById('ac-days').value);
  const unitRate = parseFloat(document.getElementById('ac-unit-rate').value);

  if (isNaN(watt) || isNaN(hours) || isNaN(days) || isNaN(unitRate)) {
    alert("Please fill all fields correctly!");
    return;
  }

  const totalUnits = (watt / 1000) * hours * days;
  const totalBill = totalUnits * unitRate;

  document.getElementById('ac-result').innerText = 
    `Total Units: ${totalUnits.toFixed(2)} kWh | Total Bill: ₹${totalBill.toFixed(2)}`;
}

// =========== Fuel Cost Calculator ===========
function calculateFuelCost() {
  const distance = parseFloat(document.getElementById('fuel-distance').value);
  const mileage = parseFloat(document.getElementById('fuel-mileage').value);
  const price = parseFloat(document.getElementById('fuel-price').value);

  if (isNaN(distance) || isNaN(mileage) || isNaN(price)) {
    alert("Please fill all fields correctly!");
    return;
  }

  const liters = distance / mileage;
  const cost = liters * price;

  document.getElementById('fuel-result').innerText =
    `Fuel Needed: ${liters.toFixed(2)} Liters | Total Cost: ₹${cost.toFixed(2)}`;
}

// =========== BMI Calculator ===========
function calculateBMI() {
  const weight = parseFloat(document.getElementById('bmi-weight').value);
  const height = parseFloat(document.getElementById('bmi-height').value) / 100;

  if (isNaN(weight) || isNaN(height) || height === 0) {
    alert("Please fill all fields correctly!");
    return;
  }

  const bmi = weight / (height * height);
  let category = '';

  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';

  document.getElementById('bmi-result').innerText =
    `Your BMI is ${bmi.toFixed(2)} (${category})`;
}

// =========== EMI Calculator ===========
function calculateEMI() {
  const principal = parseFloat(document.getElementById('emi-principal').value);
  const rate = parseFloat(document.getElementById('emi-rate').value) / 12 / 100;
  const tenure = parseFloat(document.getElementById('emi-tenure').value);

  if (isNaN(principal) || isNaN(rate) || isNaN(tenure)) {
    alert("Please fill all fields correctly!");
    return;
  }

  const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
  const total = emi * tenure;
  const interest = total - principal;

  document.getElementById('emi-result').innerText =
    `EMI: ₹${emi.toFixed(2)} | Total Interest: ₹${interest.toFixed(2)} | Total Payment: ₹${total.toFixed(2)}`;
}

// =========== Pregnancy Due Date ===========
function calculateDueDate() {
  const lmp = document.getElementById('preg-lmp').value;

  if (!lmp) {
    alert("Please select your last period date!");
    return;
  }

  const lmpDate = new Date(lmp);
  lmpDate.setDate(lmpDate.getDate() + 280);

  const dueDate = lmpDate.toDateString();

  document.getElementById('preg-result').innerText =
    `Your Estimated Due Date: ${dueDate}`;
}

// =========== YouTube Income ===========
function calculateYTIncome() {
  const views = parseFloat(document.getElementById('yt-views').value);
  const rpm = parseFloat(document.getElementById('yt-rpm').value);

  if (isNaN(views) || isNaN(rpm)) {
    alert("Please fill all fields correctly!");
    return;
  }

  const income = (views / 1000) * rpm;

  document.getElementById('yt-result').innerText =
    `Estimated Income: ₹${income.toFixed(2)}`;
}
