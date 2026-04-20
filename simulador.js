document.addEventListener("DOMContentLoaded", () => {
    
   
    const btnCalcular = document.getElementById("btnCalcularCredito");
    const btnReiniciar = document.getElementById("btnReiniciar");

   
    btnCalcular.addEventListener("click", () => {
        
        
        const ingresos = parseFloat(document.getElementById("txtIngresos").value) || 0;
        const egresos = parseFloat(document.getElementById("txtEgresos").value) || 0;
        const monto = parseFloat(document.getElementById("txtMonto").value) || 0;
        const plazoAños = parseFloat(document.getElementById("txtPlazo").value) || 0;
        const tasaInteres = parseFloat(document.getElementById("txtTasaInteres").value) || 0;

       
        const disponible = ingresos - egresos;
        const capacidadPago = disponible * 0.40;

        
        const interesTotal = monto * (tasaInteres / 100) * plazoAños;
        const totalPrestamo = monto + interesTotal;
        const cuotaMensual = totalPrestamo / (plazoAños * 12);

       
        document.getElementById("spnDisponible").textContent = "$" + disponible.toLocaleString();
        document.getElementById("spnCapacidadPago").textContent = "$" + capacidadPago.toLocaleString();
        document.getElementById("spnInteresPagar").textContent = "$" + interesTotal.toLocaleString();
        document.getElementById("spnTotalPrestamo").textContent = "$" + totalPrestamo.toLocaleString();
        document.getElementById("spnCuotaMensual").textContent = "$" + cuotaMensual.toFixed(2);

        
        const spnEstado = document.getElementById("spnEstadoCredito");
        if (cuotaMensual < capacidadPago && disponible > 0) {
            spnEstado.textContent = "APROBADO ✅";
            spnEstado.style.color = "#10b981"; 
        } else {
            spnEstado.textContent = "NEGADO ❌ (Cuota muy alta)";
            spnEstado.style.color = "#ef4444"; 
        }
    });

    
    btnReiniciar.addEventListener("click", () => {
        location.reload(); 
    });
});