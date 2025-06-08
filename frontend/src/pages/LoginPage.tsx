import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Form.css';
import { useAuth } from '../contexts/AuthContext';
import type { UserInfo } from '../types';
import { API_BASE_URL } from '../config';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data: UserInfo | { message: string } = await response.json();

      if (!response.ok) {
        throw new Error((data as { message: string }).message || 'Failed to log in');
      }

      login(data as UserInfo);
      navigate('/'); // Redirect to homepage on successful login

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-card">
        <h2>Welcome Back</h2>
        <p className="form-subheading">Log in to manage your profile.</p>

        {error && <p className="form-error">{error}</p>}
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />
        </div>

        <button type="submit" className="form-button" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Log In'}
        </button>

        <p className="form-footer-text">
          Don't have an account? <Link to="/register">Register as Professional</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
