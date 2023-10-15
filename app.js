var num1
var operator
var num2
var result

num1= +prompt("entre the first value")
operator=prompt("used any one operator(+,-,*,/,%)")
num2= +prompt("entre the second value")


if(operator=="+")
{
    alert(num1+num2)
}

else if(operator=="-"){
    alert(num1-num2)

}
        

else if(operator=="%"){
    alert(num1%num2)

}

else if(operator=="/"){
    alert(num1/num2)

}

else if(operator=="*"){
    alert(num1*num2)

}
        else{
            alert("try again")
        }