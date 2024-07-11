document.addEventListener('DOMContentLoaded', () => {
    //Step 1: Define an array of products (object)

    const products =[
        {id: 1 , name: 'Red T-Shirt', price: 20, img: 'Images.png'},
        {id: 2 , name : 'Purple T-Shirt', price: 20, img: 'Images.png'},
        {id: 3 , name: 'Orange T-Shirt', price: 20, img: 'Orange.png'},
        {id: 4 , name : 'Brown T-Shirt', price: 20, img: 'Images.png'},
        {id: 5 , name: 'Yellow T-Shirt', price: 20, img: 'Images.png'},
        {id: 6 , name : 'Pink T-Shirt', price: 20, img: 'Images.png'},
        {id: 7 , name: 'Blur T-Shirt', price: 20, img: 'Images.png'},
        {id: 8 , name : 'Black T-Shirt', price: 20, img: 'Images.png'},
        {id: 9 , name: 'White T-Shirt', price: 20, img: 'Images.png'},
        {id: 10 , name : 'Red-Orange T-Shirt', price: 20, img:'Images.png'},
 ]
 
});

// Step 2 : Initialize cart and whishlist counts
let cartCount = 0;
let heartCount = 0;

// Step 3 : Get DOM elements
const searchInput = document.getElementById("search");
const sortPriceButton = document.getElementById("sort-price");
const heartNumber = document.getquerySelector(".heart-number");
const cartNumber = document.getquerySelector(".cart-number");
const productContainer = document.getElementById("product-list");


