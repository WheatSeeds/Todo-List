import '../styles/task.css'
import createHtmlElement from './render'

class Task {
    constructor(title = '', desc = '', priority = '', check = false) {
        this.title = title;
        this.desc = desc;
        this.priority = priority;
        this.check = check;
    }
    editTask(title, desc, priority) {
        this.title = title;
        this.desc = desc;
        this.priority = priority;
    }
}

class createTask {
    static taskTemplate(){
        const taskTemplate = createHtmlElement('div', null, 'task');
        const newTask = new Task();
        this.taskEdit(taskTemplate, newTask);
        return taskTemplate;
    }
    static taskEdit(taskTemplate, task){
        const taskTitleInput = document.createElement('input');
        const taskDescriptionInput = document.createElement('textarea');
        const taskPriorityInput = document.createElement('input');

        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Done';
        submitBtn.onclick = () => {
            taskTemplate.innerHTML = '';
            task.editTask(taskTitleInput.value, taskDescriptionInput.value, taskPriorityInput.value);
            this.taskContentRender(taskTemplate, task);
        };

        taskTemplate.append(taskTitleInput, taskDescriptionInput, taskPriorityInput, submitBtn);
        return taskTemplate;
    }
    static taskContentRender(taskTemplate, task){
        const taskTitle = document.createElement('span');
        const taskDescription = document.createElement('span');
        const taskPriority = document.createElement('span');

        taskTitle.textContent = task.title;
        taskDescription.textContent = task.desc;
        taskPriority.textContent = task.priority;

        taskTemplate.append(taskTitle, taskDescription, taskPriority);
    }
}


export {Task, createTask};