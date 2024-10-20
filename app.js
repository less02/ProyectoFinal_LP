const add = document.querySelectorAll('.add'); //this is targetting or this will target all the items with class add

add.forEach(e=>{
    e.addEventListener('click', ()=>{
        const p = e.previousElementSibling.lastElementChild; //its targetting p element with class hide
        const itemadd = e.firstElementChild; //this is targetting element i with class fa-plus
        const itemrmv = e.lastElementChild;

        e.classList.toggle('none');
        itemadd.classList.toggle('hide');
        itemrmv.classList.toggle('hide');
        p.classList.toggle('show')
    })
}
)