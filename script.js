
const divContainer = document.querySelector(`.container`);
divContainer.style.width = `400px`;
divContainer.style.height = `400px`;



// spread it to listen for each div ??
// lets see if it works
/* -----------------------------------------------------
const divT = document.querySelectorAll(`.box`);         |
                                                        
divT.forEach((div) => {
    div.addEventListener(`mouseover`, () => {
        div.style.backgroundColor = `black`;
    });
}); 
-----------------------------------------------------
*/
// it works, but it is not the best way to do it, because it will create a lot of event listeners, 
// which can be bad for performance. A better way to do it is to use event delegation, 
// which means that we will listen for the event on the parent element, and then check if the target of the event is a div. 
// This way we will only have one event listener instead of 256.
// ok lets try it




function createGrid(size) {

    if (size <= 0) return;
    if (size > 100) return alert(`Please enter a number between 1 and 100`);
    let quantity = size ** 2;
    let boxSize = 400 / size;

    for (let i = 0; i < size ** 2; i++) {
        let div = document.createElement('div');
        div.classList.add(`box`);
        div.style.width = `${boxSize}px`;
        div.style.height = `${boxSize}px`;
        divContainer.appendChild(div);
    }

}

const button = document.querySelector(`button`);
button.addEventListener(`click`, () => {
    let size = prompt(`Enter a number between 1 and 100`);
    divContainer.innerHTML = ``;
    createGrid(size);
});

divContainer.addEventListener(`mouseover`, (e) => {
    if (e.target.classList.contains(`box`)) {
        e.target.style.backgroundColor = `black`;
    }
});