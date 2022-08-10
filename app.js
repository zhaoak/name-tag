// import functions and grab DOM elements
//set nameInput to reference to html element with ID 'name'
const heading = document.getElementById('heading');
const nameInput = document.getElementById('name');
const titleInput = document.getElementById('title');
const phoneNumInput = document.getElementById('phoneNum');
const classSelect = document.getElementById('class');

const nameOnCard = document.getElementById('nameOnCard');
const titleOnCard = document.getElementById('titleOnCard');
const phoneNumOnCard = document.getElementById('phoneNumOnCard');
const classOnCard = document.getElementById('classOnCard');

// let state

// set event listeners
//listen for event to trigger header to change when anything is typed into box
nameInput.addEventListener('input', () => {
    nameOnCard.textContent = nameInput.value;
});
titleInput.addEventListener('input', () => {
    titleOnCard.textContent = titleInput.value;
});
phoneNumInput.addEventListener('input', () => {
    phoneNumOnCard.textContent = phoneNumInput.value;
});
classSelect.addEventListener('change', () => {
    classOnCard.textContent = classSelect.value;
});

// get user input
// use user input to update state
// update DOM to reflect the new state

document.title = 'Business Card Maker';
heading.textContent = 'Business Card Maker';
