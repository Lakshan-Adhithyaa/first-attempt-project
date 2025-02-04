import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle authentication here
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen w-full">
      <div 
        className="min-h-screen w-full bg-cover bg-center flex flex-col relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80")',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70">
          <div className="absolute inset-0" 
               style={{
                 background: 'linear-gradient(45deg, transparent 0%, rgba(220, 38, 38, 0.2) 100%)'
               }}
          />
        </div>

        <main className="flex-1 flex items-center justify-center p-4 relative z-10">
          <div className="w-full max-w-md px-8 py-10">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">FIT</span>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-white text-center mb-8">PLEASE LOG IN</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border-b-2 border-red-500/50 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border-b-2 border-red-500/50 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="flex justify-end">
                <a href="#" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                  Forgot your password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                LOGIN
              </button>

              <p className="text-center text-gray-400 mt-6">
                Don't have an account?{' '}
                <a href="#" className="text-red-500 hover:text-red-400 transition-colors">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;