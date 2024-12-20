
function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');  // Toggle the 'active' class on the nav element
  }

  // Function to load questions from localStorage and display them
  function displayQuestions() {
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = '<h2>Submitted Questions:</h2>'; // Reset content

    // Retrieve questions from localStorage
    const questions = JSON.parse(localStorage.getItem('questions')) || [];

    // Check if there are any questions
    if (questions.length === 0) {
        questionsContainer.innerHTML += '<p>No questions submitted yet.</p>';
    } else {
        // Loop through all questions and display them
        questions.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML = `
                <h3>Question #${index + 1}</h3>
                <p><strong>Name:</strong> ${question.name}</p>
                <p><strong>Email:</strong> ${question.email}</p>
                <p><strong>Message:</strong> ${question.message}</p>
            `;
            questionsContainer.appendChild(questionElement);
        });
    }
}

// Handle form submission
document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create an object for the new question
    const newQuestion = { name, email, message };

    // Retrieve existing questions from localStorage, or initialize an empty array
    const questions = JSON.parse(localStorage.getItem('questions')) || [];

    // Add the new question to the array
    questions.push(newQuestion);

    // Save the updated array back to localStorage
    localStorage.setItem('questions', JSON.stringify(questions));

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Display the updated questions on the page
    displayQuestions();
});

// Initial call to display the questions when the page loads
window.onload = displayQuestions;