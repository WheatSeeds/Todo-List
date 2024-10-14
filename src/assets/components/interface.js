import '../styles/taskList.css';
import {createTasksList} from "./createTasksList";
import createHtmlElement from "./render";

const taskLists = [];

class createTasksListBtn{
    static createBtn(){
        const btn = createHtmlElement('button', 'new-tasks-list-button', null);
        btn.innerText = 'New List +';
        btn.onclick = () => {
            this.createNewTaskList();
            console.log(taskLists);
        }
        return btn;
    }
    static createNewTaskList(){
        createTasksList.tasksListTemplate();
    }
}

document.body.appendChild(createTasksListBtn.createBtn());

export {createTasksListBtn, taskLists};