const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

 if (close){
     close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


/* Add to  Cart */

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
    name: 'Asus E410M',
    tag: 'asuse410m',
    price: 300.000,
    inCart: 0
},

{
    name: 'Hp Stream',
    tag: 'hpstream',
    price: 250.000,
    inCart: 0
},

{
    name: 'Lenovo ThinkPad',
    tag: 'lenovothinkpad',
    price: 150.000,
    inCart: 0
},

{
    name: 'Acer Aspire',
    tag: 'aceraspire',
    price: 180.000,
    inCart: 0
},
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        console.log("Added to Cart");
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
  
    let productNumbers = localStorage.getItem('cartNumbers');
   productNumbers = parseInt(productNumbers);
    
   if(productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
   } else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
   }

   setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)

    if (cartItems != null) {

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else{
        product.inCart = 1;
        cartItems = {
        [product.tag]: product
         }

    }

    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();