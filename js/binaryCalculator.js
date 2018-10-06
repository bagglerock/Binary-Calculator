const Calculator = class Calculator {
    constructor(){
        this.firstNumber = "";
        this.firstSet = false;
        this.secondNumber = "";
        this.secondSet = false;
        this.operand = "";
        this.opSet = false;
        this.inputArray = [];
        
    }

    setFirstNumber(number){
        this.firstNumber += number;
    }

    setSecondNumber(number){
        this.secondNumber += number;
    }

    setOperand(oper){
        this.operand = oper;
        this.opSet = true;
        this.firstSet = true;
    }



    handleInputChange(e) {
        const input = e.target.innerHTML;
        if(e.target.className.indexOf("btn") != -1){
            if(input != "C" && input != "="){
                if(input === "0" || input === "1"){
                    if(!this.firstSet){
                        this.setFirstNumber(input);
                        console.log("adding to first number");
                    } else {
                        this.setSecondNumber(input);
                        console.log("adding to second number");
                    }
                } else {
                    if(this.secondSet){
                        console.log("can't do that yet!");
                    } else if(!this.opSet){
                        if(!this.firstSet){
                            this.inputArray.push(this.firstNumber);
                            console.log("added first to array");
                        }
                        this.setOperand(input);
                        this.inputArray.push(input);
                        console.log("pushing alot of operands to array");
                    }
                }
            } else {
                if(input === "="){
                    this.inputArray.push(this.secondNumber);
                    console.log(this.inputArray);
                }
            }
        }
    }

    add(a,b){
        return a + b;
    }

    subtract(a,b){
        return a - b;
    }

    divide(a,b){
        return a / b;
    }

    multiply(a,b){
        return a * b;
    }

}

let calc = new Calculator();
document.body.onclick = e => {
    calc.handleInputChange(e);
}





// document.body.onclick = function(e){

//     if(e.target.className.indexOf("btn") != -1){
//         if(e.target.innerHTML != "C" && e.target.innerHTML != "="){
//             document.getElementById("res").innerHTML += e.target.innerHTML;
//         } else if (e.target.innerHTML === "C"){
//             document.getElementById("res").innerHTML = "";
//         } else if (e.target.innerHTML === "="){
//             //do the calculation
//         }

        
//     }
// }