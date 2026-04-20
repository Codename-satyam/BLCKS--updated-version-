import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Initialize auth state from storage
    useEffect(() => {
        const currentUser = authService.getCurrentUser();
        setUser(currentUser);
        setLoading(false);

        // Subscribe to auth changes
        const unsubscribe = authService.subscribe((updatedUser) => {
            setUser(updatedUser);
        });

        return unsubscribe;
    }, []);

    const register = useCallback(async (email, password, username) => {
        setLoading(true);
        setError(null);
        try {
            const result = await authService.register(email, password, username);
            if (!result.success) {
                setError(result.error);
                return { success: false, error: result.error };
            }
            return { success: true, user: result.user };
        } catch (err) {
            setError(err.message);
            return { success: false, error: err.message };
        } finally {
            setLoading(false);
        }
    }, []);

    const login = useCallback(async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const result = await authService.login(email, password);
            if (!result.success) {
                setError(result.error);
                return { success: false, error: result.error };
            }
            return { success: true, user: result.user };
        } catch (err) {
            setError(err.message);
            return { success: false, error: err.message };
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(async () => {
        setLoading(true);
        try {
            await authService.logout();
            return { success: true };
        } catch (err) {
            setError(err.message);
            return { success: false, error: err.message };
        } finally {
            setLoading(false);
        }
    }, []);

    const value = {
        user,
        loading,
        error,
        isAuthenticated: !!user && !!user.token,
        register,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}
