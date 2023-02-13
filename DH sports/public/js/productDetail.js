window.addEventListener('load', function(){
    let botonEdit = document.querySelector('.boton-editarProducto');
    let userLogged = locals.userLogged

    if(locals.userLogged.role == 'Admin'){
        botonEdit.style.display = "flex";
    }
    console.log(userLogged)
})