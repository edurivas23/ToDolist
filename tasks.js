
const $inputText = document.querySelector('#task');
const $inputTime = document.querySelector('#task_time');
const $buttonAdd = document.querySelector('#buttonAdd');
const $buttonDeleteAll = document.querySelector('#buttonDeleteAll')
const $content = document.querySelector('#content');




$buttonAdd.addEventListener('click', createTask);
$buttonDeleteAll.addEventListener('click',deleteAllTasks)

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task.text, task.time))
}



function createTask() {

    const inputText = $inputText.value;
    const inputTime = $inputTime.value;



    if (inputText == '' || inputTime == '') {
        alert('faltan datos')
        return;

    }

    const formatDate = inputTime.replace('T', ' ');
    createTaskElement(inputText, formatDate);
    saveTask(inputText, formatDate);
    clearInput();
}

function createTaskElement(text, time) {
    const card = document.createElement('article');
    card.className = 'task_info';
    card.innerHTML = `<div class="info">
        <h3>${text}</h3>
        <time>${time}</time>
    </div>
    <div class="article_buttons">
        <button type="button"  class="complete_button"><i class="fa-solid fa-check"></i></button>
        <button type="button"  class="delete_button"><i class="fa-solid fa-trash"></i></button>
    </div>`

    $content.appendChild(card);

    //Actions after create the card

    const $buttonCheck = card.querySelector('.complete_button');
    $buttonCheck.addEventListener('click', () => {
        $buttonCheck.classList.toggle('completed')
    })

    const $buttonDelete = card.querySelector('.delete_button');
    $buttonDelete.addEventListener('click', () => {
        deleteTask(text, time);
        card.remove()
    })
}

function saveTask(text, time) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text, time });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(text, time) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => !(task.text === text && task.time === time));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteAllTasks() {
    localStorage.removeItem("tasks");
    const $task = document.querySelectorAll('.task_info');
    $task.forEach(task => {
        task.remove()
    }) 
}



function clearInput() {
    $inputText.value = '';
    $inputTime.value = '';
}


window.onload = loadTasks;