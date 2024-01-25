import './style.css';

import { newProject, updateSidebar } from './updateDOM';
import { listeners } from './updateDOM';
import { Project } from './newProject';
import { ToDoItem } from './newToDo';
import { validate } from './validateInput';

//date-fns
import { formatDistance, subDays } from "date-fns";

//Array to store all projects
export const projects = (function() {

    //Initiate empty array of projects
    let myProjects = [];

    function matchProject(proj) {

    }

    return {
        myProjects,
        matchProject,
    }

})();

//Create default project with all to do items
// export const createDefaultProject = (function() {
//     let defaultProj = Project('All Todos', 'All of your todo items live here',
//         [], 'Immutable', 'Time');
//     projects.myProjects.push(defaultProj);
//     updateSidebar.addNewProject(defaultProj);
// })();