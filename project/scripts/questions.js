window.onload = function() {
    const questionsContainer = document.getElementById('questionsContainer');
    const questions = JSON.parse(localStorage.getItem('questions')) || [];

    if (questions.length === 0) {
        questionsContainer.innerHTML = '<p>No questions submitted yet.</p>';
    } else {
        // Loop through each question and display it
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
};

function toggleNav() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');  // Toggle the 'active' class on the nav element
  }