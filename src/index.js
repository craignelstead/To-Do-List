import './style.css';

import { newProject } from './updateDOM';
import { listeners } from './updateDOM';
import { Project } from './newProject';
import { ToDoItem } from './newToDo';

//date-fns
import { formatDistance, subDays } from "date-fns";

//Description
export const projects = (function() {

    //Initiate empty array of projects
    let myProjects = [];

    return {
        myProjects,
    }

})();