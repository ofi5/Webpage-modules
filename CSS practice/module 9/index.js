let password1 = document.getElementById("pass1")
let password2 = document.getElementById("pass2")
let password3 = document.getElementById("pass3")
let password4 = document.getElementById("pass4")

charLargeArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

charSmallArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

numArray = ["1","2","3","4","5","6","7","8","9","0"]

specialCharArray = ["!","@","#","$","%","^","&","*","(",")"]

allArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")"]



function clickbtn() {
    let charLarge = Math.floor(Math.random()*26);
    let charSmall = Math.floor(Math.random()*26);
    let num = Math.floor(Math.random()*10);
    let specialChar = Math.floor(Math.random()*10)
    // let allArrayChar = Math.floor(Math.random()*72)

    let keyArray = ["charLarge"]

    password1.textContent = ""

    for (let i = 0; i < 10; i++) {
        
        let allArrayChar = allArray[Math.floor(Math.random()*72)]
        password1.textContent += allArrayChar; 
    }

    password2.textContent = ""
    
    for (i = 0; i < 10; i++) {
        let allArrayChar = allArray[Math.floor(Math.random()*72)]
        password2.textContent += allArrayChar;
    }   

    password3.textContent = ""

    for (let i = 0; i < 10; i++) {
        
        let allArrayChar = allArray[Math.floor(Math.random()*72)]
        password3.textContent += allArrayChar; 
    }
    password4.textContent = ""

    for (let i = 0; i < 10; i++) {
        
        let allArrayChar = allArray[Math.floor(Math.random()*72)]
        password4.textContent += allArrayChar; 
    }

}