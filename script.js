//1 display number in displaybox
function displayNumber(num){
    result.value+=num
}

//2 clear input field
function clearDisplay(){
    result.value=""
}

//3 evaluate expression
function calculate(){
    result.value=eval(result.value)
}

//4 remove last item from text box
function removeLast(){
    result.value=result.value.slice(0,-1)
}