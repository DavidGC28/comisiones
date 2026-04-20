function calcular() {
   
    const inputSueldo = document.getElementById('txtSueldoBase');
    const inputVentas = document.getElementById('txtVentas');
    const inputPrecio = document.getElementById('txtPrecio');

   
    const sueldoBase = parseFloat(inputSueldo.value) || 0;
    const numVentas = parseInt(inputVentas.value) || 0;
    const precioProducto = parseFloat(inputPrecio.value) || 0;


    const ventaTotal = numVentas * precioProducto;
    
  
    const comision = ventaTotal * 0.10;
    
  
    const sueldoTotal = sueldoBase + comision;

    document.getElementById('spSueldoBase').textContent = "$" + sueldoBase.toLocaleString();
    document.getElementById('spComision').textContent = "$" + comision.toLocaleString();
    document.getElementById('spTotal').textContent = "$" + sueldoTotal.toLocaleString();

 
    console.log("Cálculo realizado para David: ", sueldoTotal);
}