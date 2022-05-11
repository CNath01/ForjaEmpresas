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
function ir(){

    let user = document.getElementById("name").value;
    let pass = document.getElementById("password").value;

    if (user==="Admin" && pass==="Kuepa2022"){
        cajaMensaje.innerHTML = 'contraseña correcta, redireccionando ...';
        document.form.submit(); 
    }
    else{
       cajaMensaje.innerHTML = 'Porfavor ingrese, usuario y contraseña correcta';
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

let caso1 = "52368795";
let caso2 = "1001235478";
let caso3 = "25413574";


let modalCaso1 = document.getElementById("modalCaso1");
let modalCaso2 = document.getElementById("modalCaso2");
let modalCaso3 = document.getElementById("modalCaso3");
let modalCaso4 = document.getElementById("modalCaso4");


let btnSearch = document.getElementById("btn-search");

btnSearch.addEventListener("click",()=>{
    let usuario = document.getElementById("usuario").value;

    if(caso1 == usuario){
        document.getElementById("btn-search").href = "#modalCaso1";
    }else if(caso2 == usuario){
        document.getElementById("btn-search").href = "#modalCaso2";
    }else if(caso3 == usuario){
        document.getElementById("btn-search").href = "#modalCaso3";
    }else if(usuario == "" || usuario!=caso1 || usuario!=caso2 || usuario!=caso3 ||  usuario!=caso4){
        document.getElementById("btn-search").href = "#modalCaso4";
    }
})


