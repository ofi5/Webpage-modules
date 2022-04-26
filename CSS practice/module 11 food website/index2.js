



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
    item.addEventListener("click", addToCart);
})

let cartData = [];
let addItemId = 0;

function addToCart() {

    document.getElementById("cart-btn-menu").innerHTML= "Items in Cart";

    let itemToAdd = this.parentNode.childNodes[2].innerText;
    console.log(itemToAdd);

    let itemObj = foodItems.find(element => element.name === itemToAdd);

    let index = cartData.indexOf(itemObj);

    if (index === -1) {

        cartData = [...cartData, itemObj];
        itemObj.cost = itemObj.quantity*itemObj.price ; 


    } else if (index > -1) {
        itemObj.quantity += 1;
        itemObj.cost = itemObj.quantity*itemObj.price ; 
    }

    console.log(cartData)

    cartItems();

    addItemId += 1;
    

    let selectedItem = document.createElement("div");
    selectedItem.classList.add("cartImg");
    selectedItem.setAttribute("id", addItemId);

    let img = document.createElement("img");
    img.src = this.parentNode.childNodes[1].currentSrc;

    let pizzaName = document.createElement("span");
    pizzaName.textContent = this.parentNode.childNodes[2].textContent;

    let price = document.createElement("span");
    price.innerText = this.parentNode.childNodes[3].textContent;

    let cartEl = document.getElementById("cart");
    
  

  
    selectedItem.append(img);
    selectedItem.append(pizzaName);
    selectedItem.append(price);
    cartEl.append(selectedItem);
    


    
}

function cartItems() {
    let tableBody = document.getElementById("table-body");
    tableBody.innerHTML= '';

    cartData.map(item =>{

        let tableRow = document.createElement("tr");

        let rowData1 = document.createElement("td");
        let img = document.createElement("img");
        img.setAttribute("class","cart-box-img");
        img.src = item.img;
        rowData1.appendChild(img);

        let rowData2 = document.createElement("td");
        rowData2.innerText = item.name;

        let rowData3 = document.createElement("td");
        
        let btn1 = document.createElement("button");
        btn1.setAttribute("class","decrease-item");
        btn1.innerText = "-";

        let span = document.createElement("span");
        span.innerText = item.quantity;

        let btn2 = document.createElement("button");
        btn2.setAttribute("class", "increase-item");
        btn2.innerText="+";

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        let rowData4 = document.createElement("td");
        rowData4.innerText = item.cost;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
    })

        document.querySelectorAll(".decrease-item").forEach(item => {
            item.addEventListener("click",decrementItem);})

        document.querySelectorAll(".increase-item").forEach(item => {item.addEventListener("click",incrementItem);})

        totalAmt();
    

}

document.getElementById("cart-btn-menu").addEventListener("click",openCart);

function openCart() {
    if (cartData.length > 0){
    document.getElementById("cart-btn-menu").innerText = "Menu";
    document.getElementById("clear").classList.toggle("toggle-display");
    document.getElementById("cart-items").classList.toggle("cart-toggle");
    }else {
        alert("Cart is empty");
    }
}


function decrementItem() {
    let decName = this.parentNode.parentNode.childNodes[1].innerText;
    console.log(decName);

    let decObj = cartData.find(item => item.name == decName);
    console.log(decObj);

    let indexOfObj = cartData.indexOf(decObj);

    if (decObj.quantity === 1) {
        cartData.splice(indexOfObj,1);
        if (cartData.length === 0) {
            document.getElementById("clear").classList.toggle("toggle-display");
            document.getElementById("cart-items").classList.toggle("cart-toggle");
            document.getElementById("cart-btn-menu").innerText = "Cart";
            alert("Cart is Empty");
           
        }
        

    }else if (decObj.quantity>1) {
        decObj.quantity -= 1;
        decObj.cost= decObj.quantity*decObj.price;
    }
    cartItems();
    totalAmt();

}

function incrementItem() {
      
        let incName = this.parentNode.parentNode.childNodes[1].innerText;
        let incObj = cartData.find(item => item.name == incName);
        incObj.quantity +=1;
        incObj.cost = incObj.price*incObj.quantity;
        cartItems(); 
        totalAmt();


}

function totalAmt() {
    let priceArray = cartData.map(item =>item.cost);
    console.log(priceArray);
    let totalAmount=0
    for (let i=0; i<priceArray.length; i++) {
        totalAmount += priceArray[i]
    }
    console.log(totalAmount)
    document.getElementById("total-amt").innerHTML = "total: " + totalAmount;
}

totalAmt();