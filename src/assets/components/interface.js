import taskList from './createTasksList';
import '../styles/taskList.css';
import Task from "./createTask";

const taskLists = [];

class createTasksListBlock{
    static createTaskList(newTaskList){
        const tasksList = document.createElement('div');
        tasksList.setAttribute('class', 'task-list');
        tasksList.append(this.createBtn(newTaskList));
        document.body.appendChild(tasksList);
    }
    static createBtn(newTaskList){
        const btn = document.createElement('button');
        btn.innerText = 'Add Task';
        btn.onclick = () => {
            const newTask = new Task('name', '2', '3', '4');
            newTaskList.addTask(newTask);
        }
        return btn;
    }
}

class createTasksListBtn{
    static createBtn(){
        const btn = document.createElement('button');
        btn.innerText = 'Add Tasks List';
        btn.onclick = () => {
            this.createNewTaskList();
            console.log(taskLists);
        }
        document.body.appendChild(btn);
    }
    static createNewTaskList(){
        const newTaskList = new taskList('name');
        createTasksListBlock.createTaskList(newTaskList);
        taskLists.push(newTaskList);
    }
}

createTasksListBtn.createBtn();

export {createTasksListBtn};