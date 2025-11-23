let d = document.getElementById("display");
//all button select
document.querySelectorAll("button").forEach(b => {
    b.onclick = () => {
        let x = b.innerText; // button ka text

        if (x === "AC")
            d.value = ""; //all clear
        else if (x === "DEL")
            d.value = d.value.slice(0, -1); // last clear
        else if (x === "=") {
            try {
                d.value = eval(d.value); //solve expression
            }
            catch {
                d.value = "Error"; // wrong input
            }
        }
        //scientific button
        else if (x === "sin")
            d.value += "Math.sin(";
        else if (x === "cos")
            d.value += "Math.cos(";
        else if (x === "tan")
            d.value += "Math.tan(";
        else if (x === "ln")
            d.value += "Math.log(";
        else if (x === "π")
            d.value += "Math.PI(";
        else if (x === "e")
            d.value += "Math.E(";
        else if (x === "√") 
            d.value += "√(";
      



        else
            d.value += x; // normal number add karna

    };

});


