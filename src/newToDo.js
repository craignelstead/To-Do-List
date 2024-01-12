//To Do Creator
export const ToDoItem = (title, project, description, dueDate, priority, notes, 
checklist, itemStatus, timeCreated) => {

    title = title;
    project = project;
    description = description;
    dueDate = dueDate;
    priority = priority;
    notes = notes;
    checklist = checklist;
    itemStatus = itemStatus;
    timeCreated = timeCreated;

    return {
        title,
        project,
        description,
        dueDate,
        priority,
        notes,
        checklist,
        itemStatus,
        timeCreated,
    }
}