//To Do Creator

import { newToDo } from "./updateDOM";
import { formatISO9075 } from "date-fns";

export const ToDoItem = (title, project, dueDate, priority,  
checklist, itemStatus, timeCreated) => {

    title = title;
    project = project;
    dueDate = dueDate;
    priority = priority;
    checklist = checklist;
    itemStatus = itemStatus;
    timeCreated = formatISO9075(Date.now());

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