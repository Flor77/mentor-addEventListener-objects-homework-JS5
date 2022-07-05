let firstNameInput = document.getElementById('firstname-input');
let lastNameInput = document.getElementById('lastname-input');
let genderInputs = document.querySelectorAll('input[name="gender"]');
let messageInput = document.getElementById('message-input');
let messageOutput = document.getElementById('message-output');
let newParagraph = document.getElementById('new-paragraph')
let newRef = document.getElementById('ref')

let submitButton = document.getElementById('button');

submitButton.addEventListener('click' ,(event) => {
  event.preventDefault();
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let paragraph = messageInput.value;
  let genderOutput;
  for (const genderInput of genderInputs) {
    if (genderInput.checked) {
      genderOutput = genderInput.value;
        break;}
    }
  newRef.innerText = `by ${firstName} ${lastName}, ${genderOutput}`
  newParagraph.innerText = `"${paragraph}" `
})
