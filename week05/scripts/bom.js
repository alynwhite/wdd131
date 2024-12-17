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
addButton.addEventListener('click', function(){
    // trim input value
    // const chapter = inputChapter.value.trim();
    if(input.value !== ''){
        displayLIst(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();

    }
    else{
        alert('Nothing in chapter, please enter a Book and chapter');
    }
    // inputChapter.value = '';
    // inputChapter.focus();
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); 
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); 
      input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
  }
function setChapterList(){
    localStorage.setItem('FavBOMChapts', JSON.stringify(chaptersArray));
  }
function getChapterList(){
   return JSON.parse(localStorage.getItem('FavBOMChapts')); 
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }
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
