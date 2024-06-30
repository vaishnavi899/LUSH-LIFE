// Sample data (replace with actual product data)
const products = [
  { name: 'Organic Cotton T-Shirt', category: 'Clothing', sustainability: 'Organic, Fair Trade' },
  { name: 'Recycled Paper Notebook', category: 'Stationery', sustainability: 'Recycled' },
  { name: 'Bamboo Toothbrush', category: 'Personal Care', sustainability: 'Biodegradable' },
  { name: 'LED Desk Lamp', category: 'Electronics', sustainability: 'Energy Efficient' },
  { name: 'Reusable Stainless Steel Straw', category: 'Kitchen', sustainability: 'Reusable, Stainless Steel' },
];

function searchProducts() {
  const searchTerm = document.getElementById('search').value.toLowerCase().trim();
  const filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(searchTerm) ||
             product.category.toLowerCase().includes(searchTerm) ||
             product.sustainability.toLowerCase().includes(searchTerm);
  });

  displayResults(filteredProducts);
}

function displayResults(results) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No results found.</p>';
  } else {
      results.forEach(product => {
          const productElement = document.createElement('div');
          productElement.classList.add('product');

          productElement.innerHTML = `
              <h3>${product.name}</h3>
              <p><strong>Category:</strong> ${product.category}</p>
              <p><strong>Sustainability:</strong> ${product.sustainability}</p>
          `;

          resultsContainer.appendChild(productElement);
      });
  }
}
