
const input = document.querySelector('.tasks__input');
const addButton = document.querySelector('.tasks__add');
const taskList = document.querySelector('.tasks__list');

addButton.addEventListener('click', (el) => {
    if (input.value.trim() === '') {
        input.value = '';
        return;
    }
    taskList.insertAdjacentHTML('afterBegin', `
        <div class="task">
            <div class="task__title">
            ${input.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
    );
    input.value = '';
    
    el.preventDefault();
});

input.addEventListener('keydown', (key) => {
    if (key.key === 'Enter') {
        addButton.click();
    }
});

taskList.addEventListener('click', (el) => {
    const target = el.target; 
    if (target.classList.contains('task__remove')) {
        target.parentElement.remove();
    }
})
