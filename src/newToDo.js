//To Do Creator

import { newToDo } from "./updateDOM";
import { format } from "date-fns";
import { localStore } from './local';

export const ToDoItem = (title, project, dueDate, priority,  
checklist, itemStatus, timeCreated) => {

    title = title;
    project = project;
    dueDate = format(dueDate, 'MM/dd/yyyy');
    priority = priority;
    checklist = checklist;
    itemStatus = itemStatus;
    timeCreated = format(Date.now(), 'MM/dd/yyyy');

    //Update title if new title is entered
    function updateTitle(newTitle) {
        if (newTitle.value === '') {
            return title;
        }
        else {
            title = newTitle.value;
            //POPULATE STORAGE
            return title;
        }
    }

    function updateDueDate(newDueDate) {
        if (newDueDate.value === '') {
            return dueDate;
        }
        else {
            dueDate = newDueDate.value;
            //POPULATE STORAGE
            return dueDate;
        }
    }

    return {
        title,
        project,
        dueDate,
        priority,
        checklist,
        itemStatus,
        timeCreated,
        updateTitle,
        updateDueDate,
    }
}

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