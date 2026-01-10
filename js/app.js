import { getCars } from './data.js';
import './components/car-card.js';
import { checkAuth } from './auth.js';

// Main Application Entry Point
console.log('oRENTacja App Initialized');

let allCars = [];

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

async function initApp() {
    setupEventListeners();
    setupCatalogFilters();
    checkAuth(); // Initial check
    await loadCars();
}

async function loadCars() {
    const carList = document.getElementById('carList');

    try {
        allCars = await getCars();
        renderCars(allCars);
    } catch (error) {
        carList.innerHTML = '<p class="error-msg">Nie udało się pobrać danych.</p>';
        console.error(error);
    }
}

function renderCars(carsToRender) {
    const carList = document.getElementById('carList');
    carList.innerHTML = '';

    if (carsToRender.length === 0) {
        carList.innerHTML = '<div class="no-results"><p>Brak samochodów spełniających kryteria.</p></div>';
        return;
    }

    carsToRender.forEach(car => {
        const card = document.createElement('car-card');
        card.carData = car;
        carList.appendChild(card);
    });
}

function setupCatalogFilters() {
    const searchInput = document.getElementById('searchInput');
    const typeFilter = document.getElementById('typeFilter');
    const priceFilter = document.getElementById('priceFilter');
    const priceValue = document.getElementById('priceValue');
    const transmissionCheckboxes = document.querySelectorAll('input[name="transmission"]');
    const resetBtn = document.getElementById('resetFilters');

    const filterCars = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedType = typeFilter.value;
        const maxPrice = parseInt(priceFilter.value);
        const selectedTransmissions = Array.from(transmissionCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        const filtered = allCars.filter(car => {
            const matchesSearch = car.brand.toLowerCase().includes(searchTerm) ||
                car.model.toLowerCase().includes(searchTerm);
            const matchesType = selectedType === 'all' || car.type.toLowerCase() === selectedType.toLowerCase();
            const matchesPrice = car.price <= maxPrice;
            const matchesTransmission = selectedTransmissions.includes(car.transmission);

            return matchesSearch && matchesType && matchesPrice && matchesTransmission;
        });

        renderCars(filtered);
    };

    // Event Listeners
    if (searchInput) searchInput.addEventListener('input', filterCars);
    if (typeFilter) typeFilter.addEventListener('change', filterCars);

    if (priceFilter) {
        priceFilter.addEventListener('input', () => {
            priceValue.textContent = `Do ${priceFilter.value} PLN`;
            filterCars();
        });
    }

    transmissionCheckboxes.forEach(cb => {
        cb.addEventListener('change', filterCars);
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            searchInput.value = '';
            typeFilter.value = 'all';
            priceFilter.value = priceFilter.max;
            priceValue.textContent = `Do ${priceFilter.max} PLN`;
            transmissionCheckboxes.forEach(cb => cb.checked = true);
            renderCars(allCars);
        });
    }
}

function setupEventListeners() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const closeMenuBtn = document.querySelector('.close-menu-btn');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Animate hamburger
        });

        if (closeMenuBtn) {
            closeMenuBtn.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        }

        // Close menu when clicking a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}
