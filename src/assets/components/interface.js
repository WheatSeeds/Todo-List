import '../styles/taskList.css';
import {createTasksList} from "./createTasksList";

const taskLists = [];

class createTasksListBtn{
    static createBtn(){
        const btn = document.createElement('button');
        btn.setAttribute('id', 'new-tasks-list-button');
        btn.innerText = 'New List +';
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