import "../styles/taskList.css"
import {Task, createTask} from "./createTask";
import {taskLists} from "./interface";
import createHtmlElement from './render'

class tasksList{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task);
    }

    removeTask(task){
        this.tasks.pop(task);
    }

    editTaskListName(newTaskListName) {
        this.name = newTaskListName;
    }

    renderTasks(elem){
        elem.innerHTML = "";
        this.tasks.forEach(() => {
            elem.appendChild(createTask.taskTemplate());
        })
    }
}

class createTasksList{
    static tasksListTemplate(){
        const tasksListTemplate = createHtmlElement('div', null, 'tasks-list');

        const newTasksList = new tasksList(' ');

        taskLists.push(newTasksList);

        this.editTasksList(tasksListTemplate, newTasksList);

        document.body.appendChild(tasksListTemplate);
    }

    static editTasksList(tasksListTemplate, newTasksList){
        const nameInput = document.createElement('input');
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Done';

        submitBtn.onclick = () => {
            newTasksList.editTaskListName(nameInput.value);
            tasksListTemplate.innerHTML = '';
            this.tasksListContent(nameInput.value, tasksListTemplate, newTasksList);
        };

        tasksListTemplate.appendChild(nameInput);
        tasksListTemplate.appendChild(submitBtn);

        return tasksListTemplate;
    }

    static tasksListContent(title, tasksListTemplate, newTasksList){
        const tasksListTitle = document.createElement('span');
        const tasksListNav = document.createElement('div');

        tasksListNav.classList.add('tasks-list-nav');
        tasksListTitle.textContent = title;

        tasksListTemplate.appendChild(tasksListTitle);
        tasksListTemplate.appendChild(tasksListNav);

        tasksListNav.appendChild(this.createTaskBtn(newTasksList));
        tasksListNav.appendChild(this.createEditBtn(tasksListTemplate, newTasksList));

    }

    static createTaskBtn(currentTasksList){
        const btn = createHtmlElement('button', null, 'add-task-btn');
        btn.innerText = '+';
        btn.onclick = () => {
            document.body.appendChild(createTask.taskTemplate());
        }
        return btn;
    }

    static createEditBtn(tasksListTemplate, newTasksList){
        const btn = createHtmlElement('button', null, 'edit-task-list-btn');
        btn.innerText = 'Edit';
        btn.onclick = () => {
            tasksListTemplate.innerHTML = '';
            this.editTasksList(tasksListTemplate, newTasksList);
        }
        return btn;
    }
}



export {tasksList, createTasksList};