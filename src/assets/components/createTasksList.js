import "../styles/taskList.css"

class tasksList{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    addTask(newTask){
        this.tasks.push(newTask);
    }
}
export default tasksList;