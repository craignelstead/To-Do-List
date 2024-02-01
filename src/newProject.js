//Project Creator

import { validate } from './validateInput';
import { format } from "date-fns";
import { localStore, projects } from './local';

export const Project = (title, description, toDoItems, projectStatus, timeCreated) => {

    title = title;
    description = description;
    toDoItems = toDoItems;
    projectStatus = 'Incomplete';
    timeCreated = format(Date.now(), 'MM/dd/yyyy');

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
        localStore.populateStorage();
    }

    //Remove a task from toDoItems
    function removeTodo(task) {
        for (let i = 0; i < toDoItems.length; i++){
            if (toDoItems[i] === task) {
                toDoItems.splice(i, 1);
            }
        }
        localStore.populateStorage();
    }

    //Updates title from input
    function updateTitle(newTitle) {
        if (newTitle.value === '') {
            return title;
        }
        else {
            title = newTitle.value;
            localStore.populateStorage();
            return title;
        }
    }

    //Updates description from input
    function updateDescription(newDesc) {
        if (newDesc.value == '') {
            return description;
        }
        else {
            description = newDesc.value;
            localStore.populateStorage();
            return description;
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
        updateTitle,
        updateDescription,
    }
}