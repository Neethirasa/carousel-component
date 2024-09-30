import React from 'react';
import './Signup.css';

const Signup: React.FC = () => {
  return (
    <div className="email-signup-section">
      <p>Join the Cozey Family to stay ahead on product launches and exclusive content.</p>
      <form className="email-form">
        <input type="email" placeholder="Email" />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;