document.addEventListener('DOMContentLoaded', function() {
    // updating review count
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount);
    document.getElementById('reviewCount').textContent = `Total reviews submitted: ${reviewCount}`;

    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;    
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});