import React, { useEffect, useState } from 'react';
import { fetchCalories, addCalorie } from '../api';

const Dashboard = () => {
  const [calories, setCalories] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    fetchCalories().then(setCalories);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCalorie = {
      description,
      amount: parseInt(amount),
      date: new Date().toISOString(),
      userId: 'user-id-placeholder' // Replace with actual user ID
    };
    const addedCalorie = await addCalorie(newCalorie);
    setCalories([...calories, addedCalorie]);
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <button type="submit">Add Calorie</button>
      </form>
      <ul>
        {calories.map(calorie => (
          <li key={calorie.id}>
            {calorie.description}: {calorie.amount} calories
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
