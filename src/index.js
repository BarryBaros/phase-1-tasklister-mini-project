// Add an event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
  // Select the form element
  let form = document.querySelector('form');
  // Add an event listener for the 'submit' event on the form
  form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Call the makeToDo function with the value entered in the new_task_description input field
    makeToDo(e.target.new_task_description.value);
    // Reset the form after the task is added
    form.reset();
  });
});

// Define a function called makeToDo that takes a 'todo' parameter
function makeToDo(todo) {
  // Create a new list item element
  let li = document.createElement('li');
  // Set the text content of the list item to the value of the 'todo' parameter
  li.textContent = `${todo} `;
  // Create a new button element
  let btn = document.createElement('button');
  // Set the text content of the button to 'X'
  btn.textContent = 'X';
  // Add an event listener for the 'click' event on the button, calling the handleDelete function
  btn.addEventListener('click', handleDelete);
  // Append the button to the list item
  li.appendChild(btn);
  // Append the list item to the list with id 'list'
  document.querySelector('#list').appendChild(li);
};

// Define a function called handleDelete that takes an event parameter 'e'
function handleDelete(e) {
  // Remove the parent node of the clicked button (the list item)
  e.target.parentNode.remove();
}
