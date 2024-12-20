import React, { useState } from 'react';

const LoginSignup: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container py-5">
      <h2 className="text-center">{isLogin ? 'Login' : 'Signup'}</h2>
      <form className="mt-4">
        {!isLogin && (
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </form>
      <p className="text-center mt-3">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button
          className="btn btn-link p-0"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Sign up' : 'Log in'}
        </button>
      </p>
    </div>
  );
};

export default LoginSignup;
