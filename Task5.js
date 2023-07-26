//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const Calculator=(num1, num2, op)=>{
       let calculateValue;
        switch(op){
            case '+':
            calculateValue=num1+num2;
            break;
            case '-':
            calculateValue=num1-num2;
            break;
            case '*':
            calculateValue=num1*num2;
            break;
            case '/':
            calculateValue=num1/num2;
            break;
            default:
                calculateValue='No value found';
        }
        return calculateValue;
}

const val=Calculator(9, 10, '-');
console.log(val);