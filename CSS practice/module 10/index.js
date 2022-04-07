myLeads = []
let inputEl = document.getElementById("input-el")
let btnEl = document.getElementById("btn") 
let ulEl = document.getElementById("ul-el")

btnEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)

})