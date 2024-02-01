// Check for, retrieve, and store local data
import { newProject, updateSidebar, show } from './updateDOM';
import { listeners } from './updateDOM';
import { Project } from './newProject';
import { ToDoItem } from './newToDo';
import { validate } from './validateInput';
import { format } from "date-fns";

export const localStore = (function() {
    function setProjects() {
        return JSON.parse(localStorage.getItem('storedProjects') || '[]');
    }

    function populateStorage() {
        localStorage.setItem('storedProjects', JSON.stringify(projects.myProjects));
    }

    function openProjectsOnLoad () {
      const existingProjects = setProjects();
      console.log(existingProjects);
      //return existingProjects?.length > 0 ? 
      if (existingProjects.length > 0) {
        //If existingProjects is an array and has a length>0, do this:
        const newProjects = existingProjects.map( (savedProj) =>
          Project(
            savedProj.title,
            savedProj.description,
            savedProj.toDoItems,
            savedProj.projectStatus,
            savedProj.timeCreated,
          )
        ) 
        
        newProjects.forEach((proj) => {
          projects.myProjects.push(proj);
          updateSidebar.addNewProject(proj);
        })

        show.showAllProjects();

        localStore.populateStorage();

        return existingProjects;
      } else {
        //If existingProjects is empty, return an empty array
        return [];
      }
    }

    return {
        setProjects,
        populateStorage,
        openProjectsOnLoad,
    }

})();

//Stored projects
export const projects = (function() {

  let myProjects;

  //Initiate empty array of projects
  //If any projects are stored locally, they will be populated from
  //localStore.openProjectsOnLoad
  function startHere() {
    myProjects = localStore.openProjectsOnLoad();
  }

  //If index matches project to be deleted, remove it from array and sidebar
  function deleteProject(proj) {
      for (let i = 0; i < myProjects.length; i++){
          if (myProjects[i] === proj) {
              myProjects.splice(i, 1);
          }
      }

      updateSidebar.removeProject(proj);
      localStore.populateStorage();
  }

  return {
      myProjects,
      deleteProject,
      startHere,
  }

})();

projects.startHere();
