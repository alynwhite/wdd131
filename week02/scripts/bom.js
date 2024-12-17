//query select some const variables
const addButton = document.getElementById('addButton');
const inputChapter = document.getElementById('favchap');
const chapterList = document.getElementById('list');



//Event listener for clicking on button
addButton.addEventListener('click', function(){
    // trim input value
    const chapter = inputChapter.value.trim();
    if(chapter !== ''){
        let listChapt = document.createElement("li");
        let deleteButton = document.createElement('button');

        listChapt.textContent = chapter;
        deleteButton.textContent = '❌';

        listChapt.appendChild(deleteButton);
        chapterList.appendChild(listChapt);
    }
    else{
        alert('Nothing in chapter, please enter a Book and chapter');
    }
    inputChapter.value = '';
    inputChapter.focus();
});


// Add event listener to the <ul> element
chapterList.addEventListener('click', function(event) {
    // Check if the clicked element is a delete button
    if (event.target && event.target.textContent ==='❌') {
        // Find the parent <li> element of the clicked button
        const listItem = event.target.closest('li');
        
        // Remove the <li> element from the DOM
        listItem.remove();
    }
});