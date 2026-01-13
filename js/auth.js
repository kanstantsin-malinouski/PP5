// Auth Service

// Initialize users storage if not exists
function initializeUsers() {
    if (!localStorage.getItem('registeredUsers')) {
        localStorage.setItem('registeredUsers', JSON.stringify([]));
    }
}

// Get all registered users
function getRegisteredUsers() {
    const users = localStorage.getItem('registeredUsers');
    return users ? JSON.parse(users) : [];
}

// Save registered users
function saveRegisteredUsers(users) {
    localStorage.setItem('registeredUsers', JSON.stringify(users));
}

// Register new user
export function register(userData) {
    initializeUsers();
    const users = getRegisteredUsers();

    // Check if email already exists
    const emailExists = users.some(user => user.email === userData.email);
    if (emailExists) {
        return { success: false, message: 'Ten adres e-mail jest już zarejestrowany.' };
    }

    // Create new user object
    const newUser = {
        id: Date.now().toString(),
        fullName: userData.fullName,
        email: userData.email,
        phone: userData.phone,
        password: userData.password, // In production, this should be hashed
        role: 'user',
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveRegisteredUsers(users);

    return { success: true, message: 'Konto zostało utworzone pomyślnie!' };
}

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
            userNameDisplay.textContent = userRole === 'admin' ? 'Administrator' : 'Użytkownik';
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
    initializeUsers();

    // Check hardcoded admin account
    const adminEmail = 'admin@example.com';
    const adminPass = 'admin123';

    if (email === adminEmail && password === adminPass) {
        localStorage.setItem('userRole', 'admin');
        localStorage.setItem('userName', 'Administrator');
        localStorage.setItem('userEmail', email);
        window.location.href = 'index.html';
        return true;
    }

    // Check registered users
    const users = getRegisteredUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('userRole', user.role);
        localStorage.setItem('userName', user.fullName);
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('userId', user.id);
        window.location.href = 'index.html';
        return true;
    }

    return false;
}

export function logout() {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userId');
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

    // Initialize Registration Page Logic
    const registerForm = document.getElementById('registerPageForm');
    const registerError = document.getElementById('registerError');
    const registerSuccess = document.getElementById('registerSuccess');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Hide previous messages
            if (registerError) registerError.classList.add('hidden');
            if (registerSuccess) registerSuccess.classList.add('hidden');

            // Get form values
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const termsAccepted = document.getElementById('terms').checked;

            // Validate passwords match
            if (password !== confirmPassword) {
                if (registerError) {
                    registerError.textContent = 'Hasła nie są identyczne.';
                    registerError.classList.remove('hidden');
                }
                return;
            }

            // Validate terms acceptance
            if (!termsAccepted) {
                if (registerError) {
                    registerError.textContent = 'Musisz zaakceptować regulamin.';
                    registerError.classList.remove('hidden');
                }
                return;
            }

            // Attempt registration
            const result = register({
                fullName,
                email,
                phone,
                password
            });

            if (result.success) {
                if (registerSuccess) {
                    registerSuccess.textContent = result.message;
                    registerSuccess.classList.remove('hidden');
                }

                // Redirect to login after 2 seconds
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            } else {
                if (registerError) {
                    registerError.textContent = result.message;
                    registerError.classList.remove('hidden');
                }
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
