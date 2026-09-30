function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let edad = parseInt(document.getElementById('edad').value);
    let sexo = document.getElementById('sexo').value.trim().toUpperCase();
    let embarazo = document.getElementById('embarazo').value.trim().toLowerCase();

    let imc = peso / (altura * altura);
    let clasificacion = "";

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        clasificacion = "Peso normal (Saludable)";
    } else if (imc >= 25 && imc < 29.9) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    let mensajeEdad = "";
    if (edad >= 18) {
        mensajeEdad = "Es mayor de edad.";
    } else {
        mensajeEdad = "Es menor de edad.";
    }

    let mensajeEmbarazo = "";
    if (sexo === "F") 
        {if (embarazo === "si") 
            {mensajeEmbarazo = "Paciente femenina en estado de embarazo (el IMC puede variar por condición médica).";
        } 
        else {mensajeEmbarazo = "Paciente femenina (no gestante).";
        }
    }    
    
    else if (sexo === "M") 
        {mensajeEmbarazo = "Paciente masculino.";
    } 
    else 
        {mensajeEmbarazo = "Sexo no especificado correctamente.";
    }

    alert("=== RESULTADO DE IMC Y VALIDACIONES ===\n" +
          "IMC: " + imc.toFixed(2) + "\n" +
          "Clasificación: " + clasificacion + "\n" +
          "------------------------------------\n" +
          "Validación de Edad: " + mensajeEdad + "\n" +
          "Validación de Género: " + mensajeEmbarazo);
}       