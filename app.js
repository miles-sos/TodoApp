const main = document.getElementById('main');

/* ELEMENTS SELECTED FROM THE DOM */
const listGroup = document.querySelector('.list-group');
const form = document.querySelector('.data-input');
const message = document.querySelector('.msg');
const search = document.querySelector('#searchText');

/* FORM SUBMIT EVENT */
form.addEventListener('submit', submitForm);

/* DELETE EVENT */
listGroup.addEventListener('click', deleteItem);

/* SEARCH EVENT */
search.addEventListener('keyup', searchItem);

function submitForm(e) {
  e.preventDefault();
  // get form value
  const input = document.querySelector('#input').value.trim();

  if (input) {
    // if (regex.test(input)) {
    /* CREATE A NEW ELEMENT */
    const li = document.createElement('li');

    /* CREATE TEXTNODE */
    const text = document.createTextNode(input[0].toUpperCase() + input.slice(1));

    /* CREATE NEW CHILD ELEMENT */
    const button = document.createElement('button');
    button.className = 'delete';
    button.appendChild(document.createTextNode('delete x'));

    /* ADDING TEXTNODE and NEW button Element TO li ELEMENT */
    li.appendChild(text);
    li.appendChild(button);

    /* APPEND THE BUTTON TO THE NEW ELEMENT */
    listGroup.insertAdjacentElement('beforeend', li);
    // } else {
    //   displayMessage('Some characters are not allowed, please check your words');
    // }
  } else {
    displayMessage('A value is required');
  }
}

function displayMessage(msg) {
  message.innerHTML = `⚠ &nbsp; ${msg}`;
  message.style.display = 'block';
  setTimeout(function () {
    message.style.display = 'none';
  }, 1500);
}

function deleteItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure')) {
      let li = e.target.parentElement;
      listGroup.removeChild(li);
    }
  }
}

function searchItem(e) {
  //   e.preventDefault();
  let searchVal = e.target.value.toLowerCase();
  let items = listGroup.getElementsByTagName('li');
  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(searchVal, 0) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
