let display = document.getElementById("display");
let currentInput = "";
let operator = null;
let first = null;
let second = null;
function clear(){
    currentInput = "";
    operator = null;
    first = null;
    second = null;
    newdisplay();
}
function newdisplay(){
    display.value = currentInput;
}
function operate(opr)
{
    display.value = opr;
    append();
}
function append()
{
    
}