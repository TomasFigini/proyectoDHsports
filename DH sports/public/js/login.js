window.addEventListener('load', function(){
    //Capturo elementos del formulario:
    let formErrors = document.querySelector('.formErrors');
    let form = document.querySelector('form');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let submit = document.querySelector('#submit');

   //Posiciono el cursor en el campo "Email" al cargar el formulario.
   email.focus()
    
   //Guardo los errores en una variable:
   let arrayErrores = [];

   //Función para validar email:
   function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    };

    //Validaciones 
    form.addEventListener('submit', function(e){
        arrayErrores = []
        if(email.value == '' || !validateEmail(email.value)){
            arrayErrores.push('Debe ingresar un email válido');
            e.preventDefault();
        }
        if(password.value == '' || password.value.length < 8){
            arrayErrores.push('La contraseña debe tener al menos 8 caracteres');
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