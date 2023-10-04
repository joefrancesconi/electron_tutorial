// This covers the updateable settings for the replacement variables

//get DOM elements
const form = document.querySelector('form');
const input = document.querySelector("[name='rep']");
const list = document.getElementById('replacements');

const existingReplacements = JSON.parse(localStorage.getItem('replacements'));

//get saved replacements
const savedReplacements = existingReplacements || [];

savedReplacements.forEach(rep => {
    addRep(rep);
});

function addRep(repText){
    savedReplacements.push(repText);
    const li = document.createElement('li');
    li.innerHTML = repText;
    list.appendChild(li);
    localStorage.setItem('replacements', JSON.stringify(savedReplacements));
}

// events
form.onsubmit = (event) => {
    event.preventDefault();
    addRep(input.value);
}