//Validates input for new project

import { newProject, updateSidebar, newToDo, show } from './updateDOM';
import { Project } from './newProject';
import { projects } from './index';

import { format } from "date-fns";
import { ToDoItem } from './newToDo';

export const validate = (function() {

    //Checks if the project form input is valid
    function projectForm(name, description) {
        if ((name.length > 0) && (name.length <=20)) {
            isTitleTaken(name) ? invalid('Project already exists') : valid(name, description);
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

    //See if todo input is valid
    function todoForm(title, project, dueDate, priority,
        checklist, itemStatus, timeCreated) {
        if (title.length > 0) {
            //Sets due date to today by default if no date entered
            if (dueDate == '') {
                dueDate = format(Date.now(), 'MM/dd/yyyy');
            }

            let taskCreated = ToDoItem(title, project, dueDate, 
                priority, checklist, itemStatus, timeCreated);
            project.addTodo(taskCreated);
            newProject.hideForm();
            show.showOneProject(project);
        }
        else {
            newToDo.invalid();
        }
    }

    //If form is valid, create Project from newProject and add it to array of 
    //projects in index
    function valid(name, description) {
        let projectFromForm = Project(name, description, [], 
            'Incomplete');
    
        projects.myProjects.push(projectFromForm);

        newProject.hideForm();

        updateSidebar.addNewProject(projectFromForm);

        show.showAllProjects();
    }

    function invalid(msg) {
        newProject.invalidInput(msg);
    }

    return {
        projectForm,
        todoForm,
    }
})();