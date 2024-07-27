import React, { useState, useEffect } from 'react';

const Resource = () => {
  const [manufacturingData, setManufacturingData] = useState([]);
  const [progressUpdate, setProgressUpdate] = useState({});



  useEffect(() => {
    // Fetch manufacturing data from the backend
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
    setProgressUpdate({
      ...progressUpdate,
      [id]: e.target.value,
    });
  };

  const handleUpdate = async (id) => {
    try {
        console.log()
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
        // Fetch updated data
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
    <div>
      <h1>Manufacturing Resources</h1>
      {manufacturingData.length > 0 ? (
        manufacturingData.map((item) => (
          <div key={item._id}>
            <p>Machine: {item.machine}</p>
            <p>Worker: {item.worker}</p>
            <p>Progress: {item.progress}%</p>
            <p>Location: {item.location}</p>
            <input
              type="number"
              value={progressUpdate[item._id] || item.progress}
              onChange={(e) => handleProgressChange(e, item._id)}
              min="0"
              max="100"
            />
            <button onClick={() => handleUpdate(item._id)}>Update Progress</button>
          </div>
        ))
      ) : (
        <p>No manufacturing data available.</p>
      )}
    </div>
  );
};

export default Resource;
