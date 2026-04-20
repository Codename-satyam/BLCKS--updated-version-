// ═══════════════════════════════════════════════════════════════════════════
// Authentication Service
// Handles user authentication and session management
// Ready to integrate with Firebase or MongoDB backend
// ═══════════════════════════════════════════════════════════════════════════

class AuthService {
    constructor() {
        this.user = this.getUserFromStorage();
        this.listeners = [];
    }

    // ── Local Storage Management ────────────────────────────────────────────
    saveUserToStorage(user) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('auth_token', user.token);
    }

    getUserFromStorage() {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    }

    clearUserFromStorage() {
        localStorage.removeItem('user');
        localStorage.removeItem('auth_token');
    }

    // ── User Management ────────────────────────────────────────────────────
    async register(email, password, username) {
        try {
            // TODO: Replace with Firebase Authentication
            // For now, mock implementation
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, username })
            }).catch(() => null);

            // Mock user object
            const user = {
                id: `user_${Date.now()}`,
                email,
                username,
                token: `token_${Date.now()}`,
                createdAt: new Date().toISOString(),
                lastLogin: new Date().toISOString()
            };

            this.user = user;
            this.saveUserToStorage(user);
            this.notifyListeners(user);
            return { success: true, user };
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, error: error.message };
        }
    }

    async login(email, password) {
        try {
            // TODO: Replace with Firebase Authentication
            // For now, mock implementation
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            }).catch(() => null);

            // Mock user object
            const user = {
                id: `user_${email.split('@')[0]}`,
                email,
                username: email.split('@')[0],
                token: `token_${Date.now()}`,
                lastLogin: new Date().toISOString()
            };

            this.user = user;
            this.saveUserToStorage(user);
            this.notifyListeners(user);
            return { success: true, user };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: error.message };
        }
    }

    async logout() {
        this.user = null;
        this.clearUserFromStorage();
        this.notifyListeners(null);
        return { success: true };
    }

    getCurrentUser() {
        return this.user;
    }

    isAuthenticated() {
        return !!this.user && !!this.user.token;
    }

    // ── Observer Pattern ────────────────────────────────────────────────────
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    notifyListeners(user) {
        this.listeners.forEach(listener => listener(user));
    }
}

export const authService = new AuthService();
