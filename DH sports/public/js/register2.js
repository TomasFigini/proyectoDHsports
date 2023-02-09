window.addEventListener("load", function(){
    let formulario = document.querySelector('form.registro');
    let campoNombre = document.querySelector("input.name");
    let campoApellido = document.querySelector("input.apellido");
    let campoDni = document.querySelector("input.dni");
    let campoEmail = document.querySelector("input.email");
    let campoFecha = document.querySelector("input.fecha");
    let campoPassword = document.querySelector("input.password");
    let campoRepitPass = document.querySelector("input.repitpassword");
    let campoFile = document.querySelector("input.file");

    campoNombre.addEventListener("keypress", function(e){
        let errorName = document.querySelector("div.errorName");
        errorName.innerHTML = "<p>"+ "" + "</p>"
    })

    campoApellido.addEventListener("keypress", function(e){
        let errorApellido = document.querySelector("div.errorApellido");
        errorApellido.innerHTML = "<p>"+ "" + "</p>"
    })

    campoDni.addEventListener("keypress", function(e){
        let errorDni = document.querySelector("div.errorDni");
        errorDni.innerHTML = "<p>"+ "" + "</p>"
    })

    campoEmail.addEventListener("keypress", function(e){
        let errorEmail = document.querySelector("div.errorEmail");
        errorEmail.innerHTML = "<p>"+ "" + "</p>"
    })

    campoFecha.addEventListener("keypress", function(e){
        let errorFecha = document.querySelector("div.errorFecha");
        errorFecha.innerHTML = "<p>"+ "" + "</p>"
    })

    campoPassword.addEventListener("keypress", function(e){
        let errorPassword = document.querySelector("div.errorPassword");
        errorPassword.innerHTML = "<p>"+ "" + "</p>"
    })
    campoRepitPass.addEventListener("keypress", function(e){
        let errorRepitPass = document.querySelector("div.errorRepitPass");
        errorRepitPass.innerHTML = "<p>"+ "" + "</p>"
    })

    campoFile.addEventListener("keypress", function(e){
        let errorAvatar = document.querySelector("div.errorAvatar");
        errorAvatar.innerHTML = "<p>"+ "" + "</p>"
    })



    formulario.addEventListener('submit', function(e){

        let nombre = document.querySelector("input.name");
        let lastNamee  = document.querySelector("input.apellido");
        let dni = document.querySelector("input.dni");
        let email = document.querySelector("input.email");
        let fecha = document.querySelector("input.fecha");
        let password = document.querySelector("input.password");
        let repitPassword = document.querySelector("input.repitpassword");
        let imagenUsuario = document.querySelector("input.file");


        const emailValido = email => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        //Validacion nombre
        if(nombre.value == ""){
            e.preventDefault();
            let errorName = document.querySelector("div.errorName");
            errorName.innerHTML = "<p>"+ "El campo de nombre debe estar completo" + "</p>"
        }else if(!(nombre.value.length >= 2)){
            e.preventDefault();
            let errorName = document.querySelector("div.errorName");
            errorName.innerHTML = "<p>"+ "El campo de nombre debe contener al menos 2 caracteres" + "</p>"
        }
        
        //Validacion apellido
        if(lastNamee.value == ""){
            e.preventDefault();
            let errorLastName = document.querySelector("div.errorLastName");
            errorLastName.innerHTML = "<p>"+ "El campo de apellido debe estar completo" + "</p>"

        }else if(!(lastNamee.value.length >= 2)){
            e.preventDefault();
            let errorLastName = document.querySelector("div.errorLastName");
            errorLastName.innerHTML = "<p>"+ "El campo de apellido debe contener al menos 2 caracteres" + "</p>"
        }

        //Validacion email
        if(email.value == ""){
            e.preventDefault();
            let errorEmail = document.querySelector("div.errorEmail");
            errorEmail.innerHTML = "<p>"+ "Debes colocar un email" + "</p>"

        }else if(!emailValido(email.value)){
            e.preventDefault();
            let errorEmail = document.querySelector("div.errorEmail");
            errorEmail.innerHTML = "<p>"+ "Formato de email inválido" + "</p>"
        }

        //Validacion Imagen de perfil
        if(imagenUsuario.value != ""){
            let imagen = imagenUsuario.value;
            let coincidencia1 = imagen.endsWith(".png");
            let coincidencia2 = imagen.endsWith(".jpg");
            let coincidencia3 = imagen.endsWith(".jpeg");
            let coincidencia4 = imagen.endsWith(".gif");
            if(!(coincidencia1 || coincidencia2 || coincidencia3 || coincidencia4)){
                e.preventDefault();
                let errorImagenUsuario = document.querySelector("div.errorImagenUsuario");
                errorImagenUsuario.innerHTML = "<p>"+ "Solo se admiten extenciones .png .jpg .jpeg .gif" + "</p>"
            
            }
        }
    })

})