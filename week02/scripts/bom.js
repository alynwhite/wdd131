const input = document.querySelector('#favChap');
const button = document.querySelector('button');
const listScriptures = document.querySelector('#list');

let favChapEntriesList = document.createElement("li");
let deleteButton = document.createElement('button');

favChapEntriesList.textContent = input.value;
deleteButton.textContent = '❌';

favChapEntriesList.append(deleteButton);
listScriptures.append(favChapEntriesList);