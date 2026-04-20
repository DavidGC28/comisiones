document.addEventListener("DOMContentLoaded", () => {
    
    // 2. Referencias a los botones
    const btnCalcular = document.getElementById("btnCalcularCredito");
    const btnReiniciar = document.getElementById("btnReiniciar");

    // 3. Evento principal: Calcular
    btnCalcular.addEventListener("click", () => {
        
        // PASO A: Capturar datos de la pantalla
        const ingresos = parseFloat(document.getElementById("txtIngresos").value) || 0;
        const egresos = parseFloat(document.getElementById("txtEgresos").value) || 0;
        const monto = parseFloat(document.getElementById("txtMonto").value) || 0;
        const plazoAños = parseFloat(document.getElementById("txtPlazo").value) || 0;
        const tasaInteres = parseFloat(document.getElementById("txtTasaInteres").value) || 0;

        // PASO B: Cálculos Financieros
        // 1. Capacidad de pago (Disponible para deuda suele ser el 40% del neto)
        const disponible = ingresos - egresos;
        const capacidadPago = disponible * 0.40;

        // 2. Cálculo de intereses (Simple para este ejemplo: Monto * Tasa * Tiempo)
        const interesTotal = monto * (tasaInteres / 100) * plazoAños;
        const totalPrestamo = monto + interesTotal;
        const cuotaMensual = totalPrestamo / (plazoAños * 12);

        // PASO C: Mostrar resultados en pantalla
        document.getElementById("spnDisponible").textContent = "$" + disponible.toLocaleString();
        document.getElementById("spnCapacidadPago").textContent = "$" + capacidadPago.toLocaleString();
        document.getElementById("spnInteresPagar").textContent = "$" + interesTotal.toLocaleString();
        document.getElementById("spnTotalPrestamo").textContent = "$" + totalPrestamo.toLocaleString();
        document.getElementById("spnCuotaMensual").textContent = "$" + cuotaMensual.toFixed(2);

        // PASO D: Lógica de aprobación (Estado de Crédito)
        const spnEstado = document.getElementById("spnEstadoCredito");
        if (cuotaMensual < capacidadPago && disponible > 0) {
            spnEstado.textContent = "APROBADO ✅";
            spnEstado.style.color = "#10b981"; // Verde esmeralda Gringotts
        } else {
            spnEstado.textContent = "NEGADO ❌ (Cuota muy alta)";
            spnEstado.style.color = "#ef4444"; // Rojo alerta
        }
    });

    // 4. Evento Reiniciar: Limpia todo
    btnReiniciar.addEventListener("click", () => {
        location.reload(); // La forma más simple de reiniciar todo
    });
});