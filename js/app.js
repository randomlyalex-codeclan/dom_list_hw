//1. Which object will trigger the event
//2. Which event we want the object to listen for
//3. Callback to run when the event is triggered

document.addEventListener('DOMContentLoaded', () => {
    // console.log('JavaScript has loaded');

    const theForm = document.querySelector('#form-element');
    theForm.addEventListener('submit', handleFormSubmit);
    });
    let ShoutOutId = 0;
    const handleFormSubmit = function (form) {
        form.preventDefault();

        const newShoutOutList = document.createElement('li');
        ShoutOutId += 1;

        const shoutId = document.createElement('p');
        shoutId.textContent = ShoutOutId;
        newShoutOutList.appendChild(shoutId);

        const nameFrom = document.createElement('p');
        nameFrom.textContent = `Shout out from: ${form.target.from.value}`;
        newShoutOutList.appendChild(nameFrom);

        const nameTo = document.createElement('p');
        nameTo.textContent = `Shout out from: ${form.target.to.value}`;
        newShoutOutList.appendChild(nameTo);

        if ((form.target.from.value) && (form.target.to.value)) {
        const shoutOuts = document.querySelector('#shout-out-list');
        shoutOuts.appendChild(newShoutOutList);
        form.target.reset();
        } else {
            //add my code in here to say please enter name from name to
        }
        
      }