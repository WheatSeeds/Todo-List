import "../styles/taskList.css"
import Task from "./createTask";
import {taskLists} from "./interface";

class tasksList{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    addTask(newTask){
        this.tasks.push(newTask);
    }
}

class createTasksList{
    static tasksListTemplate(){
        const tasksListTemplate = document.createElement('div');
        tasksListTemplate.classList.add('tasks-list');
        const newTasksList = new tasksList('newTasksList');
        this.editTasksList(tasksListTemplate, newTasksList);

        document.body.appendChild(tasksListTemplate);
    }

    static editTasksList(tasksListTemplate, newTasksList){
        const titleInput = document.createElement('input');
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Done';
        submitBtn.onclick = () => {
            const title = titleInput.value;
            tasksListTemplate.innerHTML = '';
            this.tasksListContent(title, tasksListTemplate, newTasksList);
        };
        tasksListTemplate.appendChild(titleInput);
        tasksListTemplate.appendChild(submitBtn);
        return tasksListTemplate;
    }

    static tasksListContent(title, tasksListTemplate, newTasksList){
        newTasksList.name = title;
        const tasksListTitle = document.createElement('span');
        const tasksListNav = document.createElement('div');
        tasksListNav.classList.add('tasks-list-nav');
        tasksListTitle.textContent = title;
        taskLists.push(newTasksList);
        tasksListTemplate.appendChild(tasksListTitle);
        tasksListTemplate.appendChild(tasksListNav);
        tasksListNav.appendChild(this.createTaskBtn(newTasksList));
        tasksListNav.appendChild(this.createEditBtn(tasksListTemplate, newTasksList));
    }

    static createTaskBtn(newTasksList){
        const btn = document.createElement('button');
        btn.setAttribute('class', 'add-task-btn');
        btn.innerText = '+';
        btn.onclick = () => {
            const newTask = new Task('name', '2', '3', '4');
            newTasksList.addTask(newTask);
        }
        return btn;
    }

    static createEditBtn(tasksListTemplate, newTasksList){
        const btn = document.createElement('button');
        btn.setAttribute('class', 'edit-task-list-btn');
        btn.innerText = 'Edit';
        btn.onclick = () => {
            tasksListTemplate.innerHTML = '';
            this.editTasksList(tasksListTemplate, newTasksList);
        }
        return btn;
    }
}


export {tasksList, createTasksList};