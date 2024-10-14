import '../styles/task.css'
import createHtmlElement from './render'

class Task {
    constructor(title, desc, priority, check) {
        this.title = title;
        this.desc = desc;
        this.priority = priority;
        this.check = check;
    }
}

class createTask {
    static taskTemplate(){
        return createHtmlElement('div', null, 'task');
    }
}

export {Task, createTask};