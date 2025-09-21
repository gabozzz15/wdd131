const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

const li= document.createElement('li');
const deleteButton = document.createElement('button');
deleteButton.textContent = '❌';

li.textContent = input.value;
li.append(deleteButton);
list.append(li);

button.addEventListener('click', function(){
    if (input.value.trim() !== '') {  
        const li= document.createElement('li');
        li.textContent = input.value;
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus();
    }
});

deleteButton.addEventListener('click', function(){
    list.remove(li);
    input.focus();
});
