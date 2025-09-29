const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    {
        templeName: "Copenhagen Denmark Temple",
        location: "Copenhagen, Denmark",
        dedicated: "2004, May, 23",
        area: 25000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-16169-main.jpg"
    },
    {
        templeName: "Bangkok Thailand Temple",
        location: "Bangkok, Thailand",
        dedicated: "2022, October, 30",
        area: 10865,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
    },
    {
        templeName: "St. George Utah Temple",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
    }
];

// Function to create temple card HTML
function createTempleCard(temple) {
    return `
        <div class="temple-card">
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
            <div class="temple-info">
                <h3>${temple.templeName}</h3>
                <p class="location">${temple.location}</p>
                <p class="dedication">Dedicated: ${temple.dedicated}</p>
                <p class="area">Area: ${temple.area.toLocaleString()} sq ft</p>
            </div>
        </div>
    `;
}

// Function to display temples based on filter
function displayTemples(filter = 'all') {
    const gallery = document.getElementById('temple-gallery');
    let filteredTemples = [];

    switch(filter) {
        case 'old':
            // Temples built before 1900
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
            break;
        case 'new':
            // Temples built after 2000
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year > 2000;
            });
            break;
        case 'large':
            // Temples larger than 90,000 square feet
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            // Temples smaller than 10,000 square feet
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            // Show all temples
            filteredTemples = temples;
    }

    // Clear the gallery
    gallery.innerHTML = '';

    // Add filtered temples to the gallery
    filteredTemples.forEach(temple => {
        gallery.innerHTML += createTempleCard(temple);
    });
}

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


document.addEventListener('DOMContentLoaded', function() {
    // Menu functionality
    const hamburgerBtn = document.getElementById('hamburger-btn');
    hamburgerBtn.addEventListener('click', toggleMenu);
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.getElementById('primary-nav');
        const btn = document.getElementById('hamburger-btn');
        
        if (nav.classList.contains('active') && 
            !nav.contains(event.target) && 
            !btn.contains(event.target)) {
            toggleMenu();
        }
    });

    // Navigation filtering
    const navLinks = document.querySelectorAll('#primary-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
          
            navLinks.forEach(l => l.classList.remove('active'));
            
            
            this.classList.add('active');
            
            // Get filter type and display temples
            const filter = this.getAttribute('data-filter');
            displayTemples(filter);
            
            // Close mobile menu 
            if (window.innerWidth < 768) {
                toggleMenu();
            }
        });
    });


    displayTemples('all');
    
    //footer
    const year = document.querySelector("#currentyear");
    const today = new Date();
    year.innerHTML = `${today.getFullYear()}`;

    const last = document.querySelector("#lastModified");
    let lastModif = new Date(document.lastModified);
    last.innerHTML = `Last Modification: ${lastModif.toLocaleString()}`;
});