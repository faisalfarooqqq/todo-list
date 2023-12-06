import deleteIcon from '../images/delete.svg';
import closeIcon from '../images/close.svg';
import { deleteProjectFromLS, retrieveProjectsFromLocalStorage, deleteTaskFromLS, retrieveTaskFromLS, updateTaskInLocalStorage, getDailyTasks, getWeeklyTasks, getAllTasks } from './localstorage';
import { Project } from './project';
import { Task } from './task';

function displayTasks(project){
    const contentDiv = document.querySelector('.main');

    contentDiv.innerHTML = '';

    project.getTasks().forEach(task =>{
        const taskDiv = createDisplayTaskDiv(task);
        contentDiv.append(taskDiv);
    })
}
function deleteProject(_projectID) {
    console.log('Deleting project with ID:', _projectID);
    deleteProjectFromLS('Projects', _projectID);
    
    // Retrieve the updated projects after deletion
    const updatedProjects = retrieveProjectsFromLocalStorage('Projects');
    
    // Update the display of projects
    displayProjects(updatedProjects);
}

function deleteTask(_taskID){
    deleteTaskFromLS(_taskID);
    const updatedProjects = retrieveProjectsFromLocalStorage('Projects');
    displayProjects(updatedProjects);
}

// Function to determine the background color based on priority
function getPriorityColor(priority) {
  switch (priority.toLowerCase()) {
      case 'low':
          return 'yellow';
      case 'medium':
          return 'orange';
      case 'high':
          return 'red';
      default:
          // Handle unexpected priority values or return a default color
          return 'gray';
  }
}
function displayTaskDetails(projectID, taskID){
  
  const currentTask = retrieveTaskFromLS(projectID, taskID);
  const taskDetailsDiv = createTaskDetailsDiv(currentTask);
  
  document.body.appendChild(taskDetailsDiv);

};

function createTaskDetailsDiv(task){
   const taskDetailskDiv = document.createElement('div');
   taskDetailskDiv.classList.add('taskDetailsDiv');
   taskDetailskDiv.dataset.taskId = task.taskID;
   taskDetailskDiv.dataset.projID = task.projectID;

    // Add an img tag for the delete icon
    const closeIconImg = new Image();
    closeIconImg.src = closeIcon;
    closeIconImg.alt = 'Close Icon';
    closeIconImg.classList.add('closeIcon');

      // Add click event listener to closeIconImg
  closeIconImg.addEventListener('click', () => {
    closeDetailsTab();
  });


   
    const titleElement = document.createElement('p');
    titleElement.classList.add('taskTitleDetails');
    titleElement.textContent = "Task: " + task.title;

    const projectElement = document.createElement('p');
    projectElement.classList.add('projectDetails');
    projectElement.textContent = "Project: " + task.projectID;

    
    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('taskDescripDetails');
    descriptionElement.textContent = "Description: " + task.description;
    
    const dueDateElement = document.createElement('p');
    dueDateElement.classList.add('taskDueDateDetails');
    dueDateElement.textContent = "DueDate: " + task.dueDate;
    
    const priorityElement = document.createElement('p');
    priorityElement.classList.add('taskPriorityDetails');
    priorityElement.textContent = "Priority: " + task.priority;
    priorityElement.style.backgroundColor = getPriorityColor(task.priority);

    const buttonContainer = document.createElement('div');


    const editTaskBtn = document.createElement('button');
    editTaskBtn.classList.add('editBtn');
    editTaskBtn.textContent = "Edit";
    editTaskBtn.setAttribute('data-taskid', task.taskID);

    editTaskBtn.addEventListener('click', (event) => {
      const taskDiv = event.target.closest('.taskDetailsDiv');
      
      if (taskDiv) {
          closeDetailsTab();
          const taskID = taskDiv.dataset.taskId;
          const projectID = taskDiv.dataset.projID;

          createEditTaskForm(projectID, taskID);
        }else {
              console.error('Error');
          }

  });
  
    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.classList.add('delBtn')
    deleteTaskBtn.textContent = "Delete";
    deleteTaskBtn.setAttribute('data-taskid', task.taskID);

    deleteTaskBtn.addEventListener('click', (event) => {

        const taskID = event.target.getAttribute('data-taskid');

        deleteTask(taskID); 
        closeDetailsTab();
    });
    taskDetailskDiv.appendChild(closeIconImg);
    taskDetailskDiv.appendChild(titleElement);
    taskDetailskDiv.appendChild(descriptionElement);
    taskDetailskDiv.appendChild(dueDateElement);
    taskDetailskDiv.appendChild(priorityElement);
    buttonContainer.appendChild(editTaskBtn);
    buttonContainer.appendChild(deleteTaskBtn);
    taskDetailskDiv.append(buttonContainer);

    return taskDetailskDiv;

}

function closeDetailsTab(){
  const taskDetailsDiv = document.querySelector('.taskDetailsDiv');
  document.body.removeChild(taskDetailsDiv);
};

function createDisplayTaskDiv(task){
    
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');
    taskDiv.dataset.taskId = task.taskID;
    taskDiv.dataset.projID = task.projectID;
   
    const titleElement = document.createElement('h2');
    titleElement.classList.add('taskTitleElement');
    titleElement.textContent = task.title;

    const dueDateElement = document.createElement('p');
    dueDateElement.classList.add('taskDueDateElement');
    dueDateElement.textContent = task.dueDate;
    
    const priorityElement = document.createElement('p');
    priorityElement.classList.add('taskPriorityElement');
    priorityElement.textContent = task.priority;
    priorityElement.style.backgroundColor = getPriorityColor(task.priority);

    const detailsBtn = document.createElement('button');
    detailsBtn.classList.add('detailsBtnElement');
    detailsBtn.textContent = "Details";
    detailsBtn.setAttribute('data-taskid', task.taskID);

    detailsBtn.addEventListener('click', (event) => {
      const taskDiv = event.target.closest('.taskDiv');
      
      if (taskDiv) {
          const taskID = taskDiv.dataset.taskId;
          const projectID = taskDiv.dataset.projID;

          displayTaskDetails(projectID, taskID);
        }else {
              console.error('Error');
          }

  });
  
    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.classList.add('delBtnElement')
    deleteTaskBtn.textContent = "Delete";
    deleteTaskBtn.setAttribute('data-taskid', task.taskID);

    deleteTaskBtn.addEventListener('click', (event) => {

        const taskID = event.target.getAttribute('data-taskid');

        deleteTask(taskID); 
    });

    taskDiv.appendChild(titleElement);
    taskDiv.appendChild(dueDateElement);
    taskDiv.appendChild(priorityElement);
    taskDiv.append(detailsBtn);
    taskDiv.append(deleteTaskBtn);

    return taskDiv;

}

function toggleFormContainer() {
    const formContainer = document.getElementById('formContainer');
    formContainer.classList.toggle('formContainerHidden');
    formContainer.classList.toggle('formContainerActive');

}

function toggleProjectForm(){
    const projectContainer = document.getElementById('projectFormContainer');
    projectContainer.classList.toggle('projectFormContainerHidden');
    projectContainer.classList.toggle('projectFormContainerActive');
}

function displayProjects(projects) {

    const projectSelectionDropdown = document.getElementById('projectSelection');
    projectSelectionDropdown.innerHTML = ''; 

    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project._projectID;
        option.text = project.title;
        projectSelectionDropdown.appendChild(option);
    });

    const projectContainer = document.getElementById('projectsContainer');
    projectContainer.innerHTML = '';
  
    projects.forEach(project => {
      const projectItem = document.createElement('li');
      projectItem.textContent = project.title;
  
      // Set the id attribute to the _projectID (or projectID, depending on your actual property name)
      projectItem.id = project._projectID;
  
      // Add an img tag for the delete icon
      const deleteIconImg = new Image();
      deleteIconImg.src = deleteIcon; // Use the imported delete icon
      deleteIconImg.alt = 'Delete Icon';
      deleteIconImg.classList.add('deleteIcon');
  
      // Attach a click event listener to delete the project
      deleteIconImg.addEventListener('click', (event) => {
        event.stopPropagation();
        deleteProject(project._projectID);
   
      });
      // Attach a click event listener to display tasks when the project is clicked
      projectItem.addEventListener('click', () => displayTasks(project));
  
      // Append the delete icon to the project element
      projectItem.appendChild(deleteIconImg);
  
      // Append the project element to the container
      projectContainer.appendChild(projectItem);
    });
  
    if (projects.length > 0) {
      displayTasks(projects[0]);
    }
  }

  // Function to dynamically create an edit task form
function createEditTaskForm(projectID, taskID) {
  
  const taskToEdit = retrieveTaskFromLS(projectID, taskID);

  const editTaskContainer = document.createElement('div');
  editTaskContainer.classList.add('editTaskContainer');

  const editTaskForm = document.createElement('form');
    editTaskForm.id = 'editTaskForm';
  
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = taskToEdit.title;
    titleInput.id = 'editTitle';
  
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.value = taskToEdit.description;
    descriptionInput.id = 'editDescription';
  
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.value = taskToEdit.dueDate;
    dueDateInput.id = 'editDueDate';
  
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    const priorityInput = document.createElement('select');
    // Assuming you have priority options in your project
    const priorityOptions = ['Low', 'Medium', 'High'];
    priorityOptions.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.text = option;
      priorityInput.add(optionElement);
    });
    priorityInput.value = taskToEdit.priority;
    priorityInput.id = 'editPriority';
  
    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.textContent = 'Save';
  
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
  
    // Append elements to the form
    editTaskForm.append(
      titleLabel,
      titleInput,
      descriptionLabel,
      descriptionInput,
      dueDateLabel,
      dueDateInput,
      priorityLabel,
      priorityInput,
      saveButton,
      cancelButton
    );

    editTaskContainer.appendChild(editTaskForm);
  
    // Handle save button click
    saveButton.addEventListener('click', () => {
      // Assuming 'task' is the current task being edited
      saveChanges(taskToEdit);
      const allProjects = retrieveProjectsFromLocalStorage('Projects');

      displayProjects(allProjects);
      
    });
  
    // Handle cancel button click
    cancelButton.addEventListener('click', () => {
      
      document.body.removeChild(editTaskContainer);
      
    });
  
    // Append the form to the body
    document.body.appendChild(editTaskContainer);
  }

  function saveChanges(taskToEdit) {
   
    const updatedTask = taskToEdit;
    console.log(updatedTask);

    const updatedTitle = document.getElementById('editTitle').value;
    const updatedDescription = document.getElementById('editDescription').value;
    const updatedDueDate = document.getElementById('editDueDate').value;
    const updatedPriority =  document.getElementById('editPriority').value;

    updatedTask.title = updatedTitle;
    updatedTask.description = updatedDescription;
    updatedTask.dueDate = updatedDueDate;
    updatedTask.priority = updatedPriority;

        // Check if any of the updated values are empty
        if (
          updatedTitle.trim() === '' ||
          updatedDescription.trim() === '' ||
          updatedDueDate.trim() === '' ||
          updatedPriority.trim() === ''
      ) {
          console.error('Incomplete or empty task data.');
          return;
      }
    updateTaskInLocalStorage(updatedTask);

    const editTaskContainer = document.querySelector('.editTaskContainer');
    document.body.removeChild(editTaskContainer);


}

function displayDailyTasks() {
  const contentDiv = document.querySelector('.main');
  contentDiv.innerHTML = '';
  const todayTasks = getDailyTasks();

  if (todayTasks.length === 0) {
    // If there are no tasks for today, display a message
    contentDiv.textContent = 'No tasks for today.';
  } else {
    // If there are tasks for today, display each task
    todayTasks.forEach(task => {
      const taskDiv = createDisplayTaskDiv(task);
      contentDiv.append(taskDiv);
    });
  }
}

function displayWeeklyTasks() {
  const contentDiv = document.querySelector('.main');
  contentDiv.innerHTML = '';
  const weeklyTasks = getWeeklyTasks();

  if (weeklyTasks.length === 0) {
    // If there are no tasks for the week, display a message
    contentDiv.textContent = 'No tasks for this week.';
  } else {
    // If there are tasks for the week, display each task
    weeklyTasks.forEach(task => {
      const taskDiv = createDisplayTaskDiv(task);
      contentDiv.append(taskDiv);
    });
  }
}

function displayHomeTasks(){
  const contentDiv = document.querySelector('.main');
  contentDiv.innerHTML = '';
  const homeTasks = getAllTasks();

  if (homeTasks.length === 0) {
    contentDiv.textContent = 'No tasks.';
  } else {
    homeTasks.forEach(task => {
      const taskDiv = createDisplayTaskDiv(task);
      contentDiv.append(taskDiv);
    });
  }

};

export {displayTasks, toggleFormContainer, toggleProjectForm, displayProjects, displayDailyTasks, displayWeeklyTasks, displayHomeTasks}