import "../styles/taskList.css"
import {createTaskBtn} from "./interface";
class tasksList{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    addTask(newTask){
        this.tasks.push(newTask);
    }
    static createTaskList(){
        const tasksList = document.createElement('div');
        tasksList.setAttribute('class', 'task-list');
        tasksList.append(createTaskBtn.createBtn());
        document.body.appendChild(tasksList);
    }
}
export default tasksList;



