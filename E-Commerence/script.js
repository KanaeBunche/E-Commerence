document.addEventListener('DOMContentLoaded', () => {
    //Step 1: Define an array of products (object)

    const products =[
        {id: 1 , name: 'Red T-Shirt', price: 20, img:"Images/red-t-shirt.jpeg"},
        {id: 2 , name : 'Red T-Shirt', price: 20, img: 'Images/red-t-shirt.jpeg'},
        {id: 3 , name: 'Red T-Shirt', price: 10, img: 'Images/red-t-shirt.jpeg'},
        {id: 4 , name : 'Red T-Shirt', price: 20, img: 'Images/red-t-shirt.jpeg'},
        {id: 5 , name: 'Red T-Shirt', price: 20, img: 'Images/red-t-shirt.jpeg'},
        {id: 6 , name : 'Red T-Shirt', price: 20, img: 'Images/red-t-shirt.jpeg'},
        {id: 7 , name: 'Red T-Shirt', price: 20, img: 'Images/red-t-shirt.jpeg'},
        {id: 8 , name : 'Red T-Shirt', price: 20, img: 'Images/red-t-shirt.jpeg'},
        {id: 9 , name: 'Red T-Shirt', price: 20, img: 'Images/red-t-shirt.jpeg'},
        {id: 10 , name : 'Red T-Shirt', price: 20, img:'Images/red-t-shirt.jpeg'},
 ]
 


// Step 2 : Initialize cart and whishlist counts
let cartCount = 0;
let heartCount = 0;

// Step 3 : Get DOM elements
const searchInput = document.getElementById("search");
const sortPriceButton = document.getElementById("sort-price");
const heartNumber = document.querySelector(".heart-number");
const cartNumber = document.querySelector(".cart-number");
const productContainer = document.getElementById("product-list");


//Step 4: Function to display products 
function displayProducts(productsToShow){
    productContainer.innerHtml = " ";
// Loop through the products
productsToShow.forEach(product => {
 const productDiv = document.createElement('div');
 productDiv.classList.add('product');
 productDiv.innerHTML =`
   <img src="${product.img}" alt="${product.name}">
   <h2> ${product.name}</h2>
   <p class="price">$${product.price}</p>
   <button class="add-cart" data-id="${product.id}">Add to Cart</button>  
   <button class="add-heart" data-id="${product.id}">Add to Wishlist</button>
`;

// Append products 
productContainer.appendChild(productDiv);
})

}

displayProducts(products);

});