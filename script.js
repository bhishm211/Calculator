// 🌙 Theme Toggle
function toggleTheme() {
  document.body.classList.toggle('dark');
  const current = localStorage.getItem('theme');
  if (current === 'dark') {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}

// Apply theme on load
window.onload = () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark');
  }
};

// ==========================
// 🔥 AC Bill Calculator
function calculateACBill() {
  const power = parseFloat(document.getElementById('ac-power').value);
  const hours = parseFloat(document.getElementById('ac-hours').value);
  const days = parseFloat(document.getElementById('ac-days').value);
  const rate = parseFloat(document.getElementById('ac-rate').value);

  if (isNaN(power) || isNaN(hours) || isNaN(days) || isNaN(rate)) {
    alert('Please fill all the fields correctly.');
    return;
  }

  const units = (power * hours * days) / 1000;
  const bill = units * rate;

  document.getElementById('ac-result').innerHTML = 
    `Total Units: <b>${units.toFixed(2)} kWh</b><br>
     Estimated Bill: <b>₹${bill.toFixed(2)}</b>`;
}

// ==========================
// 🔥 EMI Calculator
function calculateEMI() {
  const loan = parseFloat(document.getElementById('emi-loan').value);
  const rate = parseFloat(document.getElementById('emi-rate').value) / 12 / 100;
  const months = parseFloat(document.getElementById('emi-months').value);

  if (isNaN(loan) || isNaN(rate) || isNaN(months)) {
    alert('Please fill all the fields correctly.');
    return;
  }

  const emi = (loan * rate * Math.pow(1 + rate, months)) /
              (Math.pow(1 + rate, months) - 1);
  const total = emi * months;
  const interest = total - loan;

  document.getElementById('emi-result').innerHTML =
    `Monthly EMI: <b>₹${emi.toFixed(2)}</b><br>
     Total Payment: <b>₹${total.toFixed(2)}</b><br>
     Total Interest: <b>₹${interest.toFixed(2)}</b>`;
}

// ==========================
// 🔥 BMI Calculator
function calculateBMI() {
  const weight = parseFloat(document.getElementById('bmi-weight').value);
  const height = parseFloat(document.getElementById('bmi-height').value) / 100;

  if (isNaN(weight) || isNaN(height)) {
    alert('Please fill all the fields correctly.');
    return;
  }

  const bmi = weight / (height * height);
  let status = '';

  if (bmi < 18.5) status = 'Underweight';
  else if (bmi < 24.9) status = 'Normal';
  else if (bmi < 29.9) status = 'Overweight';
  else status = 'Obese';

  document.getElementById('bmi-result').innerHTML =
    `Your BMI: <b>${bmi.toFixed(1)}</b> (<b>${status}</b>)`;
}

// ==========================
// 🔥 Fuel Cost Calculator
function calculateFuel() {
  const distance = parseFloat(document.getElementById('fuel-distance').value);
  const mileage = parseFloat(document.getElementById('fuel-mileage').value);
  const price = parseFloat(document.getElementById('fuel-price').value);

  if (isNaN(distance) || isNaN(mileage) || isNaN(price)) {
    alert('Please fill all the fields correctly.');
    return;
  }

  const fuel = distance / mileage;
  const cost = fuel * price;

  document.getElementById('fuel-result').innerHTML =
    `Fuel Needed: <b>${fuel.toFixed(2)} Liters</b><br>
     Estimated Cost: <b>₹${cost.toFixed(2)}</b>`;
}

// ==========================
// 🔥 Age Calculator
function calculateAge() {
  const dob = new Date(document.getElementById('age-dob').value);
  const today = new Date();

  if (!dob || dob == 'Invalid Date') {
    alert('Please select a valid Date of Birth.');
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('age-result').innerHTML =
    `Your Age: <b>${years} Years, ${months} Months, ${days} Days</b>`;
}

// ==========================
// 🔥 Pregnancy Due Date Calculator
function calculatePregnancy() {
  const lmp = new Date(document.getElementById('pregnancy-lmp').value);

  if (!lmp || lmp == 'Invalid Date') {
    alert('Please select a valid Last Menstrual Period date.');
    return;
  }

  const dueDate = new Date(lmp);
  dueDate.setDate(dueDate.getDate() + 280);

  document.getElementById('pregnancy-result').innerHTML =
    `Estimated Due Date: <b>${dueDate.toDateString()}</b>`;
}

// ==========================
// 🔥 YouTube Income Calculator
function calculateYoutubeIncome() {
  const views = parseFloat(document.getElementById('yt-views').value);
  const rpm = parseFloat(document.getElementById('yt-rpm').value);

  if (isNaN(views) || isNaN(rpm)) {
    alert('Please fill all the fields correctly.');
    return;
  }

  const income = (views / 1000) * rpm;

  document.getElementById('yt-result').innerHTML =
    `Estimated Earnings: <b>₹${income.toFixed(2)}</b>`;
}
