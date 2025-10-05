const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
];

document.addEventListener('DOMContentLoaded', function() {
    // populate product select options
    const productSelect = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
        productSelect.appendChild(option);
    });

    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});