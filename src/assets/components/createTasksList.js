import "../styles/taskList.css"

class taskList{
    constructor(name){
        this.name = name;
    }

    static createTaskList(){
        const tasksList = document.createElement('div');
        tasksList.setAttribute('class', 'task-list');
        document.body.appendChild(tasksList);
    }
}
export default taskList;





