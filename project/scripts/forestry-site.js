
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
                <h3>${question.name}</h3>
                <p>${question.email}</p>
                <p>${question.message}</p>
                <button onclick="editQuestion(${index})">Edit</button>
                <button onclick="deleteQuestion(${index})">Delete</button>
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
    const newQuestion = { name, email, message, response: '' };

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

// Function to delete a question
function deleteQuestion(index) {
    const questions = JSON.parse(localStorage.getItem('questions')) || [];
    questions.splice(index, 1); // Remove the question at the specified index
    localStorage.setItem('questions', JSON.stringify(questions));
    displayQuestions(); // Re-render the questions
}

// Function to edit a question
function editQuestion(index) {
    const questions = JSON.parse(localStorage.getItem('questions')) || [];
    const question = questions[index];

    // Replace the form values with the question's data
    document.getElementById('name').value = question.name;
    document.getElementById('email').value = question.email;
    document.getElementById('message').value = question.message;

    // Remove the question from the array (we'll add it back after editing)
    questions.splice(index, 1);
    localStorage.setItem('questions', JSON.stringify(questions));
    displayQuestions(); // Re-render the questions
}
// Initial call to display the questions when the page loads
window.onload = displayQuestions;