var total = "";
// var totalOpr ="";
var opr = "";
var equal = false;

function getvalue(num){
    total +=opr; 
    if(document.getElementById("result").value == 0 || opr!="" || equal == true){
        opr =""
       document.getElementById("result").value ="";
    }

    if(equal == true){
        total="";
        equal = false;
    }
    document.getElementById("result").value += num;
    total += num;
    console.log(total);
}

function empty(){
   
    document.getElementById("result").value = 0;
     total = "";
    //  totalOpr ="";
     opr = "";
     equal = false;
}
function operator(){

}

function sum(sign){
   if(total !=""){
    opr = sign;
    document.getElementById("operat").value = sign;
    equal=false;
    document.getElementById("result").value = eval(total);
    total = eval(total);//new
}


   
    console.log(total);
}
function sum2(){
   
    document.getElementById("result").value = eval(total)
    document.getElementById("operat").value = "";
    equal = true;
    total = eval(total);//new
   
}