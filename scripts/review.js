// Get the current review count from localStorage or initialize to 0 if none exists
let submitCount = localStorage.getItem('submit-count');
if (!submitCount) {
    submitCount = 0;
}
document.getElementById('submit-count').textContent = submitCount;
submitCount = parseInt(submitCount) + 1;
localStorage.setItem('submit-count', submitCount);

// Update the counter display
document.getElementById('submit-count').textContent = submitCount;