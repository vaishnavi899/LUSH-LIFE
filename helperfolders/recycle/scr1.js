// Sample data (replace with actual recycling information)
const recyclingInfo = {
  'paper': 'Paper can be recycled at your local recycling center. Make sure it is clean and dry.',
  'plastic bottle': 'Plastic bottles can be recycled at most recycling centers. Remove caps and rinse thoroughly.',
  'glass bottle': 'Glass bottles should be rinsed and can be recycled at designated glass recycling points.',
  'aluminum can': 'Aluminum cans can be recycled at your local recycling center. Crush cans to save space.',
  'cardboard': 'Cardboard can be recycled as long as it is clean and dry. Flatten boxes before recycling.',
  // Add more items as needed
};

function searchItem() {
  const searchTerm = document.getElementById('search').value.toLowerCase().trim();
  const result = recyclingInfo[searchTerm];

  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (result) {
      resultsContainer.innerHTML = `<p>${result}</p>`;
  } else {
      resultsContainer.innerHTML = '<p>No recycling information found for this item.</p>';
  }
}
