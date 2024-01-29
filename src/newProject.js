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

    function addTodo(item) {
        toDoItems.push(item);
        console.log(Project);
    }

    return {
        title,
        description,
        toDoItems,
        projectStatus,
        timeCreated,
        hideLongDescription,
        addTodo,
    }
}