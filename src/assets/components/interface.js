import taskList from './createTasksList';
import '../styles/taskList.css';

const taskLists = [];

class Interface{
    static createTaskListBtn(){
        const btn = document.createElement('button');
        btn.innerText = 'Add Tasks List';
        btn.onclick = () => {
            const newTaskList = new taskList('name');
            taskLists.push(newTaskList);
            taskList.createTaskList(newTaskList);
        }
        document.body.appendChild(btn);
    }
}

Interface.createTaskListBtn();