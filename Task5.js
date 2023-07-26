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