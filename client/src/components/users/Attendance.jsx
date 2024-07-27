import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../components/createUser.css'

const Attendance = () => {
  

  const [machine, setMachine] = useState([]);
  const [worker, setWorker] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setMachine(response.data.machine);
        setWorker(response.data.workers)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxClick = (item) => {
    setCheckedItems(prevState => {
      if (prevState.includes(item)) {
        // If item is already in the array, remove it (uncheck)
        return prevState.filter(i => i !== item);
      } else {
        // If item is not in the array, add it (check)
        return [...prevState, item];
      }
    });
  };


  return (
    <div className="container">
      <h1 className="title">Attendance</h1>

      <div className="form-container">
      machinr
      <ul>
        {machine.map((item, index) => (
          <div key={index}>
            <li>{JSON.stringify(item)}</li>
            <input
              type="checkbox"
              onChange={() => handleCheckboxClick(item)}
              name={item.value}
              checked={checkedItems.includes(item)}
            />
          </div>
        ))}
      </ul>
        
        <button onClick={saveForm} className="button">Submit</button>
      </div>

      
    </div>
  );
};

export default Attendance;
