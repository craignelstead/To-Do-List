//Validates input for new project

import { newProject, updateSidebar } from './updateDOM';
import { Project } from './newProject';
import { projects } from './index';

import { formatDistance, subDays } from "date-fns";
import { forEach } from 'neo-async';

export const validate = (function() {

    //Checks if the project form input is valid
    function projectForm(name, description) {
        if ((name.length > 0) && (name.length <=20)) {
            //Check if project title already exists
            // projects.myProjects.forEach((proj) => {
            //     if (proj.title == name) {
            //         alert(proj.title + name);
            //         invalid();
            //         return;
            //     }
            // });
            isTitleTaken(name) ? invalid('Project already exists') : valid(name, description);
            //valid(name, description);
        }
        else {
            invalid('Project must have a name');
        }
    }

    //Returns true if project already exists with entered title
    function isTitleTaken(name) {
        for (let i=0; i < projects.myProjects.length; i++) {
            if (projects.myProjects[i].title == name) {
                return true
            }
        }
    }

    //If form is valid, create Project from newProject and add it to array of 
    //projects in index
    function valid(name, description) {
        let projectFromForm = Project(name, description, [], 
            'Incomplete', 'Time');
    
        projects.myProjects.push(projectFromForm);
        console.log(projects.myProjects);

        newProject.hideForm();

        updateSidebar.addNewProject(projectFromForm);
    }

    function invalid(msg) {
        newProject.invalidInput(msg);
    }

    return {
        projectForm,
    }
})();