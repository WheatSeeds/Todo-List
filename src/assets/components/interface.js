import taskList from './createTasksList';
import '../styles/taskList.css';
import Task from "./createTask";

const taskLists = [];
let currentTask = 0;

class createTaskBtn{
    static createBtn(){
        const btn = document.createElement('button');
        btn.innerText = 'Add Task';
        btn.onclick = () => {
            const newTask = new Task('name', '2', '3', '4');
            taskLists[currentTask].addTask(newTask);
        }
        return btn;
    }

}
class createTasksListBtn{
    static createBtn(){
        const btn = document.createElement('button');
        btn.innerText = 'Add Tasks List';
        btn.onclick = () => {
            taskList.createTaskList();
            this.createNewTaskList();
            console.log(taskLists)
        }
        document.body.appendChild(btn);
    }
    static createNewTaskList(){
        const newTaskList = new taskList('name');
        taskLists.push(newTaskList);
    }
}

createTasksListBtn.createBtn();

export {createTaskBtn};