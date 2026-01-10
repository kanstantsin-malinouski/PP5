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

        const userName = localStorage.getItem('userName');
        if (userName) {
            userNameDisplay.textContent = userName;
        } else {
            userNameDisplay.textContent = userRole === 'admin' ? 'Administrator' : 'Jan Kowalski';
        }

        const dashboardBtn = document.getElementById('dashboardBtn');
        if (dashboardBtn) {
            dashboardBtn.onclick = () => window.location.href = 'profile.html';
        }
    } else {
        loginLink.classList.remove('hidden');
        userInfo.classList.add('hidden');
    }
}

export function login(email, password) {
    const adminEmail = 'admin@example.com';
    const adminPass = 'admin123';
    const userEmail = 'jan@example.com';
    const userPass = 'jan123';

    let role = null;

    if (email === adminEmail && password === adminPass) {
        role = 'admin';
    } else if (email === userEmail && password === userPass) {
        role = 'user';
    }

    if (role) {
        localStorage.setItem('userRole', role);
        localStorage.setItem('userName', role === 'admin' ? 'Administrator' : 'Jan Kowalski');
        window.location.href = 'index.html';
        return true;
    } else {
        return false;
    }
}

export function logout() {
    localStorage.removeItem('userRole');
    window.location.reload();
}

// Initialize Login Page Logic
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginPageForm');
    const errorMsg = document.getElementById('loginError');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (errorMsg) errorMsg.classList.add('hidden');

            const success = login(email, password);

            if (!success && errorMsg) {
                errorMsg.classList.remove('hidden');
            }
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
