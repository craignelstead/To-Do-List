//Updates DOM for content

import { validate } from './validateInput';
import { projects, getTasks } from './index';
import { ToDoItem } from './newToDo';
import { format } from "date-fns";

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

    //Create new project form
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

        // const newProjectCancel = doc.createElement('button');
        // newProjectCancel.textContent = 'Cancel';
        // newProjectCancel.classList.add('formCancel');
        // newProjectCancel.addEventListener('click', hideForm);

        const newProjectSubmit = doc.createElement('button');
        newProjectSubmit.textContent = 'Submit';
        newProjectSubmit.classList.add('formSubmit');

        // formFooter.appendChild(newProjectCancel);
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
        createBlur,
        noBlur,
    }
})(document);

//New to do form
export const newToDo = (function(doc) {
    //Show form
    function showForm(proj) {
        newProject.createBlur();
        buildForm(proj);
    }

    //Hide form
    function hideForm() {
        newProject.noBlur();

        const newToDoFormDiv = doc.getElementById('formContainer');
        newToDoFormDiv.classList.toggle('fade-out');
        setTimeout(function() {
            newToDoFormDiv.remove();
        }, 300);
    }

    //Build form
    function buildForm(proj) {
        const container = doc.getElementById('allContainer');

        const newToDoFormDiv = doc.createElement('div');
        newToDoFormDiv.setAttribute('id', 'formContainer');
        
        //Header
        const formHeader = doc.createElement('div');
        const formHeaderTitle = doc.createElement('h2');
        const formHeaderCancel = doc.createElement('img');

        formHeader.setAttribute('id', 'formHeader');
        formHeaderTitle.textContent = 'New Task';
        formHeaderCancel.setAttribute('src', './images/close.svg');

        formHeaderCancel.addEventListener('click', hideForm);

        formHeader.appendChild(formHeaderTitle);
        formHeader.appendChild(formHeaderCancel);

        newToDoFormDiv.appendChild(formHeader);

        //Body
        const form = doc.createElement('form');

        const body = doc.createElement('div');
        body.setAttribute('id', 'formBody');

            //Task Name-----------------
        const title = doc.createElement('input');
        title.setAttribute('type', 'text');
        title.setAttribute('name', 'taskname');
        title.setAttribute('id', 'taskname');
        title.setAttribute('minlength', '1');
        title.setAttribute('maxlength', '20');
        title.setAttribute('placeholder', 'Task name');
        title.required = true;

        const titleMsg = doc.createElement('p');
        titleMsg.textContent = 'Task must have a name';
        titleMsg.classList.add('formMessage');
        titleMsg.classList.add('hidden');
        titleMsg.setAttribute('id', 'nameMsg');

        body.appendChild(title);
        body.appendChild(titleMsg);

            //Due Date-----------------
        const dueDateDiv = doc.createElement('div');

        const dueDateLabel = doc.createElement('label');
        dueDateLabel.setAttribute('for', 'dueDateInput');
        dueDateLabel.textContent = "Due:";

        const dueDateInput = doc.createElement('input');
        dueDateInput.setAttribute('type', 'date');
        dueDateInput.setAttribute('id', 'dueDateInput');
        dueDateInput.setAttribute('value', format(Date.now(), 'MM/dd/yyyy'));
        dueDateInput.setAttribute('min', Date.now());

        dueDateDiv.append(dueDateLabel, dueDateInput);
        body.appendChild(dueDateDiv);

            //Priority-----------------
        const priorityDiv = doc.createElement('div');
        priorityDiv.setAttribute('id', 'priorityDiv');

        const priorityLabel = doc.createElement('span');
        priorityLabel.textContent = 'Priority:';

        priorityDiv.appendChild(priorityLabel);

        buildPriorityButton(priorityDiv, 'low');
        buildPriorityButton(priorityDiv, 'med');
        buildPriorityButton(priorityDiv, 'high');
        

        body.appendChild(priorityDiv);

        //Footer
        const footer = doc.createElement('div');
        footer.setAttribute('id', 'formFooter');

        const newTaskSubmit = doc.createElement('button');
        newTaskSubmit.textContent = 'Submit';
        newTaskSubmit.classList.add('formSubmit');

        footer.appendChild(newTaskSubmit);

            //Add event listener to submit button to validate input
        newTaskSubmit.addEventListener('click', function(event){
            event.preventDefault();

            const priority = getPriority();

            validate.todoForm(
                title.value, 
                proj,
                dueDateInput.value,
                priority);
            
        });

        //Button that validates input
        form.append(body, footer);
        newToDoFormDiv.appendChild(form);

        container.appendChild(newToDoFormDiv);
    }

    //Build a priority button
    function buildPriorityButton(parentDiv, priority) {
        const newBtn = doc.createElement('div');
        newBtn.classList.add(priority);
        newBtn.classList.add('priorityBtn');

        //First character uppercase
        const displayString = priority[0].toUpperCase() + priority.slice(1);
        newBtn.textContent = displayString;

        //Add event listener to select priority
        newBtn.addEventListener('click', function(event) {
            Array.from(doc.querySelectorAll('.priorityBtn')).forEach((btn) => {
                btn.classList.remove('selectedPriority');
            });

            this.classList.add('selectedPriority');
        });

        if (priority === 'low') {newBtn.classList.add('selectedPriority');}

        parentDiv.appendChild(newBtn);
    }

    //Show error message when no title is given
    function invalid() {
        doc.getElementById('nameMsg').classList.toggle('hidden');
    }

    //Determine the selected priority level for a task
    function getPriority(){
        return doc.querySelector('.selectedPriority').textContent;
    }

    return {
        showForm,
        invalid,
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
        li.setAttribute('data-project', proj.title);
        li.classList.add('projectLi');
        li.appendChild(img);
        li.appendChild(span);

        projLists.appendChild(li);

        li.addEventListener('click', function() {
            show.showOneProject(proj);
            // updateSidebar.showCurrent(e.target);
        });

        li.addEventListener('click', updateSidebar.showCurrent);
    }

    //Remove project from sidebar
    function removeProject(proj) {
        const allLi = Array.from(doc.querySelectorAll('.projectLi'));
        allLi.forEach((li) => {
            let data = li.getAttribute('data-project');
            if (data == proj.title) {
                li.remove();
            }
        });

        show.showAllProjects();
    }

    //Show current sidebar selection
    function showCurrent(evt) {
        removeCurrent();
        evt.currentTarget.classList.add('selectedSide');
    }

    //Clear all sidebar selections
    function removeCurrent() {
        const sideItems = Array.from(doc.querySelectorAll('li'));
        sideItems.forEach((side) => {
            side.classList.remove('selectedSide');
        });
    }

    return {
        addNewProject,
        removeProject,
        showCurrent,
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

            // const menuButton = doc.createElement('img');
            // menuButton.setAttribute('src', './images/dotmenu.svg');
            // menuButton.classList.add('projMenuBtn');
            // menuButton.addEventListener('click', function() {
            //     //This function opens the menu when clicked
            // });

            projHeader.append(h2);
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
            projContainer.addEventListener('click', function() {
                show.showOneProject(proj);
            });
        })

        content.appendChild(allProjectsSpace);
    }

    //Show selected project
    function showOneProject(proj) {
        clearWorkSpace.clearAll();

        const content = doc.getElementById('content');
        const oneProjectSpace = doc.createElement('div');
        oneProjectSpace.classList.add('oneProjectSpace');

        const oneProjCard = doc.createElement('div');
        oneProjCard.classList.add('oneProjectCard');
        oneProjectSpace.appendChild(oneProjCard);

        //Card header
        const projHeader = doc.createElement('div');
        projHeader.classList.add('allProjectsContainersHeader');

        const h1 = doc.createElement('h1');
        h1.textContent = proj.title;

        const menuBtns = doc.createElement('div');
        menuBtns.setAttribute('id', 'menuBtns');

        const edit = doc.createElement('img');
        edit.setAttribute('src', './images/edit.svg');
        edit.classList.add('projMenuBtn');
        edit.addEventListener('click', () => {
            //This function opens the menu when clicked
        });

        const trash = doc.createElement('img');
        trash.setAttribute('src', './images/delete.svg');
        trash.classList.add('projMenuBtn');
        trash.addEventListener('click', () => {
            projects.deleteProject(proj);
        });

        menuBtns.append(edit, trash);

        projHeader.append(h1, menuBtns);

        oneProjCard.appendChild(projHeader);

        //Card body
        const projCardBody = doc.createElement('div');
        projCardBody.setAttribute('id', 'projCardBody');

            //Description------------------
        const projDescription = doc.createElement('span');
        projDescription.textContent = proj.description;
        const projCreated = doc.createElement('span');
        projCreated.textContent = `Created ${proj.timeCreated}`;

        projCardBody.append(projDescription, projCreated);

            //Add to do button------------------
        const addTodoDiv = doc.createElement('div');
        addTodoDiv.classList.add('addTodoDiv');

        const addTodoImg = doc.createElement('img');
        addTodoImg.setAttribute('src', './images/add.svg');

        const addTodoText = doc.createElement('span');
        addTodoText.textContent = 'New task';

        addTodoDiv.addEventListener('click', function() {
            newToDo.showForm(proj);
        });

        addTodoDiv.append(addTodoImg, addTodoText);

        projCardBody.appendChild(addTodoDiv);

            //Add each to do item to page------------------
        proj.toDoItems.forEach((item) => {
            showTodo(item, projCardBody, proj);
        });

        oneProjCard.appendChild(projCardBody);

        content.appendChild(oneProjectSpace);
    }

    //Add each to do item to page
    function showTodo(item, body, proj) {
        const todoContainer = doc.createElement('div');
        todoContainer.classList.add('task');
        
        const div1 = doc.createElement('div');

        const checkBox = doc.createElement('input');
        checkBox.setAttribute('type', 'checkbox');

        //If box is checked, remove task from array and page
        checkBox.addEventListener('change', () => {
            if (checkBox.checked === true) {
                proj.removeTodo(item);
                showOneProject(proj);
            }
        });

        const taskTitle = doc.createElement('span');
        taskTitle.textContent = item.title;
        
        div1.append(checkBox, taskTitle);


        const div2 = doc.createElement('div');

        const taskDue = doc.createElement('span');
        taskDue.textContent = `Due: ${item.dueDate}`;

        const editBtn = doc.createElement('img');
        editBtn.setAttribute('src', './images/edit.svg');

        const trashBtn = doc.createElement('img');
        trashBtn.setAttribute('src', './images/delete.svg');
        trashBtn.addEventListener('click', () => {
            proj.removeTodo(item);
            showOneProject(proj);
        });

        div2.append(taskDue, editBtn, trashBtn);

        todoContainer.append(div1, div2);

        updateTaskBorder(item, todoContainer);

        body.appendChild(todoContainer);
    }

    //Updates style of task based on priority level
    function updateTaskBorder(task, div) {
        div.classList.remove('lowTask');
        div.classList.remove('medTask');
        div.classList.remove('highTask');

        switch (task.priority) {
            case 'Low':
                div.classList.add('lowTask');
                break;
            case 'Med':
                div.classList.add('medTask');
                break;
            case 'High':
                div.classList.add('highTask');
                break;
        }
    }

    //Show all tasks that meet filter requirement
    function showFilteredTasks(filteredItem, proj) {
        const todoContainer = doc.createElement('div');
        todoContainer.classList.add('task');
        
        const div1 = doc.createElement('div');

        const checkBox = doc.createElement('input');
        checkBox.setAttribute('type', 'checkbox');

        //If box is checked, remove task from array and page
        checkBox.addEventListener('change', () => {
            if (checkBox.checked === true) {
                proj.removeTodo(item);
                showOneProject(proj);
            }
        });

        const taskTitle = doc.createElement('span');
        taskTitle.textContent = filteredItem.title;
        
        div1.append(checkBox, taskTitle);

        const div2 = doc.createElement('div');

        const taskDue = doc.createElement('span');
        taskDue.textContent = `Due: ${filteredItem.dueDate}`;

        const editBtn = doc.createElement('img');
        editBtn.setAttribute('src', './images/edit.svg');

        const trashBtn = doc.createElement('img');
        trashBtn.setAttribute('src', './images/delete.svg');
        trashBtn.addEventListener('click', () => {
            proj.removeTodo(filteredItem);
            showOneProject(proj);
        });

        div2.append(taskDue, editBtn, trashBtn);

        todoContainer.append(div1, div2);

        updateTaskBorder(filteredItem, todoContainer);

        const taskArea = doc.querySelector('.oneProjectCard');
        taskArea.appendChild(todoContainer);
    }

    //Updates style of task based on priority level
    function updateTaskBorder(task, div) {
        div.classList.remove('lowTask');
        div.classList.remove('medTask');
        div.classList.remove('highTask');

        switch (task.priority) {
            case 'Low':
                div.classList.add('lowTask');
                break;
            case 'Med':
                div.classList.add('medTask');
                break;
            case 'High':
                div.classList.add('highTask');
                break;
        }
    }

    function taskSpace(header) {
        clearWorkSpace.clearAll();

        const content = doc.getElementById('content');

        const space = doc.createElement('div');
        space.classList.add('oneProjectSpace');

        const taskArea = doc.createElement('div');
        taskArea.classList.add('oneProjectCard');

        const h1 = doc.createElement('h1');
        h1.textContent = header;
        h1.classList.add('filteredHeader');
        taskArea.appendChild(h1);

        space.appendChild(taskArea);

        content.appendChild(space);
    }

    function showYear() {
        const crYear = doc.getElementById('copyrightyear');
        crYear.textContent = format(Date.now(), 'yyyy');
    }

    showYear();

    return {
        showAllProjects,
        showOneProject,
        showTodo,
        showFilteredTasks,
        taskSpace,
    }

})(document);

//Event listeners
export const listeners = (function(doc) {
    const todoToday = doc.getElementById('todoToday');
    todoToday.addEventListener('click', () => {
        show.taskSpace('Due Today');
        getTasks.filtered(format(Date.now(), 'MM/dd/yyyy'));
    });
    todoToday.addEventListener('click', updateSidebar.showCurrent);

    const allProjects = doc.getElementById('allProjects');
    allProjects.addEventListener('click', show.showAllProjects);
    allProjects.addEventListener('click', updateSidebar.showCurrent);

    const newProjectBtn = doc.getElementById('newProjectSideBar');
    newProjectBtn.addEventListener('click', newProject.showForm);

    const allTodos = doc.getElementById('allTodos');
    allTodos.addEventListener('click', () => {
        show.taskSpace('All Tasks');
        getTasks.filtered('');
    });
    allTodos.addEventListener('click', updateSidebar.showCurrent);

})(document);