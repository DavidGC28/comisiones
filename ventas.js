function calcular() {
    // 1. Capturamos los elementos del DOM (la pantalla)
    const inputSueldo = document.getElementById('txtSueldoBase');
    const inputVentas = document.getElementById('txtVentas');
    const inputPrecio = document.getElementById('txtPrecio');

    // 2. Convertimos los valores a números (siempre vienen como texto del input)
    const sueldoBase = parseFloat(inputSueldo.value) || 0;
    const numVentas = parseInt(inputVentas.value) || 0;
    const precioProducto = parseFloat(inputPrecio.value) || 0;

    // 3. Lógica de negocio
    // Calculamos el total vendido
    const ventaTotal = numVentas * precioProducto;
    
    // Aplicamos una comisión del 10% (0.10)
    const comision = ventaTotal * 0.10;
    
    // Calculamos el gran total
    const sueldoTotal = sueldoBase + comision;

    // 4. Mostramos los resultados en los <span> del HTML
    // Usamos .toLocaleString() para que el dinero se vea bonito con comas y puntos
    document.getElementById('spSueldoBase').textContent = "$" + sueldoBase.toLocaleString();
    document.getElementById('spComision').textContent = "$" + comision.toLocaleString();
    document.getElementById('spTotal').textContent = "$" + sueldoTotal.toLocaleString();

    // Opcional: Un mensaje de éxito en la consola
    console.log("Cálculo realizado para David: ", sueldoTotal);
}