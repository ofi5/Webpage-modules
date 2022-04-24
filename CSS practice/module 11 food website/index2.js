import {foodItems} from "./fooditems.js";

console.log(foodItems);

function displayItems(){
    let veg = document.getElementById("veg");
    let NonVeg = document.getElementById("nonveg");
    let sides = document.getElementById("sides");

    const vegData = foodItems.filter(item=> item.category=='Veg');
    const nonVegData = foodItems.filter(item => item.category == "NonVeg");
    const sidesData = foodItems.filter(item => item.category=="Sides");

    console.log(vegData);

    vegData.map(item => {
        let menuBox = document.createElement("div");
        menuBox.setAttribute("class", "menu-box");


        let rating = document.createElement("p");
        rating.setAttribute("class", "rating");
        rating.textContent = '⭐' + item.rating;

        let img = document.createElement("img");
        img.setAttribute("class","menu-img");
        img.src=item.img;

        let namePizza = document.createElement("p");
        namePizza.setAttribute("class", "name-pizza");
        namePizza.textContent=item.name;

        let price = document.createElement("price");
        price.setAttribute("class","price-text");
        price.textContent = item.price;

        let btn = document.createElement("button");
        btn.setAttribute("class","cart-btn");
        btn.innerHTML="Add to Cart";

        menuBox.append(rating);
        menuBox.append(img);
        menuBox.append(namePizza);
        menuBox.append(price);
        menuBox.append(btn);
        
        veg.append(menuBox);

        
    })

    nonVegData.map(item => {
        let menuBox = document.createElement("div");
        menuBox.setAttribute("class", "menu-box");

        let rating = document.createElement("p");
        rating.setAttribute("class", "rating");
        rating.textContent = '⭐' + item.rating;

        let img = document.createElement("img");
        img.setAttribute("class", "menu-img");
        img.src = item.img;

        let namePizza = document.createElement("p");
        namePizza.setAttribute("class", "name-pizza");
        namePizza.textContent = item.name;

        let price = document.createElement("price");
        price.setAttribute("class","price-text");
        price.textContent = item.price;

        let btn = document.createElement("button");
        btn.setAttribute("class","cart-btn");
        btn.innerHTML="Add to Cart";

        menuBox.append(rating);
        menuBox.append(img);
        menuBox.append(namePizza);
        menuBox.append(price);
        menuBox.append(btn);

        NonVeg.append(menuBox);

    })

    sidesData.map(item => {
        let menuBox = document.createElement("div");
        menuBox.setAttribute("class", "menu-box");

        let rating = document.createElement("p");
        rating.setAttribute("class", "rating");
        rating.textContent = '⭐' + item.rating;

        let img = document.createElement("img");
        img.setAttribute("class", "menu-img");
        img.src = item.img;

        let namePizza = document.createElement("p");
        namePizza.setAttribute("class", "name-pizza");
        namePizza.textContent = item.name;

        let price = document.createElement("price");
        price.setAttribute("class","price-text");
        price.textContent = item.price;

        let btn = document.createElement("button");
        btn.setAttribute("class","cart-btn");
        btn.innerHTML="Add to Cart";

        menuBox.append(rating);
        menuBox.append(img);
        menuBox.append(namePizza);
        menuBox.append(price);
        menuBox.append(btn);

        sides.append(menuBox);

    })

}

displayItems();

const categoryData = (foodItems.map(item => [item.category,item]));

console.log(categoryData);


document.querySelectorAll(".cart-btn").forEach(item => {
    item.addEventListener("click", addToCart)
})

let cartData = [];

function addToCart() {

    let itemToAdd = this.parentNode.childNodes[2].innerText;
    console.log(itemToAdd);
}


    