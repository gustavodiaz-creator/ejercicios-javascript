function calcularFactura() {
  
    let id = document.getElementById('idCliente').value;
    let nombre = document.getElementById('nombreCliente').value;
    let telefono = document.getElementById('telefonoCliente').value;

    let producto = document.getElementById('nombreProducto').value;
    let valorUnitario = parseFloat(document.getElementById('valorUnitario').value);
    let cantidad = parseInt(document.getElementById('cantidad').value);

    let subtotal = valorUnitario * cantidad;
    let iva = subtotal * 0.19;
    let totalPagar = subtotal + iva;

    alert("==============================\n" +
          "       FACTURA DE VENTA       \n" +
          "==============================\n" +
          "Cliente: " + nombre + "\n" +
          "Identificación: " + id + "\n" +
          "Teléfono: " + telefono + "\n" +
          "------------------------------\n" +
          "Producto: " + producto + "\n" +
          "Cantidad: " + cantidad + "\n" +
          "Valor Unitario: $" + valorUnitario + "\n" +
          "------------------------------\n" +
          "Subtotal: $" + subtotal + "\n" +
          "IVA (19%): $" + iva + "\n" +
          "TOTAL A PAGAR: $" + totalPagar + "\n" +
          "==============================");
}