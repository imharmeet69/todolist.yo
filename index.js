function addTodoList() {
   const taskText = document.getElementById("todo-input").value;
 
   if (taskText === "") {
     alert("Please add your task");
     return; // Exit the function if the input is empty
   }
 
   // Get existing tasks from local storage
   let tasks = localStorage.getItem('todoList');
   tasks = tasks ? JSON.parse(tasks) : [];
 
   // Add new task to the list
   tasks.push(taskText);
   localStorage.setItem('todoList', JSON.stringify(tasks)); // Save updated list to local storage
 
   // Create and append the new task div
   const div = document.createElement('div'); 
   div.classList.add('div1');
   div.textContent = taskText;
 
   const deleteBtn = document.createElement('button');
   deleteBtn.classList.add('deleteBtn');
   deleteBtn.textContent = 'Delete';
   div.appendChild(deleteBtn);
 
   const todoList = document.getElementById("todo-list");
   todoList.appendChild(div);
 
   deleteBtn.onclick = function () {
     // Remove the task from the DOM
     div.remove();
 
     // Remove the task from local storage
     tasks = tasks.filter(task => task !== taskText);
     localStorage.setItem('todoList', JSON.stringify(tasks)); // Save updated list to local storage
   };
 
   document.getElementById("todo-input").value = ''; // Clear the input field
 }
 
 // Render the list when the page loads
 window.onload = function() {
   const tasks = localStorage.getItem('todoList');
   if (tasks) {
     JSON.parse(tasks).forEach(taskText => {
       const div = document.createElement('div'); 
       div.classList.add('div1');
       div.textContent = taskText;
 
       const deleteBtn = document.createElement('button');
       deleteBtn.classList.add('deleteBtn');
       deleteBtn.textContent = 'Delete';
       div.appendChild(deleteBtn);
 
       const todoList = document.getElementById("todo-list");
       todoList.appendChild(div);
 
       deleteBtn.onclick = function () {
         div.remove();
         let storedTasks = JSON.parse(localStorage.getItem('todoList'));
         storedTasks = storedTasks.filter(task => task !== taskText);
         localStorage.setItem('todoList', JSON.stringify(storedTasks));
       };
     });
   }
 };
 