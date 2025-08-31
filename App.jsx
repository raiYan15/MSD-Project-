import React, { useState, useEffect } from 'react';

// --- STYLES ---
// Using a style component to inject CSS into the document head
const GlobalStyles = () => (
  <style>{`
    /* --- Perfect CSS --- */
    :root {
      --bg: #0f1115;
      --bg-elev: #151923;
      --text: #e8eaf0;
      --muted: #a9b0c0;
      --primary: #7c5cff;
      --primary-contrast: #0b0b10;
      --accent: #22c55e;
      --danger: #ef4444;
      --border: #2a3040;
      --radius: 16px;
      --shadow: 0 10px 30px rgba(0,0,0,.25);
      --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
      --space-5: 20px; --space-6: 24px; --space-7: 32px; --space-8: 40px;
      --max-w: 1200px;
      --font-ui: 'Inter', ui-sans-serif, system-ui, Arial, sans-serif;
    }

    @media (prefers-color-scheme: light) {
      :root {
        --bg: #ffffff;
        --bg-elev:#f6f7f9;
        --text:#0f1115;
        --muted:#5a6272;
        --border:#e5e7ef;
        --primary-contrast: #ffffff;
      }
    }
    
    /* --- Base & Layout --- */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    
    * { box-sizing: border-box; }

    html, body { 
      height: 100%; 
    }

    body {
      margin: 0; 
      background: var(--bg); 
      color: var(--text);
      font-family: var(--font-ui); 
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .container { 
      max-width: var(--max-w); 
      margin: 0 auto; 
      padding: 0 var(--space-6); 
    }

    .main-content {
        flex-grow: 1;
        padding-top: var(--space-8);
        padding-bottom: var(--space-8);
    }
    
    /* --- Components --- */
    .btn {
      display:inline-flex; align-items:center; justify-content: center; gap:var(--space-2);
      padding:10px 16px; border-radius: var(--radius); border:1px solid transparent;
      background: var(--primary); color: var(--primary-contrast);
      font-weight: 600; cursor: pointer; transition: transform .1s ease, background-color .2s ease;
      text-decoration: none;
      font-size: 1rem;
    }
    .btn:hover {
        background-color: color-mix(in srgb, var(--primary) 90%, #fff);
    }
    .btn:disabled {
        background-color: var(--border);
        cursor: not-allowed;
    }
    .btn--ghost { background: transparent; color: var(--text); border-color: var(--border); }
    .btn--ghost:hover { background-color: var(--border); }
    .btn:active { transform: translateY(1px); }
    
    .card {
      background: var(--bg-elev); border:1px solid var(--border);
      border-radius: var(--radius); padding: var(--space-6);
    }
    
    .input {
      width:100%; padding:12px 14px; border:1px solid var(--border);
      border-radius:12px; background:var(--bg); color:var(--text); font-family: var(--font-ui); font-size: 1rem;
      transition: border-color .2s ease;
    }
    .input:focus { outline: 2px solid var(--primary); border-color: transparent; }
    
    .grid { display:grid; gap: var(--space-6); }
    .grid--3 { grid-template-columns: repeat(3, 1fr); }
    @media (max-width: 1024px){ .grid--3 { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 768px){ .grid--3 { grid-template-columns: 1fr; } }
    
    a { color: var(--primary); text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* --- Header --- */
    .header { 
      position: sticky; top:0; z-index: 10; 
      background-color: color-mix(in srgb, var(--bg) 80%, transparent); 
      backdrop-filter: blur(10px); 
      border-bottom:1px solid var(--border); 
    }
    .header__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 72px;
    }
    .header__logo {
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
      color: var(--text);
      cursor: pointer;
    }
    .header__nav {
      display: flex;
      align-items: center;
      gap: var(--space-4);
    }

    /* --- Footer --- */
    .footer {
      border-top: 1px solid var(--border);
      padding: var(--space-6) 0;
      color: var(--muted);
      margin-top: auto;
    }
    .footer__container { text-align: center; }

    /* --- Landing Page --- */
    .hero {
      text-align: center;
      padding: var(--space-8) 0;
      max-width: 800px;
      margin: 0 auto;
    }
    .hero__title {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 700;
      line-height: 1.1;
      margin: 0;
      background: linear-gradient(45deg, var(--primary), var(--text));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero__subtitle {
      font-size: 1.25rem;
      color: var(--muted);
      margin: var(--space-4) 0 var(--space-7) 0;
    }
    .hero__cta {
      padding: 14px 28px;
      font-size: 1.1rem;
    }
    .features { padding: var(--space-8) 0; }
    .feature-card {
        display: flex;
        flex-direction: column;
    }
    .feature-card__image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 12px;
        margin-bottom: var(--space-5);
    }
    .feature-card__title { margin-top: 0; }
    
    /* --- Auth Page --- */
    .auth-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: var(--space-7) 0;
    }
    .auth-card {
      width: 100%;
      max-width: 420px;
    }
    .auth-card__title {
      font-size: 1.8rem;
      font-weight: 600;
      text-align: center;
      margin: 0 0 var(--space-2);
    }
    .auth-card__subtitle {
      text-align: center;
      color: var(--muted);
      margin: 0 0 var(--space-7);
    }
    .auth-form {
      display: flex;
      flex-direction: column;
      gap: var(--space-5);
    }
    .form-group label {
      display: block;
      font-weight: 600;
      margin-bottom: var(--space-2);
    }
    .auth-form__submit {
      margin-top: var(--space-3);
      padding: 12px;
    }
    .auth-card__toggle {
      margin-top: var(--space-6);
      text-align: center;
      color: var(--muted);
      font-size: 0.9rem;
    }
    .auth-card__toggle-btn {
      background: none;
      border: none;
      color: var(--primary);
      font-weight: 600;
      cursor: pointer;
      padding: 0 var(--space-2);
      font-size: inherit;
    }
    .auth-card__toggle-btn:hover { text-decoration: underline; }
    .form-message {
      text-align: center;
      margin-top: var(--space-4);
      padding: var(--space-3);
      border-radius: 8px;
    }
    .form-message--error {
        background-color: color-mix(in srgb, var(--danger) 20%, transparent);
        color: var(--danger);
    }
  `}</style>
);

// --- COMPONENTS ---

const Header = ({ onNavigate, currentUser, onLogout }) => (
  <header className="header">
    <div className="container header__container">
      <a onClick={() => onNavigate('landing')} className="header__logo">
        Trendify ✨
      </a>
      <nav className="header__nav">
        {currentUser ? (
            <>
                <span>Welcome, {currentUser.name}!</span>
                <button onClick={onLogout} className="btn btn--ghost">Logout</button>
            </>
        ) : (
            <button onClick={() => onNavigate('auth')} className="btn">
                Login / Signup
            </button>
        )}
      </nav>
    </div>
  </header>
);

const Footer = () => (
    <footer className="footer">
        <div className="container footer__container">
            <p>&copy; 2025 Trendify. All rights reserved.</p>
        </div>
    </footer>
);

const LandingPage = ({ onNavigate }) => (
  <div className="container">
    <section className="hero">
      <h1 className="hero__title">
        Never have a "nothing to wear" day again.
      </h1>
      <p className="hero__subtitle">
        Trendify uses AI to curate perfect outfits from your own wardrobe for any occasion, considering today's date, August 31, 2025, and local trends in India.
      </p>
      <button onClick={() => onNavigate('auth')} className="btn hero__cta">
        Get Started for Free
      </button>
    </section>

    <section className="features">
      <div className="grid grid--3">
        <div className="card feature-card">
          
          <img 
            src="https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="A well-organized modern closet" 
            className="feature-card__image" 
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/151923/e8eaf0?text=Your+Wardrobe'; }}
          />
          <h3 className="feature-card__title">📸 Digitize Your Wardrobe</h3>
          <p>Simply upload photos of your clothes. Our AI automatically tags them by type, color, and style.</p>
        </div>
        <div className="card feature-card">
          
          <img 
            src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="A stylish person looking at their phone" 
            className="feature-card__image"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/7c5cff/0b0b10?text=AI+Outfits'; }}
          />
          <h3 className="feature-card__title">✨ Get AI-Powered Suggestions</h3>
          <p>Receive daily outfit recommendations based on your items, the weather, and your calendar events.</p>
        </div>
        <div className="card feature-card">
          
          <img 
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="A person in trendy street style clothing" 
            className="feature-card__image"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/22c55e/0b0b10?text=Trending+Styles'; }}
          />
          <h3 className="feature-card__title">📈 Stay on Trend</h3>
          <p>Discover how to style your clothes with current fashion trends and find new pieces that match your style.</p>
        </div>
      </div>
    </section>
  </div>
);

const AuthPage = ({ onLogin }) => {
  const [mode, setMode] = useState('signin'); // 'signin' or 'signup'
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const isSigningIn = mode === 'signin';

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const toggleMode = () => {
    setMode(prevMode => prevMode === 'signin' ? 'signup' : 'signin');
    setError('');
    setFormData({ name: '', email: '', password: '' });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
        // Mock validation
        if (isSigningIn && (formData.email !== 'test@user.com' || formData.password !== 'password123')) {
            setError('Invalid email or password.');
        } else if (!isSigningIn && formData.email === 'test@user.com') {
            setError('An account with this email already exists.');
        } else {
            // Success
            const userName = isSigningIn ? 'Test User' : formData.name;
            onLogin({ name: userName, email: formData.email });
        }
        setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="card auth-card">
        <h2 className="auth-card__title">
          {isSigningIn ? 'Welcome Back!' : 'Create Your Account'}
        </h2>
        <p className="auth-card__subtitle">
          {isSigningIn ? 'Sign in to continue to Trendify.' : 'Get started with your personal AI stylist.'}
        </p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isSigningIn && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input id="name" type="text" placeholder="John Doe" className="input" value={formData.name} onChange={handleInputChange} required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" className="input" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="••••••••" className="input" value={formData.password} onChange={handleInputChange} required />
          </div>

          {error && <p className="form-message form-message--error">{error}</p>}

          <button type="submit" className="btn auth-form__submit" disabled={isLoading}>
            {isLoading ? (isSigningIn ? 'Signing In...' : 'Creating Account...') : (isSigningIn ? 'Sign In' : 'Create Account')}
          </button>
        </form>

        <div className="auth-card__toggle">
          {isSigningIn ? "Don't have an account?" : "Already have an account?"}
          <button onClick={toggleMode} className="auth-card__toggle-btn" disabled={isLoading}>
            {isSigningIn ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};


// --- APP ---

export default function App() {
  const [page, setPage] = useState('landing'); // 'landing' or 'auth'
  const [currentUser, setCurrentUser] = useState(null);

  const handleNavigate = (destination) => {
    setPage(destination);
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    setPage('landing'); // Navigate to landing page after successful login
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setPage('landing'); // Navigate to landing page after logout
  };

  return (
    <>
      <GlobalStyles />
      <Header onNavigate={handleNavigate} currentUser={currentUser} onLogout={handleLogout}/>
      <main className="main-content">
        {page === 'landing' && <LandingPage onNavigate={handleNavigate} />}
        {page === 'auth' && <AuthPage onLogin={handleLogin} />}
      </main>
      <Footer />
    </>
  );
}

