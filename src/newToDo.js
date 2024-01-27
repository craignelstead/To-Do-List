//To Do Creator

import { newToDo } from "./updateDOM";

export const ToDoItem = (title, project, dueDate, priority,  
checklist, itemStatus, timeCreated) => {

    title = title;
    project = project;
    dueDate = dueDate;
    priority = priority;
    checklist = checklist;
    itemStatus = itemStatus;
    timeCreated = timeCreated;

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