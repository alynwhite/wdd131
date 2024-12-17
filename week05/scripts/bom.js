//query select some const variables
const addButton = document.getElementById('addButton');
const inputChapter = document.getElementById('favchap');
const chapterList = document.getElementById('list');

//define an array and assign the return value of the function to the array
const chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

//Event listener for clicking on button
addButton.addEventListener('click', function () {
    // Trim input value and check if it's not empty
    const chapter = inputChapter.value.trim();
    if (chapter !== '') {
      displayList(chapter);
      chaptersArray.push(chapter);
      setChapterList();
      inputChapter.value = ''; // Clear the input
      inputChapter.focus(); // Set focus back to the input field
    } else {
      alert('Nothing in chapter, please enter a Book and chapter');
    }
  });
//Display chapter to list with delete button.
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    
    li.textContent = item; // Use the item parameter (chapter)
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    
    li.append(deleteButton);
    chapterList.append(li);
  
    // Event listener for the delete button
    deleteButton.addEventListener('click', function () {
      li.remove(); // Remove the <li> from the DOM
      deleteChapter(item); // Remove from the array and update localStorage
      inputChapter.focus(); // Set focus back to the input
    });
  }
// Update the localStorage with the current chaptersArray
function setChapterList() {
    localStorage.setItem('FavBOMChapts', JSON.stringify(chaptersArray));
  }
// Retrieve the chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('FavBOMChapts'));
  }

  function deleteChapter(chapter) {
    const index = chaptersArray.indexOf(chapter);
    if (index !== -1) {
      chaptersArray.splice(index, 1); // Directly remove the chapter from the array
      //save to localstorage(array)
      setChapterList();
    }
  }