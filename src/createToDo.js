//To Do Creator
export const ToDoItem = (title, description, dueDate, priority, notes, 
checklist, itemStatus) => {
    title = title;
    description = description;
    dueDate = dueDate;
    priority = priority;
    notes = notes;
    checklist = checklist;
    itemStatus = itemStatus;

    return {
        title,
        description,
        dueDate, priority,
        notes,
        checklist,
        itemStatus,
    }
}