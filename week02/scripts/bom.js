const input = document.querySelector('#favChap');
const button = document.querySelector('button');
const listScriptures = document.querySelector('#list');

// let favChapEntriesList = document.createElement("li");
// let deleteButton = document.createElement('button');

// favChapEntriesList.textContent = input.value;
// deleteButton.textContent = '❌';

// favChapEntriesList.append(deleteButton);
// listScriptures.append(favChapEntriesList);

button.addEventListener('click', function(){
    if(input.value.trim() !== ''){
        let favChapEntriesList = document.createElement("li");
        let deleteButton = document.createElement('button');

        favChapEntriesList.textContent = input.value;
        deleteButton.textContent = '❌';

        favChapEntriesList.append(deleteButton);
        listScriptures.append(favChapEntriesList);
        deleteButton.addEventListener('click', function(){
            listScriptures.removeChild(li);
            input.focus();
        });
    }
    else{
        alert('Nothing in chapter');
    }
    input.value = '';
    input.focus();
});