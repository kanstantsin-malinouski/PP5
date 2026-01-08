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
        carList.innerHTML = '<p>Brak samochodów spełniających kryteria.</p>';
        return;
    }

    carsToRender.forEach(car => {
        const card = document.createElement('car-card');
        card.carData = car;
        carList.appendChild(card);
    });
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
