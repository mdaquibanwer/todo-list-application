const forms = document.querySelector('.form-todo');
const input = document.querySelector('.input-todo');
const todos = document.querySelector('ul')
forms.addEventListener("submit",(e)=>{
    e.preventDefault();
    const todo = input.value;
    if(todo){
        const newLi = document.createElement('li');
        newLi.innerText = todo;

        newLi.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            newLi.remove();
        })
        todos.append(newLi);
        input.value = '';
    }
    
})