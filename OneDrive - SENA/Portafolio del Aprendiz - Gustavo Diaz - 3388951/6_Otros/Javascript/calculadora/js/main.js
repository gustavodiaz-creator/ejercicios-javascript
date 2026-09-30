function calcular() {
        let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);

    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2;

    alert("Resultados:\n" + 
          "Suma: " + suma + "\n" +
          "Resta: " + resta + "\n" +
          "Multiplicacion: " + multiplicacion + "\n" +
          "Division: " + division);
}