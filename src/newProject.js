//Project Creator

import { validate } from './validateInput';

export const Project = (title, description, toDoItems, projectStatus, timeCreated) => {

    title = title;
    description = description;
    toDoItems = toDoItems;
    projectStatus = projectStatus;
    timeCreated = timeCreated;



    return {
        title,
        description,
        toDoItems,
        projectStatus,
        timeCreated,
    }
}