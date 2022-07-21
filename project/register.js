



function ab1(){
    var name=document.getElementById("pasu").value
    //var na=/^[a-zA-Z ]$/;
    //var name=na.test(nam);
    console.log(name)
    if(name.length===0){
        document.getElementById("pasu").style.borderColor="red";
        document.getElementById("vish").style.display="block"
    }else{
        document.getElementById("pasu").style.borderColor="green";
        document.getElementById("vish").style.display="none"
    } 
}

function ab2(){
    var phone=document.getElementById("pasup").value
    
//var phonreg=/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
//var phone=phonreg.test(phon);

    console.log(phone)
    if(phone.length===0){
        document.getElementById("pasup").style.borderColor="red";
        document.getElementById("udh").style.display="block"
    }else{
        document.getElementById("pasup").style.borderColor="green";
        document.getElementById("udh").style.display="none"
    }
}

function ab3(){
    var email=document.getElementById("pasupat").value
    //var em=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    //var email=em.test(name)
    console.log(email)

    if(email.length===0){
        document.getElementById("pasupat").style.borderColor="red";
        document.getElementById("ka").style.display="block"
    }else{
        document.getElementById("pasupat").style.borderColor="green";
        document.getElementById("ka").style.display="none"
    }    
}

function ab4(){
    var name=document.getElementById("pasupa").value
    console.log(name)
    if(name.length===0){
        document.getElementById("pasupa").style.borderColor="red";
        document.getElementById("kk").style.display="block"
    }else{
        document.getElementById("pasupa").style.borderColor="green"; 
        document.getElementById("kk").style.display="none"
    }    
}

function ab5(){
    var check=document.getElementById("gridCheck").value
    console.log(check)
    /*for(i=0;i<check.length;i++){
    if(check[i].checked==true)
    return true;*/
        if(check=="select"){
            
            document.getElementById("kka").style.display="block";
}
else{
    
    document.getElementById("kka").style.display="none";
}
}
