document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks to show/hide sections
    const homeLink = document.getElementById('home-link');
    const tipsLink = document.getElementById('tips-link');
    const resourcesLink = document.getElementById('resources-link');
    const toolsLink = document.getElementById('tools-link');
  
    const tipsSection = document.getElementById('tips');
    const resourcesSection = document.getElementById('resources');
    const toolsSection = document.getElementById('tools');
  
    homeLink.addEventListener('click', (event) => {
      event.preventDefault();
      hideAllSections();
    });
  
    tipsLink.addEventListener('click', (event) => {
      event.preventDefault();
      hideAllSections();
      tipsSection.classList.remove('hidden');
      window.scrollTo({ top: tipsSection.offsetTop, behavior: 'smooth' });
    });
  
    resourcesLink.addEventListener('click', (event) => {
      event.preventDefault();
      hideAllSections();
      resourcesSection.classList.remove('hidden');
      window.scrollTo({ top: resourcesSection.offsetTop, behavior: 'smooth' });
      displayResources(); // Populate resources when shown
    });
  
    toolsLink.addEventListener('click', (event) => {
        event.preventDefault();
        hideAllSections();
        toolsSection.classList.remove('hidden');
        window.scrollTo({ top: toolsSection.offsetTop, behavior: 'smooth' });
    });

    // Function to hide all sections except the header
    function hideAllSections() {
      tipsSection.classList.add('hidden');
      resourcesSection.classList.add('hidden');
      toolsSection.classList.add('hidden');
    }
  
    // Tips section functionality
    const tipsContainer = document.getElementById('tips-container');
    const recyclingBtn = document.getElementById('recycling-btn');
    const energyBtn = document.getElementById('energy-btn');
    const shoppingBtn = document.getElementById('shopping-btn');
  
    // Example tips data
    const tipsData = {
      recycling: [
        "Reduce, Reuse, Recycle - always think about how you can repurpose items before throwing them away.",
        "Compost your organic waste to reduce landfill use and create nutrient-rich soil.",
        "Use separate bins for different types of recyclables to make sorting easier."
      ],
      energy: [
        "Switch to LED bulbs which use less energy and last longer.",
        "Unplug electronic devices when not in use to save energy.",
        "Consider installing solar panels to reduce your dependency on non-renewable energy sources."
      ],
      shopping: [
        "Buy locally-produced goods to reduce carbon footprint from transportation.",
        "Opt for products with minimal packaging to reduce waste.",
        "Choose second-hand items over new ones to promote reuse."
      ]
    };
  
    // Function to display tips based on the selected category
    function displayTips(category) {
      tipsContainer.innerHTML = ''; // Clear existing tips
      tipsData[category].forEach(tip => {
        const tipElement = document.createElement('div');
        tipElement.classList.add('tip');
        tipElement.textContent = tip;
        tipsContainer.appendChild(tipElement);
      });
    }
  
    // Display tips for recycling when the recycling button is clicked
    recyclingBtn.addEventListener('click', () => {
      displayTips('recycling');
    });
  
    // Display tips for energy saving when the energy button is clicked
    energyBtn.addEventListener('click', () => {
      displayTips('energy');
    });
  
    // Display tips for sustainable shopping when the shopping button is clicked
    shoppingBtn.addEventListener('click', () => {
      displayTips('shopping');
    });
  
    // Resources Section
    const resourcesContainer = document.getElementById('resources-container');
  
    // Sample data for resources (replace with actual data)
    const resourcesData = [
      {
        title: 'Local Recycling Centers',
        description: 'Find nearby centers for recycling different materials.'
      },
      {
        title: 'Thrift Stores',
        description: 'Discover thrift stores in your area for second-hand shopping.'
      },
      {
        title: 'Eco-friendly Product Retailers',
        description: 'Explore stores offering sustainable and eco-friendly products.'
      },
      {
        title: 'Articles on Sustainable Practices',
        description: 'Read informative articles on reducing environmental impact.'
      },
      {
        title: 'Videos on Sustainable Living',
        description: 'Watch videos that promote sustainable living practices.'
      },
      {
        title: 'Guides on Green Living',
        description: 'Access guides that help you adopt green and sustainable habits.'
      }
    ];
  
    // Function to display resources
    function displayResources() {
      resourcesContainer.innerHTML = ''; // Clear existing resources
      resourcesData.forEach(resource => {
        const resourceElement = document.createElement('div');
        resourceElement.classList.add('resource');
  
        const titleElement = document.createElement('h3');
        titleElement.textContent = resource.title;
  
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = resource.description;
  
        resourceElement.appendChild(titleElement);
        resourceElement.appendChild(descriptionElement);
  
        resourcesContainer.appendChild(resourceElement);
      });
    }
  
    // Tools section functionality
    const toolBoxes = document.querySelectorAll('.tool-box');
  
    // Add event listeners for hover effect on tool boxes
    toolBoxes.forEach(toolBox => {
      const toolBoxContent = toolBox.querySelector('.tool-box-content');
  
      toolBox.addEventListener('mouseover', () => {
        toolBoxContent.style.display = 'block';
      });
  
      toolBox.addEventListener('mouseout', () => {
        toolBoxContent.style.display = 'none';
      });
    });
  
    // Example: Handling form submission (you can adjust this as per your form)
    const form = document.querySelector('form[name="submit-to-google-sheet"]');
    form.addEventListener('submit', async function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      const responseData = await fetch('YOUR_GOOGLE_SHEET_SCRIPT_URL', {
        method: 'POST',
        body: formData
      });
      const responseText = await responseData.text();
      document.getElementById('msg').innerText = responseText;
    });
  });
  