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

const remove = document.querySelector('.remove');
const items = document.querySelector('.items');
const add = document.querySelector('.add');
const addToCard = document.querySelector('.addToCard');
let price = document.querySelector('.price');

const product = document.querySelector('.product');
const numberOfProducts = document.querySelector('.numberOfProducts');

const headphoneMarkTwoImg = document.querySelector('.headphone-mark-two');

const total = document.querySelector('.total');



items.textContent = 0;

const shoppingList = [{
        product: 'headphone',
        quantity: 25,
        price: 2999
    },
    {
        product: 'earphone',
        quantity: 28,
        price: 110
    },
    {
        product: 'speakers',
        quantity: 14,
        price: 98
    }
];

console.log(shoppingList[0].quantity);

if (shoppingList[0]) {
    price.textContent = shoppingList[0].price
}


// Lorsqu'on clique sur ajouter, on ajoute un produit et on soustrait de un la quantité

// Lorsqu'on ajoute une quantité, on multiplie le prix par 2

add.addEventListener('click', function() {
    if (shoppingList[0]) {
        items.textContent++;
        const totalPrice = parseInt(price.textContent) + shoppingList[0].price;
        price.textContent = totalPrice;

        // price.textContent = totalPrice;
        numberOfProducts.textContent = 'x' + items.textContent;
        numberOfProducts.style.color = '#000';
        shoppingList[0].quantity--;
        console.log(shoppingList[0].quantity);
        if (shoppingList[0].quantity === 0) {
            alert('Maximum atteint !');
        }
        headphoneMarkTwoImg.style.display = 'block';
        product.textContent = 'xx99 mk ii';
    }
});

remove.addEventListener('click', function() {
    if (shoppingList[0]) {
        items.textContent--
            const totalPrice = parseInt(price.textContent) - shoppingList[0].price;
        price.textContent = totalPrice;

        // price.textContent = totalPrice;
        numberOfProducts.textContent = 'x' + items.textContent;
        numberOfProducts.style.color = '#000';
        shoppingList[0].quantity--;
        console.log(shoppingList[0].quantity);
        if (shoppingList[0].quantity === 0) {
            alert('Veuillez sélectionner au moins un produit !');
        }
        headphoneMarkTwoImg.style.display = 'block';
        product.textContent = 'xx99 mk ii';
    }
});