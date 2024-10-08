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
        tasksListTemplate.setAttribute('class', 'task-list');
        this.editTasksList(tasksListTemplate);
        document.body.appendChild(tasksListTemplate);
    }

    static editTasksList(tasksListTemplate){
        const titleInput = document.createElement('input');
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Done';
        submitBtn.onclick = () => {
            const title = titleInput.value;
            tasksListTemplate.innerHTML = '';
            this.tasksListContent(title, tasksListTemplate);
        };
        tasksListTemplate.appendChild(titleInput);
        tasksListTemplate.appendChild(submitBtn);
        return tasksListTemplate;
    }

    static tasksListContent(title, tasksListTemplate){
        const newTasksList = new tasksList(title);
        const tasksListTitle = document.createElement('span');
        tasksListTitle.textContent = title;
        taskLists.push(newTasksList);
        tasksListTemplate.appendChild(tasksListTitle);
        tasksListTemplate.appendChild(this.createTaskBtn(newTasksList));
    }

    static createTaskBtn(newTasksList){
        const btn = document.createElement('button');
        btn.innerText = 'Add Task';
        btn.onclick = () => {
            const newTask = new Task('name', '2', '3', '4');
            newTasksList.addTask(newTask);
        }
        return btn;
    }
}


export {tasksList, createTasksList};