

let totalEl = document.getElementById("total");

let addItemId = 0;
function addToCart(item) {
    addItemId += 1;
    

    let selectedItem = document.createElement("div");
    selectedItem.classList.add("cartImg");
    selectedItem.setAttribute("id", addItemId);

    let img = document.createElement("img");
    img.setAttribute("src", item.children[1].currentSrc);

    let pizzaName = document.createElement("span");
    pizzaName.textContent = item.children[2].textContent;

    let price = document.createElement("span");
    price.innerText = item.children[3].textContent;

    let cartEl = document.getElementById("cart");
    
  

  
    selectedItem.append(img);
    selectedItem.append(pizzaName);
    selectedItem.append(price);
    cartEl.append(selectedItem);
    


    totalEl.textContent = Number(price.innerText);
    localStorage.setItem("key", "hello");
    console.log(localStorage.getItem("key"))
   
   

} 


