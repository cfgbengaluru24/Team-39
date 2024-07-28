import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import '../../components/createUser.css';
import { useNavigate } from 'react-router-dom';

const Attendance = () => {
  const [machine, setMachine] = useState([]);
  const [worker, setWorker] = useState([]);
  const [machineOut, setMachineOut] = useState([]);
  const [workerOut, setWorkerOut] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]); // Added this state for managing checked items

  const navigate = useNavigate()

  useEffect(() => {
    // Setting hard-coded values for machines and workers
    const hardCodedMachines = [
      { name: 'Machine A', value: 'machineA' },
      { name: 'Machine B', value: 'machineB' },
      { name: 'Machine C', value: 'machineC' }
    ];
    
    const hardCodedWorkers = [
      { name: 'Worker 1', value: 'worker1' },
      { name: 'Worker 2', value: 'worker2' },
      { name: 'Worker 3', value: 'worker3' }
    ];
    
    setMachine(hardCodedMachines);
    setWorker(hardCodedWorkers);
  }, []);

  const handleCheckboxMachine = (item) => {
    setMachineOut(prevState => {
      if (prevState.includes(item)) {
        return prevState.filter(i => i !== item);
      } else {
        return [...prevState, item];
      }
    });

    setCheckedItems(prevState => {
      if (prevState.includes(item)) {
        return prevState.filter(i => i !== item);
      } else {
        return [...prevState, item];
      }
    });
  };

  const handleCheckboxWorker = (item) => {
    setWorkerOut(prevState => {
      if (prevState.includes(item)) {
        return prevState.filter(i => i !== item);
      } else {
        return [...prevState, item];
      }
    });

    setCheckedItems(prevState => {
      if (prevState.includes(item)) {
        return prevState.filter(i => i !== item);
      } else {
        return [...prevState, item];
      }
    });
  };

  const saveForm = () => {
    // Implement save form logic here
    navigate('/user')
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
      </div>
    </div>
  );
};

export default Attendance;
