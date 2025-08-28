'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

interface AuthGateProps {
  children: React.ReactNode;
}

export default function AuthGate({ children }: AuthGateProps) {
  const { isAuthenticated, isLoading, login, logout } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Keyboard shortcut handler for Cmd+Esc to logout
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === 'Escape') {
        event.preventDefault();
        if (isAuthenticated) {
          logout();
          setPassword('');
          setError('');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isAuthenticated, logout]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const result = await login(password);
    
    if (!result.success) {
      setError(result.error || 'Authentication failed');
      setPassword('');
    }
    
    setIsSubmitting(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-violet-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-violet-400 mb-2">🔒 Protected Content</h1>
            {/* <p className="text-gray-400">Enter password to access OMEGA Protocol</p> */}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="Enter password..."
                required
                disabled={isSubmitting}
              />
            </div>

            {error && (
              <div className="p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors"
            >
              {isSubmitting ? 'Authenticating...' : 'Access Content'}
            </button>
          </form>

          {/* <div className="mt-6 text-center text-xs text-gray-500">
            Content is server-side protected and only delivered after authentication
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-600">
            Tip: Press Cmd+Esc to logout when authenticated
          </div> */}
        </div>
      </div>
    );
  }

  return (
    <div>
      {children}
      {/* <button // Uncomment to show logout button
        onClick={logout}
        className="fixed top-4 right-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm transition-colors z-50"
        title="Logout (or press Cmd+Esc)"
      >
        Logout
      </button> */}
    </div>
  );
}
