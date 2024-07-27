import React, { useState, useEffect } from 'react';
import './Resource.css';

const Resource = () => {
  const [manufacturingData, setManufacturingData] = useState([]);
  const [progressUpdate, setProgressUpdate] = useState({});

  useEffect(() => {
    const fetchManufacturingData = async () => {
      try {
        const res = await fetch('http://localhost:8000/user/resource', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        setManufacturingData(data);
      } catch (error) {
        console.error('Error fetching manufacturing data:', error);
      }
    };

    fetchManufacturingData();
  }, []);

  const handleProgressChange = (e, id) => {
    const value = parseInt(e.target.value, 10);
    setProgressUpdate({
      ...progressUpdate,
      [id]: isNaN(value) ? 0 : value,
    });
  };

  const handleUpdate = async (id) => {
    try {
      const res = await fetch('http://localhost:8000/user/manufacture-update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          manufactureId: id,
          progress: progressUpdate[id]
        })
      });
      const data = await res.json();
      if (data.message === "Progress updated successfully") {
        const res = await fetch('http://localhost:8000/user/resource', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const updatedData = await res.json();
        setManufacturingData(updatedData);
      } else {
        console.error('Error updating progress:', data.message);
      }
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  return (
    <div className="resource-container">
      <h1 className="title">Manufacturing Resources</h1>
      {manufacturingData.length > 0 ? (
        manufacturingData.map((item) => (
          <div className="resource-card" key={item._id}>
            <p className="resource-item">Machine: {item.machine}</p>
            <p className="resource-item">Worker: {item.worker}</p>
            <p className="resource-item">Progress: {item.progress}%</p>
            <p className="resource-item">Location: {item.location}</p>
            <input
              className="progress-input"
              type="number"
              value={progressUpdate[item._id] || item.progress}
              onChange={(e) => handleProgressChange(e, item._id)}
              min="0"
              max="100"
            />
            <button className="update-button" onClick={() => handleUpdate(item._id)}>
              Update Progress
            </button>
          </div>
        ))
      ) : (
        <p>No manufacturing data available.</p>
      )}
    </div>
  );
};

export default Resource;
