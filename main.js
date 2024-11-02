const $inputText = document.querySelector('#task');
const $inputTime = document.querySelector('#task_time');
const $buttonAdd = document.querySelector('#button_add');
const $buttonDeleteAll = document.querySelector('#button_delete_all')
const $content = document.querySelector('#content');




$buttonAdd.addEventListener('click', createTask);
$buttonDeleteAll.addEventListener('click', function(){
    const $cards = document.querySelectorAll('#task_info');
    $cards.forEach($card =>{
        $card.remove();
    })

})



function createTask() { 

    const inputText = $inputText.value;
    const inputTime = $inputTime.value;
    const formatDate = inputTime.replace('T', ' ');


    if (inputText == '' || inputTime == '') {
        alert('faltan datos')
        return;

    } else {

        const card = document.createElement('article');
        card.className = 'task_info';
        card.id='task_info';
        card.innerHTML = `<div class="info">
        <h3>${inputText}</h3>
        <time>${formatDate}</time>
    </div>
    <div class="article_buttons">
        <button type="button"  class="complete_button"><i class="fa-solid fa-check"></i></button>
        <button type="button"  class="delete_button"><i class="fa-solid fa-trash"></i></button>
    </div>`

        $content.appendChild(card);

    //Actions after create the card
        clearInput();
        const $buttonCheck = card.querySelector('.complete_button');
        $buttonCheck.addEventListener('click',()=>{
            $buttonCheck.classList.toggle('completed')
        })
      
        const $buttonDelete = card.querySelector('.delete_button');
        $buttonDelete.addEventListener('click',()=>{
            card.remove(card)
        })
        
    }

}



function clearInput() {
    $inputText.value = '';
    $inputTime.value = '';
}


