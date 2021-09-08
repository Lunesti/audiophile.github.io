// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

/*
const add = document.querySelector('.add');
const remove = document.querySelector('.remove');
const items = document.querySelector('.numberOfItems');
const price = document.querySelector('.price');

const headphoneMark2 = ['10']

for (let i = 0; i < headphoneMark2.length; i++) {
    items.textContent = 0;
    add.addEventListener('click', function() {
        items.textContent = i++;
    })
}*/