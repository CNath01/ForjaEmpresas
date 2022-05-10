/*function login(){
    let user = document.getElementById("name").value;
    let pass = document.getElementById("password").value;

    if(document.form.pass.value=='Admin' && document.form.user.value=='1234'){
        document.form.submit();
        window.location = "prueba.html";
    }
    else{
        alert("Porfavor ingrese, nombre y usuario correctos");
    }
}*/
function go(){

    let user = document.getElementById("name").value;
    let pass = document.getElementById("password").value;

    if (user==="Admin" && pass==="Kuepa2022"){
        cajaMensaje.innerHTML = 'contraseña correcta, redireccionando ...';
        document.form.submit(); 
    }
    else{
       cajaMensaje.innerHTML = 'Porfavor ingrese, nombre y usuario correctos';
    }
}
/*
function go(){

    if (document.form.password.value=='Admin' && document.form.login.value=='Kuepa2022'){ 
            document.form.submit(); 
        } 
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
            
        } 
    } */

