// src/pages/UserActivityAnalytics.jsx
import React, { useState, useEffect } from 'react';
import { db } from '.../store/firebase-config'; // Firebase Firestore
import { collection, getDocs } from 'firebase/firestore';

const UserActivityAnalytics = () => {
  const [userActivities, setUserActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserActivities = async () => {
    const querySnapshot = await getDocs(collection(db, 'userActivities'));
    const activities = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUserActivities(activities);
    setLoading(false);
  };

  useEffect(() => {
    fetchUserActivities();
  }, []);

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">User Activity Analytics</h2>
      
      {loading ? (
        <div>Loading user activities...</div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold">Activity Overview</h3>
          <ul>
            {userActivities.map((activity) => (
              <li key={activity.id} className="text-gray-700">
                {activity.userName} booked {activity.turfName} on {activity.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserActivityAnalytics;
