const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}  | Alexia White | Utah, USA</span>  `;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`; 
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  


// Function to populate the select dropdown with product names
const productSelect = document.getElementById('product');

products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id; // Set the value to the product ID
  option.textContent = `${product.name} (Rating: ${product.averagerating})`; // Display product name and rating
  productSelect.appendChild(option);
});


// Get the current review count from localStorage or initialize to 0 if none exists
let reviewCount = localStorage.getItem('reviewCount');
if (!reviewCount) {
    reviewCount = 0;
}
document.getElementById('reviewCount').textContent = reviewCount;
reviewCount = parseInt(reviewCount) + 1;
localStorage.setItem('reviewCount', reviewCount);

// Update the counter display
document.getElementById('reviewCount').textContent = reviewCount;