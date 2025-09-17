// Function to handle the menu
function toggleMenu() {
    const nav = document.getElementById('primary-nav');
    nav.classList.toggle('active');
    
    const btn = document.getElementById('hamburger-btn');
    if (nav.classList.contains('active')) {
        btn.textContent = '✕';
        btn.setAttribute('aria-expanded', 'true');
    } else {
        btn.textContent = '☰';
        btn.setAttribute('aria-expanded', 'false');
    }
}

// event listeners
document.addEventListener('DOMContentLoaded', function() {
    //menu function 
    const hamburgerBtn = document.getElementById('hamburger-btn');
    hamburgerBtn.addEventListener('click', toggleMenu);
    
    document.addEventListener('click', function(event) {
        const nav = document.getElementById('primary-nav');
        const btn = document.getElementById('hamburger-btn');
        
        if (nav.classList.contains('active') && 
            !nav.contains(event.target) && 
            !btn.contains(event.target)) {
            toggleMenu();
        }
    });
    
    // footer information
    const year = document.querySelector("#currentyear");
    const today = new Date();
    year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

    const last = document.querySelector("#lastModified")
    let lastModif = new Date(document.lastModified);
    last.innerHTML = `<span class="highlight">Last Modification: ${lastModif}</span>`;
});