function calculateAC() {
    const power = parseFloat(document.getElementById("power").value);
    const hours = parseFloat(document.getElementById("hours").value);
    const days = parseFloat(document.getElementById("days").value);
    const rate = parseFloat(document.getElementById("rate").value);

    if (isNaN(power) || isNaN(hours) || isNaN(days) || isNaN(rate)) {
        document.getElementById("result-ac").innerHTML = "<span style='color:red;'>Please fill all fields correctly!</span>";
        return;
    }

    const totalUnits = power * hours * days;
    const totalBill = totalUnits * rate;

    document.getElementById("result-ac").innerHTML = `
        Total Consumption: <b>${totalUnits.toFixed(2)} Units</b><br>
        Total Bill: <b>₹${totalBill.toFixed(2)}</b>
    `;
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}
