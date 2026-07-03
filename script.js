
const divContainer = document.querySelector(`.container`);

for (let i = 0; i < 16 ** 2; i++) {
    let div = document.createElement('div');
    div.classList.add(`box`);
    divContainer.appendChild(div);
}


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

divContainer.addEventListener(`mouseover`, (e) => {
    if (e.target.classList.contains(`box`)) {
        e.target.style.backgroundColor = `black`;
    }
});
