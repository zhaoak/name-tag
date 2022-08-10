// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

document.title = 'what is this';

//
const heading = document.getElementById('heading');
heading.textContent = 'screeeee';

//set nameInput to reference to html element with ID 'name'
const nameInput = document.getElementById('name');
//listen for event to trigger header to change when anything is typed into box
nameInput.addEventListener('input', () => {
    heading.textContent = nameInput.value;
});
