//1. Which object will trigger the event
//2. Which event we want the object to listen for
//3. Callback to run when the event is triggered

document.addEventListener('DOMContentLoaded', () => {
    // console.log('JavaScript has loaded');

    const theForm = document.querySelector('#form-element');
    theForm.addEventListener('submit', handleFormSubmit);
    });

    const handleFormSubmit = function (form) {
        form.preventDefault();
        const newShoutOutList = document.createElement('li');
        
        const nameFrom = document.createElement('p');
        nameFrom.textContent = form.target.from.value;
        newShoutOutList.appendChild(nameFrom);

        const nameTo = document.createElement('p');
        nameTo.textContent = form.target.to.value;
        newShoutOutList.appendChild(nameTo);

        const shoutOuts = document.querySelector('#shout-out-list');
        shoutOuts.appendChild(newShoutOutList);
        form.target.reset();
      }