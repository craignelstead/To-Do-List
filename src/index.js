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

    //If index matches project to be deleted, remove it from array and sidebar
    function deleteProject(proj) {
        

        for (let i = 0; i < myProjects.length; i++){
            if (myProjects[i] === proj) {
                myProjects.splice(i, 1);
            }
        }

        updateSidebar.removeProject(proj);
    }

    return {
        myProjects,
        deleteProject,
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