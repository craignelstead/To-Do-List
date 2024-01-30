//Project Creator

import { validate } from './validateInput';
import { formatISO9075 } from "date-fns";

export const Project = (title, description, toDoItems, projectStatus, timeCreated) => {

    title = title;
    description = description;
    toDoItems = toDoItems;
    projectStatus = 'Incomplete';
    timeCreated = formatISO9075(Date.now());

    //Shortens description if longer than 100 characters
    function hideLongDescription(desc) {
        if (desc.length <110) {
            return desc;
        }
        else {
            return desc.slice(0,107) + '...';
        }
    }

    //Adds task to project
    function addTodo(item) {
        toDoItems.push(item);
    }

    //Remove a task from toDoItems
    function removeTodo(task) {
        for (let i = 0; i < toDoItems.length; i++){
            if (toDoItems[i] === task) {
                toDoItems.splice(i, 1);
            }
        }
    }

    return {
        title,
        description,
        toDoItems,
        projectStatus,
        timeCreated,
        hideLongDescription,
        addTodo,
        removeTodo,
    }
}