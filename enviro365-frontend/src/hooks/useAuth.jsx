import { useState } from 'react';

// Mock credentials — replace with real API call later
const MOCK_USER = {
  email:    'investor@enviro365.co.za',
  password: 'password123',
  name:     'Thabo Nkosi',
};

export function useLogin(onSuccess) {
  const [error,   setError]   = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(email, password) {
    setError(null);
    setLoading(true);

    // Simulates network delay — replace with fetch('/api/auth/login') later
    await new Promise(resolve => setTimeout(resolve, 800));

    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      localStorage.setItem('isAuthenticated', 'true');
      onSuccess();
    } else {
      setError('Invalid email or password.');
    }

    setLoading(false);
  }

  return { handleLogin, error, loading };
}

export function useSignUp(onSuccess) {
  const [error,   setError]   = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSignUp(fullName, email, password, confirmPassword) {
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setLoading(true);

    // Simulates network delay — replace with fetch('/api/auth/register') later
    await new Promise(resolve => setTimeout(resolve, 800));

    localStorage.setItem('isAuthenticated', 'true');
    onSuccess();

    setLoading(false);
  }

  return { handleSignUp, error, loading };
}

export function useLogout(onSuccess) {
  function handleLogout() {
    localStorage.removeItem('isAuthenticated');
    onSuccess();
  }
  return { handleLogout };
}

export function isAuthenticated() {
  return localStorage.getItem('isAuthenticated') === 'true';
}