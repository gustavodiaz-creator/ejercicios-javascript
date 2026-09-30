const prompt = require('prompt-sync')();

console.log("--- SIMULACIÓN DE FACTURA ---");

console.log("--- DATOS DEL CLIENTE ---");

let id = prompt("Ingrese su identificación: ");
let n = prompt("Ingrese sus nombres: ");
let t = prompt("Ingrese su teléfono: ");

console.log("\n--- DATOS DEL PRODUCTO ---");

let producto = prompt("Ingrese el nombre del producto: ");
let valorUnitario = parseFloat(prompt("Ingrese el valor unitario: "));
let cantidad = parseInt(prompt("Ingrese la cantidad a llevar: "));

let subtotal = valorUnitario * cantidad;
let iva = subtotal * 0.19;
let totalPagar = subtotal + iva;

console.log("\n==============================");
console.log("       FACTURA DE VENTA       ");
console.log("==============================");
console.log("Cliente: " + n);
console.log("Identificación: " + id);
console.log("Teléfono: " + t);
console.log("------------------------------");
console.log("Producto: " + producto);
console.log("Cantidad: " + cantidad);
console.log("Valor Unitario: $" + valorUnitario);
console.log("------------------------------");
console.log("Subtotal: $" + subtotal);
console.log("IVA (19%): $" + iva);
console.log("TOTAL A PAGAR: $" + totalPagar);
console.log("==============================");