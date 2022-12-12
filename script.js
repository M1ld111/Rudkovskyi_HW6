const operation = prompt('Enter operation type (+, -, /, *)');
const a = +prompt('first number');
const b = +prompt('second number');
let result = '';
switch (operation) {
    case '+': result = `${a} + ${b} = ${a + b}`;
        
        break;
    case '-': result = `${a} - ${b} = ${a - b}`;
        
        break;
    case '/': result = `${a} / ${b} = ${a / b}`;
        
        break;
    case '*': result = `${a} * ${b} = ${a * b}`;
        
        break;

    default: result = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';
        break;
}
alert(result);