function validate(input){
    let errors = {};
    console.log(input, '<<<<<<<<-------------soy el input de controlador')

 
    if(input.nombre.length < 5){
        errors.nombre = 'Por favor escriba su nombre completo';
    }

    if(input.celular.length !==  10){
        errors.celular = 'Escriba un número de celular válido, máximo de 10 dígitos';
    }

    if(input.edad <  18 || input.edad > 100){
        errors.edad = 'Rango de edad entre 18 y 100 años';
    }
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!emailRegex.test(input.correo)) {
      errors.correo = "Correo incorrecto";
    }
    return errors;
}

module.exports = validate;