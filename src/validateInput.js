//Validates input for new project

import { newProject } from './updateDOM';
import { Project } from './newProject';
import { projects } from './index';

import { formatDistance, subDays } from "date-fns";

export const validate = (function() {

    //If form is valid, create Project from newProject and add it to array of 
    //projects in index
    function projectForm(name, description) {
        if ((name.length > 0) && (name.length <=20)) {
            let newProject = Project(name, description, [], 
                'Incomplete', 'Time');
        
            projects.myProjects.push(newProject);
            console.log(projects.myProjects);

        }
        else {
            newProject.invalidInput();
        }
    }

    return {
        projectForm,
    }
})();