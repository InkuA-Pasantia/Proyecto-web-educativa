(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    const pass1 = document.querySelector('#validationCustomPass1')
    const pass2 = document.querySelector('#validationCustomPass2')
    console.log(pass1.value+'hola'); 
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        if (pass1.value != pass2.value){
            event.preventDefault()
            event.stopPropagation()
            console.log('son distintos'); 
        }
         

        form.classList.add('was-validated')
      }, false)
    })
  })()