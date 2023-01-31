window.addEventListener('load',function(){
    //Capturo formulario y sus elementos:
    let formErrors = document.querySelector('.formErrors')
    let form = document.querySelector('form')
    let nombre = document.querySelector('#nombre');
    let apellido = document.querySelector('#apellido');
    let dni = document.querySelector('#dni');
    let email = document.querySelector('#email');
    let fecha_nac = document.querySelector('#fecha_nac');
    let password = document.querySelector('#password');
    let repitPassword = document.querySelector('#repitpassword');
    let avatar = document.querySelector('#avatar');
    let submit = document.querySelector('#submit');
    //Posiciono el cursor en el campo "Nombre" al cargar el formulario.
    nombre.focus()
    
    //Guardo los errores en una variable:
    let arrayErrores = [];

    //Función para validar email:
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

    //Función para validar formato de imagen:
      function validateImage(image){
        return (image.endsWith('.jpg') || image.endsWith('.jpeg') || image.endsWith('.png') ||image.endsWith('.gif')) 
      }
    
    //Validaciones 
    form.addEventListener('submit', function(e){
        arrayErrores = [];
        if(nombre.value == '' || nombre.value.length < 2){
            arrayErrores.push('El campo "Nombre" debe contener al menos 2 caracteres');
            e.preventDefault();
        }        
        if(apellido.value == '' || apellido.value.length < 2){
            arrayErrores.push('El campo "Apellido" debe contener al menos 2 caracteres');
            e.preventDefault();
        }
        if(dni.value == '' || dni.value.length < 7){
            arrayErrores.push('Debe ingresar un DNI válido');
            e.preventDefault();
        }
        if(email.value == '' || !validateEmail(email.value)){
            arrayErrores.push('Debe ingresar un email válido');
            e.preventDefault();
        }
        if(fecha_nac.value == ''){
            arrayErrores.push('Debe ingresar una Fecha de Nacimiento');
            e.preventDefault();
        }
        if(password.value == '' || password.value.length < 8){
            arrayErrores.push('La contraseña debe tener al menos 8 caracteres');
            e.preventDefault();
        }
        if(repitPassword.value == '' || repitPassword.value != password.value){
            arrayErrores.push('Las contraseñas no coinciden');
            e.preventDefault();
        }
        if(avatar.value == '' || !validateImage(avatar.value)){
            arrayErrores.push('Debe ingresar una imagen válida');
            e.preventDefault();
        }
        if(arrayErrores.length > 0){
            formErrors.innerHTML = ''
            formErrors.classList.add('alert-warning')
            for(let error of arrayErrores){
                formErrors.innerHTML += `<li>${error}</li>`                
            }
        }
    })
})