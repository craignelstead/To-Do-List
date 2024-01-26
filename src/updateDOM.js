//Updates DOM for content

import { validate } from './validateInput';
import { projects } from './index';

//New Project Form
export const newProject = (function(doc) {
    //Creates blur, creates form
    function showForm() {
        createBlur();
        buildForm();
    }

    //Removes blur, hides form
    function hideForm() {
        noBlur();

        const newProjectForm = doc.getElementById('formContainer');
        newProjectForm.classList.toggle('fade-out');
        setTimeout(function() {
            newProjectForm.remove();
        }, 300);
    }

    //Create blurry background
    function createBlur() {
        const container = doc.getElementById('allContainer');
        const blurryBackDrop = doc.createElement('div');

        blurryBackDrop.setAttribute('id', 'blurBG');

        container.appendChild(blurryBackDrop);
    }

    //Removes blurry background;
    function noBlur() {
        const blurryBackDrop = doc.getElementById('blurBG');
        blurryBackDrop.remove();
    }

    //Create new roject form
    function buildForm() {
        const container = doc.getElementById('allContainer');

        //Form container and form
        const formContainer = doc.createElement('div');
        formContainer.setAttribute('id', 'formContainer');

        //Form header
        const formHeader = doc.createElement('div');
        const formHeaderTitle = doc.createElement('h2');
        const formHeaderCancel = doc.createElement('img');

        formHeader.setAttribute('id', 'formHeader');
        formHeaderTitle.textContent = 'New Project';
        formHeaderCancel.setAttribute('src', './images/close.svg');

        formHeaderCancel.addEventListener('click', hideForm);

        formHeader.appendChild(formHeaderTitle);
        formHeader.appendChild(formHeaderCancel);

        formContainer.appendChild(formHeader);

        //Form body
        const newProjectForm = doc.createElement('form');
        newProjectForm.setAttribute('id', 'formBody');
        newProjectForm.setAttribute('action', '');
        //newProjectForm.setAttribute('method', 'post');

        const formBody = doc.createElement('div');

            //Project Name
        const newProjectNameLabel = doc.createElement('label');
        newProjectNameLabel.setAttribute('for', 'projectname');
        newProjectNameLabel.textContent = 'Project name';

        const newProjectNameText = doc.createElement('input');
        newProjectNameText.setAttribute('type', 'text');
        newProjectNameText.setAttribute('name', 'projectname');
        newProjectNameText.setAttribute('id', 'projectname');
        newProjectNameText.setAttribute('minlength', '1');
        newProjectNameText.setAttribute('maxlength', '20');
        newProjectNameText.required = true;

        const newProjectNameMsg = doc.createElement('p');
        // newProjectNameMsg.textContent = 'Project must have a name';
        newProjectNameMsg.classList.add('formMessage');
        newProjectNameMsg.classList.add('hidden');
        newProjectNameMsg.setAttribute('id', 'nameMsg');

        formBody.appendChild(newProjectNameLabel);
        formBody.appendChild(newProjectNameText);
        formBody.appendChild(newProjectNameMsg);

            //Project Description
        const newProjectDescLabel = doc.createElement('label');
        newProjectDescLabel.setAttribute('for', 'projectdesc');
        newProjectDescLabel.textContent = 'Description';

        const newProjectDescText = doc.createElement('textarea');
        newProjectDescText.setAttribute('name', 'projectdesc');
        newProjectDescText.setAttribute('id', 'projectdesc');
        newProjectDescText.setAttribute('rows', '4');
        newProjectDescText.setAttribute('cols', '50');

        formBody.appendChild(newProjectDescLabel);
        formBody.appendChild(newProjectDescText);
        newProjectForm.appendChild(formBody);

        //Form footer
        const formFooter = doc.createElement('div');
        formFooter.setAttribute('id', 'formFooter');

        const newProjectCancel = doc.createElement('button');
        newProjectCancel.textContent = 'Cancel';
        newProjectCancel.classList.add('formCancel');
        newProjectCancel.addEventListener('click', hideForm);

        const newProjectSubmit = doc.createElement('button');
        newProjectSubmit.textContent = 'Submit';
        newProjectSubmit.classList.add('formSubmit');

        formFooter.appendChild(newProjectCancel);
        formFooter.appendChild(newProjectSubmit);

            //Add event listener to submit button
        newProjectSubmit.addEventListener('click', function(event){
            event.preventDefault();
            validate.projectForm(newProjectNameText.value, 
                newProjectDescText.value);
        });

        newProjectForm.appendChild(formFooter);

        //Append form and form container to main container
        formContainer.appendChild(newProjectForm);

        // formContainer.classList.toggle('fade-in');
        container.appendChild(formContainer);
    }

    function invalidInput(msg) {
        const textbox = doc.getElementById('projectname');
        const label = doc.getElementById('nameMsg');
        label.textContent = msg;
        textbox.classList.add('formInvalid');
        label.classList.remove('hidden');
    }

    return {
        showForm,
        hideForm,
        invalidInput,
    }
})(document);

//Updates sidebar
export const updateSidebar = (function(doc) {

    //Add new project to sidebar
    function addNewProject(proj) {
        const projLists = doc.getElementById('projectListUl');

        const li = doc.createElement('li');
        const img = doc.createElement('img');
        const span = doc.createElement('span');

        img.setAttribute('src', './images/project.svg');
        img.setAttribute('alt', 'Project');
        
        span.textContent = proj.title;
        li.appendChild(img);
        li.appendChild(span);

        projLists.appendChild(li);

        li.addEventListener('click', show.showOneProject);
    }

    return {
        addNewProject,
    }
})(document);

//Clears work space
export const clearWorkSpace = (function(doc) {
    //Remove all child elements from content div
    function clearAll() {
        const content = doc.getElementById('content');
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }

    //Change grid layout of content for displaying all projects

    return {
        clearAll,
    }
})(document);

//Show all projects or one project
export const show = (function(doc) {

    //Show list of all projects
    function showAllProjects() {
        clearWorkSpace.clearAll();

        const content = doc.getElementById('content');
        const allProjectsSpace = doc.createElement('div');
        allProjectsSpace.setAttribute('id', 'allProjectsSpace');

        //Display each project
        projects.myProjects.forEach((proj) => {
            const projContainer = doc.createElement('div');
            projContainer.classList.add('allProjectsContainers');

            //Card header
            const projHeader = doc.createElement('div');
            projHeader.classList.add('allProjectsContainersHeader');

            const h2 = doc.createElement('h2');
            h2.textContent = proj.title;

            const menuButton = doc.createElement('img');
            menuButton.setAttribute('src', './images/dotmenu.svg');
            menuButton.classList.add('projMenuBtn');
            menuButton.addEventListener('click', function() {
                //This function opens the menu when clicked
                //alert(proj.title);
            });

            projHeader.append(h2, menuButton);
            projContainer.appendChild(projHeader);

            //Card body
            const projBody = doc.createElement('div');
            const description = doc.createElement('p');
            description.textContent = proj.hideLongDescription(proj.description);

            const numOfTodos = doc.createElement('p');
            numOfTodos.textContent = `To Dos: ${proj.toDoItems.length}`;

            projBody.append(description, numOfTodos);

            projContainer.appendChild(projBody);

            //Add to page
            allProjectsSpace.appendChild(projContainer);
            projContainer.addEventListener('click', show.showOneProject);
        })

        content.appendChild(allProjectsSpace);
    }

    //Show selected project
    function showOneProject() {
        clearWorkSpace.clearAll();

        //Get project info
        const currentProject = projects.matchProject(this.lastChild.textContent);

        const content = doc.getElementById('content');

        const oneProjectContainer = doc.createElement('div');
    }

    return {
        showAllProjects,
        showOneProject,
    }

})(document);

//Event listeners
export const listeners = (function(doc) {
    const todoToday = doc.getElementById('todoToday');
    //todoToday.addEventListener('click',);

    const todoThisWeek = doc.getElementById('todoThisWeek');
    //todoThisWeek.addEventListener('click',);

    const allProjects = doc.getElementById('allProjects');
    allProjects.addEventListener('click', show.showAllProjects);

    const newProjectBtn = doc.getElementById('newProjectSideBar');
    newProjectBtn.addEventListener('click', newProject.showForm);

    const allTodos = doc.getElementById('allTodos');
    // allTodos.addEventListener('click',);

})(document);