import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../components/createUser.css'

const Attendance = () => {
  

  const [machine, setMachine] = useState([]);
  const [worker, setWorker] = useState([]);
  const [machineOut, setMachineOut] = useState([]);
  const [workerOut, setWorkerOut] = useState([]);
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

  const handleCheckboxMachine = (item) => {
    setMachineOut(prevState => {
      if (prevState.includes(item)) {
        // If item is already in the array, remove it (uncheck)
        return prevState.filter(i => i !== item);
      } else {
        // If item is not in the array, add it (check)
        return [...prevState, item];
      }
    });
  };

  const handleCheckboxWorker = (item) => {
    setWorkerOut(prevState => {
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
      
      <h2>Machines</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Checkbox</th>
          </tr>
        </thead>
        <tbody>
          {machine.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxMachine(item)}
                  name={item.value}
                  checked={checkedItems.includes(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Workers</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Checkbox</th>
          </tr>
        </thead>
        <tbody>
          {worker.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxWorker(item)}
                  name={item.value}
                  checked={checkedItems.includes(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
        
        <button onClick={saveForm} className="button">Submit</button>
        {/* saveForm fn should render back the dashboard */}
      </div>

      
    </div>
  );
};

export default Attendance;
