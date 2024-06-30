document.getElementById('energyForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  const date = document.getElementById('date').value;
  const usage = parseFloat(document.getElementById('usage').value);

  if (date && !isNaN(usage)) {
      addUsageEntry(date, usage);
  } else {
      alert('Please enter a valid date and energy usage.');
  }

  document.getElementById('energyForm').reset();
});

function addUsageEntry(date, usage) {
  const usageList = document.getElementById('usageList');
  const listItem = document.createElement('li');

  listItem.innerHTML = `<strong>Date:</strong> ${date}, <strong>Usage:</strong> ${usage.toFixed(2)} kWh`;
  usageList.appendChild(listItem);
}
