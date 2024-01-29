//To Do Creator

import { newToDo } from "./updateDOM";
import { format } from "date-fns";

export const ToDoItem = (title, project, dueDate, priority,  
checklist, itemStatus, timeCreated) => {

    title = title;
    project = project;
    dueDate = dueDate;
    priority = priority;
    checklist = checklist;
    itemStatus = itemStatus;
    timeCreated = format(Date.now(), 'MM/dd/yyyy');

    return {
        title,
        project,
        dueDate,
        priority,
        checklist,
        itemStatus,
        timeCreated,
    }
}