import {foodItems} from "./fooditems.js";

// console.log(foodItems);

function displayItems(){
    let veg = document.getElementById("veg");

    const vegData = foodItems.filter(item=> item.category=='Veg');

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

}

displayItems();

