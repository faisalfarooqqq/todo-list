import { displayDailyTasks, displayHomeTasks, displayProjects, displayTasks, displayWeeklyTasks, toggleFormContainer, toggleProjectForm} from './modules/DOMElements';
import { clearLocalStorage, retrieveProjectsFromLocalStorage, saveDataToLocalStorage } from './modules/localstorage';
import { Task } from './modules/task';
import { Project } from './modules/project';
import './style.css';

const addTaskButton = document.getElementById('addButton');
const createNewBtn = document.getElementById('createNewBtn');
const closeFormBtn = document.getElementById('closeBtn');
const homeLink = document.getElementById('homeLink');
const weekLink = document.getElementById('weekLink');
const todayLink = document.getElementById('todayLink');
const createProjecBtn = document.getElementById('createProjecBtn');
const addProjectButton = document.getElementById('addProjectButton');
const closeProjectBtn = document.getElementById('closeProjectFormBtn');



const loadPage = () => {
   const allProjects = retrieveProjectsFromLocalStorage('Projects');

   
   displayProjects(allProjects);
   displayHomeTasks();
}
loadPage();


function getTaskInputValues() {
    const taskTitle = document.getElementById('title').value;
    const taskDescription = document.getElementById('description').value;
    const taskDueDate = document.getElementById('dueDate').value;

    const prioritySelect = document.getElementById('priority');
    const taskPriority = prioritySelect.options[prioritySelect.selectedIndex].value;

    const projectSelect = document.getElementById('projectSelection');
    const selectedProjectID = projectSelect.options[projectSelect.selectedIndex].value;

    return { taskTitle, taskDescription, taskDueDate, taskPriority, selectedProjectID };
}

function checkRequiredFields(taskTitle, taskDescription, taskDueDate) {
    return taskTitle.trim() !== '' && taskDescription.trim() !== '' && taskDueDate.trim() !== '';
}

function createTaskObject(taskTitle, taskDescription, taskDueDate, taskPriority, selectedProjectID) {
    return new Task(taskTitle, taskDescription, taskDueDate, taskPriority, selectedProjectID);
}

function handleTaskCreation() {
    const { taskTitle, taskDescription, taskDueDate, taskPriority, selectedProjectID } = getTaskInputValues();

    if (checkRequiredFields(taskTitle, taskDescription, taskDueDate)) {
        const task = createTaskObject(taskTitle, taskDescription, taskDueDate, taskPriority, selectedProjectID);
        return task;
    } else {
        alert('Please enter all required information.');
        return null;
    }
}

function handleAddTaskButtonClick() {
    const task = handleTaskCreation();

    if (task) {
        const existingProjects = retrieveProjectsFromLocalStorage('Projects');
        const selectedProject = existingProjects.find(project => project._projectID === task.projectID);

        selectedProject.addTask(task);
        saveDataToLocalStorage('Projects', existingProjects);
        displayTasks(selectedProject);
        clearInputFields();
        toggleFormContainer();
    }
}

function clearInputFields() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
}

// Event listener
addTaskButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleAddTaskButtonClick();
});


addProjectButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const projectTitleInput = document.getElementById('projectTitle').value;
    const project = new Project(projectTitleInput); 
  
    const existingProjects = retrieveProjectsFromLocalStorage('Projects');
  
    existingProjects.push(project);
    saveDataToLocalStorage('Projects', existingProjects); 
    document.getElementById('projectTitle').value = '';
    toggleProjectForm();
    displayProjects(existingProjects);
    
  });
  
createNewBtn.addEventListener('click', ()=> {
    toggleFormContainer();
});

createProjecBtn.addEventListener('click', ()=> {
    toggleProjectForm();

});

closeProjectBtn.addEventListener('click', ()=> {
    console.log("close button was clicked");
    toggleProjectForm();

});


closeFormBtn.addEventListener('click', ()=> {
    toggleFormContainer();
});

homeLink.addEventListener('click', (event)=> {
    event.preventDefault();
    console.log('home was clicked');
    displayHomeTasks();
   
});

weekLink.addEventListener('click', (event)=> {
    event.preventDefault();
    console.log('week was clicked');
    displayWeeklyTasks();
});

todayLink.addEventListener('click', (event)=> {
    event.preventDefault();
    console.log('today was clicked');
    displayDailyTasks();
});

