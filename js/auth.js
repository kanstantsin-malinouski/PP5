// Auth Service

export function checkAuth() {
    const userRole = localStorage.getItem('userRole');
    const loginLink = document.getElementById('loginLink');
    const userInfo = document.getElementById('userInfo');
    const userNameDisplay = document.getElementById('userName');

    // If elements don't exist (e.g. on login page), return
    if (!loginLink || !userInfo) return;

    if (userRole) {
        loginLink.classList.add('hidden');
        userInfo.classList.remove('hidden');

        if (userRole === 'admin') {
            userNameDisplay.textContent = 'Administrator';
        } else {
            userNameDisplay.textContent = 'Jan Kowalski';
        }
    } else {
        loginLink.classList.remove('hidden');
        userInfo.classList.add('hidden');
    }
}

export function login(role) {
    localStorage.setItem('userRole', role);
    // Redirect to index
    window.location.href = 'index.html';
}

export function logout() {
    localStorage.removeItem('userRole');
    window.location.reload();
}

// Initialize Login Page Logic
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginPageForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const role = document.getElementById('username').value;
            login(role);
        });
    }

    // Initialize Logout Button on Index
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            logout();
        });
    }

    // Check auth status on load
    checkAuth();
});
