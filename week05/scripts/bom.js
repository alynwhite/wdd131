const input = document.querySelector('#favChap');
const button = document.querySelector('#addButton');
const listScriptures = document.querySelector('#list');
// const currentyear = document.querySelector("#currentyear");
// const lastModified = document.querySelector("#lastModified");
// const today = new Date();

// currentyear.innerHTML = `<span>${today.getFullYear()}  | Alexia White | Utah, USA</span>  `;
// lastModified.innerHTML = `Last Modified: ${document.lastModified}`; 
// let favChapEntriesList = document.createElement("li");
// let deleteButton = document.createElement('button');

// favChapEntriesList.textContent = input.value;
// deleteButton.textContent = '❌';

// favChapEntriesList.append(deleteButton);
// listScriptures.append(favChapEntriesList);

// button.addEventListener('click', function(){
//     if(input.value.trim() !== ''){
//         let favChapEntriesList = document.createElement("li");
//         let deleteButton = document.createElement('button');

//         favChapEntriesList.textContent = input.value;
//         deleteButton.textContent = '❌';

//         favChapEntriesList.append(deleteButton);
//         listScriptures.append(favChapEntriesList);
//         deleteButton.addEventListener('click', function(){
//             listScriptures.removeChild(li);
//             input.focus();
//         });
//     }
//     else{
//         alert('Nothing in chapter');
//     }
//     input.value = '';
//     input.focus();
// });

function addScripture(){
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
}