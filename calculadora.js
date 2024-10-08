document.getElementById('calculateButton').addEventListener('click', function() {
    const propertyValue = parseFloat(document.getElementById('propertyValue').value);
    
    if (isNaN(propertyValue)) {
        alert('Por favor, ingrese un valor válido.');
        return;
    }

    const commission = propertyValue * 0.03;
    const writingCosts = propertyValue * 0.015;
    const otherCosts = propertyValue * 0.02;
    const totalValue = propertyValue + commission + writingCosts + otherCosts;

    // Actualizar los resultados en la interfaz
    document.getElementById('commission').innerText = commission.toFixed(2);
    document.getElementById('writingCosts').innerText = writingCosts.toFixed(2);
    document.getElementById('otherCosts').innerText = otherCosts.toFixed(2);
    document.getElementById('totalValue').innerText = totalValue.toFixed(2);
});
