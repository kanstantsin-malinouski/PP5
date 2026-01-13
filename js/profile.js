// Profile Page Logic
import { logout } from './auth.js';
import { cars } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const userRole = localStorage.getItem('userRole');
    const userName = localStorage.getItem('userName') || (userRole === 'admin' ? 'Administrator' : 'Jan Kowalski');

    if (!userRole) {
        window.location.href = 'login.html';
        return;
    }

    if (userRole === 'admin') {
        document.body.classList.add('is-admin');
        const sidebarUserRole = document.getElementById('sidebarUserRole');
        if (sidebarUserRole) sidebarUserRole.textContent = 'Administrator Systemu';

        const resTitle = document.getElementById('resTitle');
        if (resTitle) resTitle.textContent = 'Wszystkie Rezerwacje';

        const navPayment = document.getElementById('navPayment');
        if (navPayment) navPayment.style.display = 'none';

        loadFleet();
    } else {
        const sidebarUserRole = document.getElementById('sidebarUserRole');
        if (sidebarUserRole) sidebarUserRole.textContent = 'Klient oRENTacja';
    }

    // Sidebar UI
    const sidebarUserName = document.getElementById('sidebarUserName');
    if (sidebarUserName) sidebarUserName.textContent = userName;

    const profileAvatar = document.getElementById('profileAvatar');
    if (profileAvatar) profileAvatar.textContent = userName.charAt(0).toUpperCase();

    // Tab Switching
    const navItems = document.querySelectorAll('.nav-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tab = item.getAttribute('data-tab');
            if (!tab) return; 

            navItems.forEach(i => i.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            item.classList.add('active');
            const targetPane = document.getElementById(`tab-${tab}`);
            if (targetPane) targetPane.classList.add('active');
        });
    });

    // Sidebar Logout
    const sidebarLogoutBtn = document.getElementById('sidebarLogoutBtn');
    if (sidebarLogoutBtn) {
        sidebarLogoutBtn.addEventListener('click', logout);
    }

    loadReservations(userRole);
    if (userRole === 'admin') {
        loadUsers();
    } else {
        loadPayments();
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }

    document.getElementById('closeModal')?.addEventListener('click', () => {
        document.getElementById('editModal').classList.add('hidden');
    });
});

function loadReservations(role) {
    const tbody = document.getElementById('reservationsTableBody');
    if (!tbody) return;

    // Mock reservations
    const reservations = [
        { id: 'RES-001', car: 'Porsche 911 Carrera', user: 'Jan Kowalski', date: '2024-03-15', status: 'Aktywna' },
        { id: 'RES-002', car: 'BMW M4 Competition', user: 'Anna Nowak', date: '2024-03-20', status: 'Oczekująca' },
        { id: 'RES-003', car: 'Audi RS6 Avant', user: 'Jan Kowalski', date: '2024-02-10', status: 'Zakończona' }
    ];

    const filtered = role === 'admin' ? reservations : reservations.filter(r => r.user === 'Jan Kowalski');

    tbody.innerHTML = filtered.map(res => `
        <tr>
            <td>${res.id}</td>
            <td>${res.car}</td>
            ${role === 'admin' ? `<td>${res.user}</td>` : ''}
            <td>${res.date}</td>
            <td><span class="status-badge status-${res.status === 'Aktywna' ? 'active' : res.status === 'Oczekująca' ? 'pending' : 'cancelled'}">${res.status}</span></td>
            <td>
                <button class="btn btn-text btn-small" onclick="alert('Edycja ${res.id}')">Edytuj</button>
                <button class="btn btn-text btn-small text-danger" onclick="alert('Anulowano ${res.id}')">Anuluj</button>
            </td>
        </tr>
    `).join('');
}

function loadUsers() {
    const tbody = document.getElementById('usersTableBody');
    if (!tbody) return;

    const users = [
        { name: 'Jan Kowalski', email: 'jan@example.com', role: 'Użytkownik' },
        { name: 'Administrator', email: 'admin@example.com', role: 'Admin' },
        { name: 'Anna Nowak', email: 'anna@example.com', role: 'Użytkownik' }
    ];

    tbody.innerHTML = users.map(user => `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button class="btn btn-text btn-small">Edytuj</button>
                <button class="btn btn-text btn-small text-danger">Zablokuj</button>
            </td>
        </tr>
    `).join('');
}

function loadPayments() {
    const grid = document.getElementById('paymentGrid');
    if (!grid) return;

    const cards = [
        { last4: '4582', exp: '12/26', brand: 'Visa' },
        { last4: '8812', exp: '05/25', brand: 'Mastercard' }
    ];

    grid.innerHTML = cards.map(card => `
        <div class="payment-card">
            <p>${card.brand}</p>
            <div class="card-number">•••• •••• •••• ${card.last4}</div>
            <div class="card-footer">
                <span>Ważność: ${card.exp}</span>
            </div>
        </div>
    `).join('');
}

function loadFleet() {
    const tbody = document.getElementById('carsTableBody');
    if (!tbody) return;

    tbody.innerHTML = cars.map(car => `
        <tr>
            <td>${car.id}</td>
            <td><strong>${car.brand}</strong> ${car.model}</td>
            <td>${car.price} PLN</td>
            <td><span class="status-badge ${car.available ? 'status-active' : 'status-cancelled'}">${car.available ? 'Dostępny' : 'Niedostępny'}</span></td>
            <td>
                <button class="btn btn-text btn-small" onclick="alert('Edycja auta ${car.id}')">Edytuj</button>
            </td>
        </tr>
    `).join('');
}
