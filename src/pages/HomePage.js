import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to DesTrack</h2>
        <p>Your personal calorie tracking app.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
