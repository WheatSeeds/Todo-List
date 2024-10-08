import '../styles/taskList.css';
import {tasksList, createTasksList} from "./createTasksList";

const taskLists = [];

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
        createTasksList.tasksListTemplate();
    }
}

createTasksListBtn.createBtn();

export {createTasksListBtn, taskLists};