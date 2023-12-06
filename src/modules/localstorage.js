import { Task } from "./task";
import { Project } from "./project";
import { startOfWeek, endOfWeek, isWithinInterval, isSameDay, parseISO, compareAsc } from 'date-fns';


function saveDataToLocalStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

function retrieveDataFromLocalStorage(key){
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : console.log("not found");
}

function clearLocalStorage(){
    localStorage.clear();
}

function recreateProject(projectData) {
  const project = new Project(projectData._title);
  project._projectID = projectData._projectID;

  const tasks = (projectData._tasks || []).map(taskData => {
      const task = new Task(
          taskData._title,
          taskData._description,
          taskData._dueDate,
          taskData._priority
      );
      task.taskID = taskData._taskID;
      task.projectID = projectData._projectID;

      return task;
  });

  tasks.forEach(task => {
      
      project.addTask(task);
      
  });

  return project;
}

function createDefaultProject() {
  const defaultProject = new Project('Default');
  const fillerTask1 = new Task('Task 1', 'Description 1', '2023-12-01', 'High');
  const fillerTask2 = new Task('Task 2', 'Description 2', '2023-12-02', 'Medium');
  defaultProject.addTask(fillerTask1);
  defaultProject.addTask(fillerTask2);

  return defaultProject;
}

function retrieveProjectsFromLocalStorage(key) {
  const storedData = retrieveDataFromLocalStorage(key) || [];
  console.log(`Retrieved data for key '${key}':`, storedData);

  if (storedData && storedData.length > 0) {
      const reCreatedProjects = storedData.map(projectData => {
          
          return recreateProject(projectData);
      });

      return reCreatedProjects;
  } else {
      // If no projects are stored or the data is not in the expected format, create a default project ('Home')
      const defaultProject = createDefaultProject();
      saveDataToLocalStorage('Projects', [defaultProject]);
      return [defaultProject];
  }
}

  
  function deleteProjectFromLS(key, _projectID) {
    console.log(`Deleting project with ID ${_projectID} from key ${key}`);
    const projects = retrieveDataFromLocalStorage(key) || [];
  
    // Check if the project to be deleted is the default project
    const isDefaultProject = projects.some(project => project._projectID === _projectID && project._title === 'Default');
  
    if (isDefaultProject) {
      console.log("Cannot delete the default project.");
      return;
    }
  
    // Use Array.prototype.filter to create a new array excluding the project with the specified projectID
    const updatedProjects = projects.filter(project => project._projectID !== _projectID);
  
    // Save the updated array back to local storage
    saveDataToLocalStorage(key, updatedProjects);
    console.log(`Project deleted. Updated projects:`, updatedProjects);
  }

  function retrieveTaskFromLS(projectID, taskID) {
    const existingProjects = retrieveProjectsFromLocalStorage('Projects');
  
    // Use Array.prototype.filter to find the projects with the specified projectID
    const matchingProjects = existingProjects.filter(proj => proj.projectID === projectID);
  
    if (matchingProjects.length > 0) {
      const matchingProject = matchingProjects[0];
  
      // Use Array.prototype.filter to find the tasks with the specified taskID within the matching project
      const matchingTasks = matchingProject.getTasks().filter(task => task.taskID === taskID);
  
      if (matchingTasks.length > 0) {
        const requiredTask = matchingTasks[0];
        console.log('Found task:', requiredTask);
        return requiredTask; // Return the task if found
      } else {
        console.log('Task not found in the matching project');
      }
    } else {
      console.log('Project not found');
    }
  
    return null; // Return null if the project or task is not found
  }
  
  

  function deleteTaskFromLS(taskID) {
    // Retrieve the projects from local storage
    const existingProjects = retrieveProjectsFromLocalStorage('Projects');
  
    // Iterate over each project
    existingProjects.forEach(proj => {
      // Get the tasks for the project
      const tasks = proj.getTasks();
  
      // Filter out the task with the given taskID
      const updatedTasks = tasks.filter(task => task.taskID !== taskID);
  
      // Clear existing tasks in the project
      proj._tasks = [];
  
      // Add the updated tasks back to the project
      updatedTasks.forEach(task => proj.addTask(task));
    });
  
    // Save the updated projects back to local storage
    saveDataToLocalStorage('Projects', existingProjects);
  }

  function updateTaskInLocalStorage(updatedTask) {
    if (!updatedTask || !updatedTask.taskID || !updatedTask.title || !updatedTask.description || !updatedTask.dueDate || !updatedTask.priority) {
        console.error('Invalid or incomplete task data.');
        return null;
    }

    const existingProjects = retrieveProjectsFromLocalStorage('Projects');

    // Iterate through projects to find and update the task
    existingProjects.forEach(proj => {
        // Map over tasks in each project
        proj.getTasks().forEach(task => {
            // Check if the current task matches the updatedTask's taskID
            if (task.taskID === updatedTask.taskID) {
                // Use setters to update task properties
                task.title = updatedTask.title;
                task.description = updatedTask.description;
                task.dueDate = updatedTask.dueDate;
                task.priority = updatedTask.priority;
            }
        });
    });

    // Save the existingProjects array back to local storage
    saveDataToLocalStorage('Projects', existingProjects);

    // Return the updated task
    return updatedTask;
}


function getDailyTasks() {
  const currentDate = new Date(); // Assuming currentDate is a Date object
  // Retrieve all projects from local storage
  const allProjects = retrieveProjectsFromLocalStorage('Projects');

  // Array to store daily tasks
  const dailyTasks = [];

  // Iterate over each project
  allProjects.forEach(project => {
    // Get the tasks for the project
    const tasks = project.getTasks();

    // Filter tasks based on the specified date
    const tasksForDate = tasks.filter(task => {
      // Assuming task.dueDate is in the format 'YYYY-MM-DD'
      const taskDueDate = parseISO(task.dueDate); // Parse the dueDate string to a Date object
      return isSameDay(taskDueDate, currentDate);
    });

    // Add the filtered tasks to the dailyTasks array
    dailyTasks.push(...tasksForDate);
  });

  return dailyTasks;
}

function getWeeklyTasks() {
  const currentDate = new Date();
  console.log(currentDate);
  const startOfWeekDate = startOfWeek(currentDate); // Start of the current week
  console.log(startOfWeekDate);
  const endOfWeekDate = endOfWeek(currentDate); // End of the current week
  console.log(endOfWeekDate);

  // Retrieve all projects from local storage
  const allProjects = retrieveProjectsFromLocalStorage('Projects');

  // Array to store weekly tasks
  const weeklyTasks = [];

  // Iterate over each project
  allProjects.forEach(project => {
    // Get the tasks for the project
    const tasks = project.getTasks();

    // Filter tasks based on the weekly range
    const tasksForWeek = tasks.filter(task => {
      // Assuming task.dueDate is in the format 'YYYY-MM-DD'
      const taskDueDate = new Date(task.dueDate);
      return isWithinInterval(taskDueDate, { start: startOfWeekDate, end: endOfWeekDate });
    });

    // Add the filtered tasks to the weeklyTasks array
    weeklyTasks.push(...tasksForWeek);
  });

  return weeklyTasks;
}

function getAllTasks() {
  // Retrieve all projects from local storage
  const allProjects = retrieveProjectsFromLocalStorage('Projects');

  // Array to store all tasks
  let allTasks = [];

  // Iterate over each project
  allProjects.forEach(project => {
    // Get the tasks for the project
    const tasks = project.getTasks();

    // Add the tasks to the allTasks array
    allTasks.push(...tasks);
  });

  // Sort tasks by due date in ascending order
  allTasks.sort((taskA, taskB) => {
    const dateA = parseISO(taskA.dueDate);
    const dateB = parseISO(taskB.dueDate);
    return compareAsc(dateA, dateB);
  });

  return allTasks;
}

  

export { retrieveProjectsFromLocalStorage, clearLocalStorage, saveDataToLocalStorage, deleteTaskFromLS, deleteProjectFromLS, retrieveTaskFromLS, updateTaskInLocalStorage, getDailyTasks, getWeeklyTasks, getAllTasks };