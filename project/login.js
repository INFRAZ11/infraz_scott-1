function ab1(){
    var name=document.getElementById("formGroupExampleInput").value
    //var na=/^[a-zA-Z ]{2,30}$/;
    //var name=na.test(nam);
    console.log(name)
    if(name.length===0){
        document.getElementById("formGroupExampleInput").style.borderColor="red";
        document.getElementById("gg").style.display="block"
    }else{
        document.getElementById("formGroupExampleInput").style.borderColor="green";
        document.getElementById("gg").style.display="none"
    } 
}
function ab2(){
    var name=document.getElementById("inputPassword4").value
    console.log(name)
    if(name.length===0){
        document.getElementById("inputPassword4").style.borderColor="red";
        document.getElementById("din").style.display="block"
    }else{
        document.getElementById("inputPassword4").style.borderColor="green"; 
        document.getElementById("din").style.display="none"
    }    
}

