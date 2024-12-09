// src/pages/AddTurf.jsx
import React, { useState } from 'react';
import { db } from '.../store/firebase-config'; // Firebase Firestore
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

const AddTurf = () => {
  const [name, setName] = useState('');
  const [pricePerHour, setPricePerHour] = useState('');
  const [availability, setAvailability] = useState(''); // Can be 'Available', 'Unavailable'
  const [loading, setLoading] = useState(false);

  const handleAddTurf = async (e) => {
    e.preventDefault();

    if (!name || !pricePerHour || !availability) {
      toast.error('All fields are required!');
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, 'turfs'), {
        name,
        pricePerHour,
        availability,
        createdAt: new Date().toISOString(),
      });

      toast.success('New turf added successfully!');
      setName('');
      setPricePerHour('');
      setAvailability('');
    } catch (error) {
      toast.error('Failed to add turf!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Turf</h2>
      <form onSubmit={handleAddTurf}>
        <div className="mb-4">
          <label className="block text-gray-700">Turf Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Price Per Hour</label>
          <input
            type="number"
            value={pricePerHour}
            onChange={(e) => setPricePerHour(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Availability</label>
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            required
          >
            <option value="">Select Availability</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>

        <button
          type="submit"
          className={`w-full text-white py-2 rounded-md ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
          disabled={loading}
        >
          {loading ? 'Adding Turf...' : 'Add Turf'}
        </button>
      </form>
    </div>
  );
};

export default AddTurf;
