let todoList = [];
        

        function handleKeyEvent(event)
        {
            if(event.key === 'Enter')
            {
                addToList();
            }
        }

        function addToList()
        {
            

            let todoElement = document.querySelector('.js-todo-input');
            const dateElement = document.querySelector('.js-date-input');
            const containerElement = document.querySelector('.container');

            todoList.push({name: todoElement.value,
                        dueDate: dateElement.value});

                        

            renderTodoList();

            document.querySelector('.js-todo-input').value = '';
            
        }

        function renderTodoList()
        {
            let paragraph = ``;

            for(let i = 0; i < todoList.length; i++)
            {
                const html = todoList[i];
                paragraph += `<div>${html.name}</div> <div>${html.dueDate}</div> <button onclick="todoList.splice(${i}, 1); renderTodoList()" class="delete-button">Delete</button>`;
            }

            document.querySelector('.container').innerHTML = paragraph;
        }