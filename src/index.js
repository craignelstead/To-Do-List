import './style.css';

import { newProject, updateSidebar } from './updateDOM';
import { listeners } from './updateDOM';
import { Project } from './newProject';
import { ToDoItem } from './newToDo';
import { validate } from './validateInput';

//date-fns
import { formatDistance, subDays } from "date-fns";

//Projects
export const projects = (function() {

    //Initiate empty array of projects
    let myProjects = [];

    return {
        myProjects,
    }

})();