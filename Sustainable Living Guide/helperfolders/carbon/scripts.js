function calculateFootprint() {
  const miles = parseFloat(document.getElementById('miles').value);
  const gramsCO2ePerMile = 404; // Adjust this value based on your calculation for CO2 emissions per mile

  if (isNaN(miles)) {
      alert("Please enter a valid number of miles.");
      return;
  }

  const totalGramsCO2e = miles * gramsCO2ePerMile;
  const totalKgCO2e = totalGramsCO2e / 1000;

  document.getElementById('footprint').innerText = totalKgCO2e.toFixed(2);
}
