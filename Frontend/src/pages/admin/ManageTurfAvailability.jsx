// src/pages/ManageTurfAvailability.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../store/firebase-config'; // Firebase Firestore
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const ManageTurfAvailability = () => {
  const [turfs, setTurfs] = useState([]);
  const [selectedTurf, setSelectedTurf] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [newSlot, setNewSlot] = useState('');

  const fetchTurfs = async () => {
    const querySnapshot = await getDocs(collection(db, 'turfs'));
    const turfsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTurfs(turfsData);
  };

  const handleAddTimeSlot = async () => {
    if (!selectedTurf || !newSlot) {
      toast.error('Please select a turf and enter a valid time slot!');
      return;
    }

    try {
      const turfDocRef = doc(db, 'turfs', selectedTurf);
      const turfDoc = await getDocs(turfDocRef);
      const updatedSlots = [...turfDoc.data().timeSlots || [], newSlot];

      await updateDoc(turfDocRef, { timeSlots: updatedSlots });

      setTimeSlots(updatedSlots); // Update the local state to reflect the change
      setNewSlot('');
      toast.success('Time slot added successfully!');
    } catch (error) {
      toast.error('Failed to add time slot!');
    }
  };

  useEffect(() => {
    fetchTurfs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Manage Turf Availability</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700">Select Turf</label>
        <select
          value={selectedTurf}
          onChange={(e) => setSelectedTurf(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
        >
          <option value="">Select Turf</option>
          {turfs.map((turf) => (
            <option key={turf.id} value={turf.id}>
              {turf.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">New Time Slot</label>
        <input
          type="text"
          value={newSlot}
          onChange={(e) => setNewSlot(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
          placeholder="e.g. 10:00 AM - 11:00 AM"
        />
      </div>

      <button
        onClick={handleAddTimeSlot}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Add Time Slot
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Available Time Slots:</h3>
        <ul>
          {timeSlots.map((slot, index) => (
            <li key={index} className="text-gray-700">{slot}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageTurfAvailability;
