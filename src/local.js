// Check for, retrieve, and store local data
import { newProject, updateSidebar, show } from './updateDOM';
import { listeners } from './updateDOM';
import { Project } from './newProject';
import { ToDoItem } from './newToDo';
import { validate } from './validateInput';
import { format } from "date-fns";
import { projects } from './index';

export const localStore = (function() {
    //Detects whether local storage is both supported and available
    //From https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    function storageAvailable(type) {
        let storage;
        try {
          storage = window[type];
          const x = "__storage_test__";
          storage.setItem(x, x);
          storage.removeItem(x);
          return true;
        } catch (e) {
          return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
              // Firefox
              e.code === 1014 ||
              // test name field too, because code might not be present
              // everything except Firefox
              e.name === "QuotaExceededError" ||
              // Firefox
              e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
          );
        }
      }

    //   if (storageAvailable("localStorage")) {
    //     alert('We can use localstorage!');
    //   } else {
    //     alert('We can\'t store nothin');
    //   }

    function setProjects() {
        //const savedProjects = JSON.parse(localStorage.getItem('storedProjects') || '[]');
        //projects.myProjects = savedProjects;
        // window.addEventListener('storage', (e) => {

        // });
        return JSON.parse(localStorage.getItem('storedProjects') || '[]');
    }

    function populateStorage() {
        localStorage.setItem('storedProjects', JSON.stringify(projects.myProjects));
    }

    //
    function openProjectsOnLoad () {
      const existingProjects = setProjects();
      existingProjects.forEach((savedProj) => {
        projects.generateExistingProj(savedProj);
      });
    }

    return {
        setProjects,
        populateStorage,
        openProjectsOnLoad,
    }

})();