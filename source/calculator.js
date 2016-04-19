var display = document.querySelector("#display");
var first="";
var second="";

//Display numbers
var numbers = document.querySelectorAll(".numbers");
for (var i = 0; i <numbers.length; i++) {
	numbers[i].onclick=function(e){

		var inputVal=display.innerHTML;
		var btnVal=this.innerHTML;
		if(inputVal==='0'&&btnVal!=='.'){
			display.innerHTML="";
		}
        
        if(op_on===true){
            display.innerHTML="";
            op_on=false;
        }
        
        if(cal===true){
            display.innerHTML="";
            cal=false;
        }
        
		if(btnVal==='.'){
			if(inputVal.indexOf('.')===-1){
				display.innerHTML+=btnVal;
			}
		}else{
			display.innerHTML+=btnVal;
		}
        
        if(operate.innerHTML!==""){
            second=display.innerHTML;
        }
	}
};

//function for button "C"
document.getElementById("button-C").onclick=function(e){
	display.innerHTML="0";
    operate.innerHTML="";
    first="";
    second="";
};

//function for button "+/-"
var negative=false;
var pos_neg=document.getElementById("button-am");
pos_neg.onclick=function(e){
    if(display.innerHTML!=='0'){
        if(negative===false){
            display.innerHTML="-"+display.innerHTML;
            negative=true;
        }else{
            display.innerHTML=display.innerHTML.substr(1);
            negative=false;
        }
    }      
};

//functions for operations: + - x ÷
var OP=function(){
    if(operate.innerHTML==="+"){
        display.innerHTML=String(Number(first)+Number(second));
    }
    
    if(operate.innerHTML==="-"){
        display.innerHTML=String(Number(first)-Number(second));
    }
    
    if(operate.innerHTML==="x"){
        display.innerHTML=String(Number(first)*Number(second));
    }
    
    if(operate.innerHTML===document.getElementById("button-div").innerHTML){
        if(second==="0"){
            display.innerHTML="Not a number";
        }else{       
            display.innerHTML=String(Number(first)/Number(second));
        }
    }
}

//function when clicking the operators
var operate=document.querySelector("#operate");
var op=document.querySelectorAll(".operator");
var op_on=false;
for(var i=0;i<op.length;i++){
    op[i].onclick=function(e){
        
        if(operate.innerHTML!==""){
            OP();
            first=display.innerHTML;
            second="";
            operate.innerHTML=this.innerHTML;
        }else{
            first=display.innerHTML;
            operate.innerHTML=this.innerHTML;
        }

        op_on=true;
    }
};

//functions for button "="
var cal=false;
document.getElementById("button-eql").onclick=function(e){
    
    if(second===""){
        second=display.innerHTML;
    }
    OP();
    
    cal=true;
    first="";
    second="";
    operate.innerHTML="";
};




