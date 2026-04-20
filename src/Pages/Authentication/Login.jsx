import React, { useState, useEffect, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
const FloatingLines = React.lazy(() => import("../../assets/LightBackground/LightBackground"));

const AuthPage = () => {
    // Auth hooks
    const { register, login, isAuthenticated, loading: authLoading, error: authError } = useAuth();
    const navigate = useNavigate();

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    // State to toggle between Login and Register views
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Form state
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: ''
    });

    // Fade in on mount
    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            let result;
            if (isLoginMode) {
                // Login
                if (!formData.email || !formData.password) {
                    throw new Error('Email and password are required');
                }
                result = await login(formData.email, formData.password);
            } else {
                // Register
                if (!formData.email || !formData.password || !formData.username) {
                    throw new Error('All fields are required');
                }
                result = await register(formData.email, formData.password, formData.username);
            }

            if (result.success) {
                // Navigate to homepage after successful auth
                setTimeout(() => navigate('/'), 500);
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
        setError(null);
        setFormData({ email: '', password: '', username: '' });
    };

    return (
        <section 
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white"
            style={{ fontFamily: '"Bungee", cursive' }}
        >
            {/* ================= BACKGROUND ELEMENTS ================= */}
            {/* 1. Floating Lines Interactive Background */}
            <Suspense Fallback={null}>
                <div className="absolute inset-0 z-0 opacity-60">
                    <FloatingLines 
                        enabledWaves={["top","middle","bottom"]}
                        lineCount={5}
                        lineDistance={5}
                    bendRadius={5}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                />
            </div>
            </Suspense>

            {/* 2. Brand Glows to anchor the lines */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-600 opacity-20 blur-[150px] pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-[150px] pointer-events-none z-0"></div>

            {/* 3. Scanlines & Pixel Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)" }}
            ></div>
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
                style={{
                    backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                }}
            ></div>
            {/* ======================================================= */}

            {/* ================= AUTHENTICATION HUD ================= */}
            <div 
                className={`relative z-10 w-full max-w-md p-8 md:p-10 bg-black/70 backdrop-blur-xl border border-cyan-900/60 shadow-[0_0_50px_rgba(0,255,255,0.1)] transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
                {/* Decorative Terminal Header */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-[10px] text-cyan-400 tracking-widest uppercase">
                            {isLoginMode ? "SECURE_LOGIN" : "NEW_NODE_REGISTRATION"}
                        </span>
                    </div>
                    <span className="text-[10px] text-gray-500 tracking-widest">v2.0.4</span>
                </div>

                <h2 
                    className="text-3xl md:text-4xl mb-6 tracking-wide"
                    style={{ textShadow: "0 0 10px rgba(0,255,255,0.4)" }}
                >
                    {isLoginMode ? "Authenticate" : "Initialize"}
                </h2>

                {/* Error Message Display */}
                {(error || authError) && (
                    <div className="mb-5 p-4 bg-red-950/30 border border-red-500/50 text-red-400 text-sm rounded">
                        <span className="font-bold">❌ </span>
                        {error || authError}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    
                    {/* Username field (Only shows on Register) */}
                    {!isLoginMode && (
                        <div className="relative group animate-fade-in">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-cyan-500 text-sm pl-3 pointer-events-none group-focus-within:text-white transition-colors">
                                &gt;
                            </span>
                            <input 
                                type="text" 
                                name="username"
                                placeholder="USERNAME_IDENTIFIER"
                                value={formData.username}
                                onChange={handleInputChange}
                                required={!isLoginMode}
                                disabled={loading || authLoading}
                                className="w-full bg-black/50 border border-gray-800 text-cyan-300 text-sm font-sans pl-8 pr-4 py-3.5 focus:outline-none focus:border-cyan-500 focus:bg-cyan-950/20 transition-all placeholder:text-gray-600 placeholder:font-['Bungee'] disabled:opacity-50"
                            />
                        </div>
                    )}

                    {/* Email Field (Shared) */}
                    <div className="relative group">
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-cyan-500 text-sm pl-3 pointer-events-none group-focus-within:text-white transition-colors">
                            &gt;
                        </span>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="EMAIL_ADDRESS"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            disabled={loading || authLoading}
                            className="w-full bg-black/50 border border-gray-800 text-cyan-300 text-sm font-sans pl-8 pr-4 py-3.5 focus:outline-none focus:border-cyan-500 focus:bg-cyan-950/20 transition-all placeholder:text-gray-600 placeholder:font-['Bungee'] disabled:opacity-50"
                        />
                    </div>

                    {/* Password Field (Shared) */}
                    <div className="relative group">
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-purple-500 text-sm pl-3 pointer-events-none group-focus-within:text-white transition-colors">
                            *
                        </span>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="ACCESS_KEY (PASSWORD)"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            disabled={loading || authLoading}
                            className="w-full bg-black/50 border border-gray-800 text-purple-300 text-sm font-sans pl-8 pr-4 py-3.5 focus:outline-none focus:border-purple-500 focus:bg-purple-950/20 transition-all placeholder:text-gray-600 placeholder:font-['Bungee'] disabled:opacity-50"
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit"
                        disabled={loading || authLoading}
                        className="mt-4 w-full bg-transparent border-2 border-cyan-500 text-cyan-400 uppercase tracking-[0.2em] text-sm py-4 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300 relative overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="relative z-10">
                            {loading || authLoading 
                                ? "PROCESSING_..." 
                                : (isLoginMode ? "Establish Connection _" : "Generate Node _")}
                        </span>
                        {/* Hover scanline effect */}
                        <div className="absolute top-1/2 left-[-100%] w-[200%] h-[2px] bg-white opacity-0 group-hover/btn:opacity-50 group-hover/btn:animate-[scan_1s_linear_infinite] pointer-events-none"></div>
                    </button>
                </form>

                {/* Toggle Login/Register Footer */}
                <div className="mt-8 pt-6 border-t border-gray-800 text-center flex flex-col gap-3">
                    <p className="text-xs text-gray-500 font-sans tracking-widest">
                        {isLoginMode ? "AWAITING CREDENTIALS..." : "SYSTEM READY FOR NEW DATA..."}
                    </p>
                    <button 
                        onClick={toggleMode}
                        disabled={loading || authLoading}
                        className="text-[10px] md:text-xs text-cyan-500 hover:text-white tracking-[0.1em] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoginMode ? "[ CREATE_NEW_ACCOUNT ]" : "[ RETRIEVE_EXISTING_ACCOUNT ]"}
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes scan {
                    0% { transform: translateY(-50%) rotate(45deg) translateX(-100%); }
                    100% { transform: translateY(-50%) rotate(45deg) translateX(100%); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default AuthPage;