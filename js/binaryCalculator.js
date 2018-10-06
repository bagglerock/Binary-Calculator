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

    init() {
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
        // this.firstSet = true;
    }

    setFirstTrue() {
        this.firstSet = true;
    }

    setSecondTrue(){
        this.secondSet = true;
    }

    setOpTrue() {
        this.opSet = true;
    }

    handleInputChange(e) {
        const input = e.target.innerHTML;
        if(e.target.className.indexOf("btn") != -1){
            if(input != "C" && input != "="){
                if(input === "0" || input === "1"){
                    if(!this.firstSet){
                        this.setFirstNumber(input);
                    } else {
                        if(this.opSet && this.secondNumber === ""){
                            this.inputArray.push(this.operand);
                        }
                        this.setSecondNumber(input);
                    }
                } else {
                    if(this.opSet){
                        console.log("can't do that yet!");
                    } else {
                        this.setOpTrue();
                        if(!this.firstSet){
                            this.setFirstTrue();
                            this.inputArray.push(this.firstNumber);
                        }
                        this.setOperand(input);
                    }
                }
                this.showInputs();
            } else {
                if(input === "="){
                    if(!this.secondSet){
                        this.setSecondTrue();
                        this.inputArray.push(this.secondNumber);
                    }
                    const result = this.calculate(this.inputArray);
                    console.log(result);
                    this.showResult(result);
                } else {
                    let screen = document.getElementById("res");
                    screen.innerHTML = "";
                    this.init();

                }
            }
        }
    }

    showInputs() {
        let screen = document.getElementById("res");
        screen.innerHTML = `${this.firstNumber}${this.operand}${this.secondNumber}`;
    }

    showResult(result) {
        let screen = document.getElementById("res");
        screen.innerHTML = result;
    }



    calculate(arr){
        console.log(arr);
        const a = parseInt(arr[0],2);
        const b = parseInt(arr[2],2);
        
        switch(arr[1]){
            case "+":
                return this.add(a, b);
                break;
            case "-":
                return this.subtract(a, b);
                break;
            case "/":
                return this.divide(a, b);
                break;
            case "*":
                return this.multiply(a, b);
                break;
        }
    }

    add(a,b){
        let res = a + b;
        return res.toString(2);
    }

    subtract(a,b){
        let res = a - b;
        return res.toString(2);
    }

    divide(a,b){
        let res =  a / b;
        return res.toString(2);
    }

    multiply(a,b){
        let res =  a * b;
        return res.toString(2);
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