
/*<article class="board-card">
                    
                    <p>Prueba de la card de tareas</p>
                    <time>25 de oct - 26 de oct</time>
                </article>  */

const $button = document.querySelector('#button_modal');
const $modal = document.querySelector('#modal_container');

$button.addEventListener('click', openModal)


function openModal() {
    $modal.style.display = 'grid'

}