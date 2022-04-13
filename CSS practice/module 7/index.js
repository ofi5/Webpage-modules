
// inputVal = document.getElementById("input-no").innerText



function measure(){
    let inputVal = document.getElementById("input-val")
    inputVal = parseInt(inputVal.value)

        let inputNo = document.getElementById("input-no") 
        inputNo.textContent = inputVal

        let feetVal = inputVal*3.28 
        let lengthVal = inputVal/3.28

        document.getElementById("length").textContent = inputVal + " meters" + " = " + feetVal.toFixed(2) + " feet" + "   |    " + inputVal + " feet" + " = " +  lengthVal.toFixed(2) + " meters"

        let gallonVal = inputVal/3.78
        let litreVal = inputVal*3.78

        document.getElementById("volume").textContent = inputVal + " litres" + " = " + gallonVal.toFixed(2) + " gallons" + "   |    " + inputVal + " gallons" + " = " +  litreVal.toFixed(2) + " litres"

        let poundVal = inputVal*2.20
        let kgVal = inputVal/2.20

        document.getElementById("mass").textContent = inputVal + " kgs" + " = " + poundVal.toFixed(2) + " pounds" + "   |    " + inputVal + " pounds" + " = " +  kgVal.toFixed(2) + " kgs"
}