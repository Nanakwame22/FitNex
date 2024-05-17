import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [step, setStep] = useState(1);

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      setStep(2);
      alert('Sign up successful, please verify your email.');
    } catch (error) {
      alert('Error signing up');
      console.log(error);
    }
  };

  const handleConfirmSignup = async (event) => {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(username, authCode);
      alert('Email verified, you can now log in.');
    } catch (error) {
      alert('Error confirming sign up');
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {step === 1 ? (
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <form onSubmit={handleConfirmSignup}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="text" placeholder="Authorization Code" value={authCode} onChange={(e) => setAuthCode(e.target.value)} />
          <button type="submit">Confirm Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default SignupPage;
