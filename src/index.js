import './style.css';

import { newProject, updateSidebar, show } from './updateDOM';
import { listeners } from './updateDOM';
import { Project } from './newProject';
import { ToDoItem } from './newToDo';
import { validate } from './validateInput';

//date-fns
import { format } from "date-fns";

//Projects
export const projects = (function() {

    //Initiate empty array of projects
    let myProjects = [];

    return {
        myProjects,
    }

})();

//Get tasks from filter
export const getTasks = (function() {

    function filtered(filter) {
        const newTaskList = [];
        projects.myProjects.forEach(proj => {
            proj.toDoItems.forEach(item => {
                //If filter is set to today, show todays tasks
                //Else, show all tasks
                if (filter === format(Date.now(), 'MM/dd/yyyy')) {
                    const { isEqual } = require("date-fns");
                    if (isEqual(filter, item.dueDate)) {
                        newTaskList.push(item);
                        show.showFilteredTasks(item, proj);
                    }
                }
                else {
                    newTaskList.push(item);
                        show.showFilteredTasks(item, proj);
                }
            });
        });
    }

    return {
        filtered,
    }
})();