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