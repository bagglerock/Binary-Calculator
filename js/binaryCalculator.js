document.body.onclick = function(e){

    if(e.target.className.indexOf("btn") != -1){
        if(e.target.innerHTML != "C" && e.target.innerHTML != "="){
            document.getElementById("res").innerHTML += e.target.innerHTML;
        } else if (e.target.innerHTML === "C"){
            document.getElementById("res").innerHTML = "";
        } else if (e.target.innerHTML === "="){
            //do the calculation
        }

        
    }
}