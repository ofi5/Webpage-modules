myLeads = []
let inputEl = document.getElementById("input-el")
let btnEl = document.getElementById("btn") 
let ulEl = document.getElementById("ul-el")

btnEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()    

})

function renderLeads() {

    listItems = ""
    for (i = 0; i < myLeads.length; i++) {        
        listItems += `<li><a href=${myLeads[i]} target='_blank'> ${myLeads[i]} </a></li>`
}

ulEl.innerHTML = listItems
}