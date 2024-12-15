let display = document.getElementById("display");

function operate(value)
{
    if(value == '+/-'){
        if(display.value.includes('+','-','*','%')){
            display.value = "Invalid Operation";
        }
        else{
            display.value = (parseFloat(display.value) * -1).toString();
        }
    }
    else{
        display.value += value;
    }
}
function result(){
    try{
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = 'Invalid Operation';
    }   
}
function brackets(){
    if(display.value.includes('(')){
        display.value += ')';
    }
    else{
        display.value += '(';
    }
}