function validate(input){

    let errors = {};
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const nombreRegex = /^[a-zA-ZñÑ\s]+$/;
    const edadRegex =  /^[0-9]+$/;
    const celularRegex =  /^[0-9]{10}$/;

 
    if((!nombreRegex.test(input.nombre)) || (input.nombre.length < 7)){
        errors.nombre = 'Por favor escriba su nombre completo';
    }

    if(!celularRegex.test(input.celular)){
        errors.celular = 'Escriba un número de celular válido, máximo de 10 dígitos';
    }

    if((input.edad <  18 || input.edad > 100) && (edadRegex.test(input.edad))){
        errors.edad = 'Rango de edad entre 18 y 100 años';
    }

    if (!emailRegex.test(input.correo)) {
      errors.correo = "Correo incorrecto";
    }
    return errors;
}

module.exports = validate;