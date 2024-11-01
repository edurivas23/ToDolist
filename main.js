const $inputText = document.querySelector('#task');
const $inputTime = document.querySelector('#task_time');
const $buttonAdd = document.querySelector('#button_add');
const $buttonDeleteAll = document.querySelector('#button_delete_all')
const $content = document.querySelector('#content');

function createTask(){
    const inputText = $inputText.value;
    const inputTime = $inputTime.value;
    const formatDate = inputTime.replace('T',' ')
const card = document.createElement('article');
card.className = 'task_info';
card.innerHTML = `<div class="info">
        <h3>${inputText}</h3>
        <time>${formatDate}</time>
    </div>
    <div class="article_buttons">
        <button type="button" id="complete_button" class="complete_button"><i class="fa-solid fa-check"></i></button>
        <button type="button" id="delete_button" class="delete_button"><i class="fa-solid fa-trash"></i></button>
    </div>`

    $content.appendChild(card)
}

$buttonAdd.addEventListener('click',createTask);
console.log(createTask)