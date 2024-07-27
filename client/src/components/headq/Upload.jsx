import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../components/createUser.css';

const Upskilling = () => {
  const [fileName, setFileName] = useState("");

  const [formArray, setFormArray] = useState([]);

  const handleChange = (e) => {
    setFileName(e.target.value);
  };

  const saveForm = async () => {
    const currentDate = new Date().toLocaleString();
    if (fileName) {
      const newForm = { fileName, id: uuidv4(), date: currentDate };
      setFormArray([...formArray, newForm]);

      await fetch('http://localhost:3000/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newForm)
      });

      setFileName("");

      toast("Saved Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
      });
    } else {
      toast("Not Saved!");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Enter Education File Name</h1>

      <div className="form-container">
        <input
          type="text"
          placeholder="File Name"
          value={fileName}
          onChange={handleChange}
          name="fileName"
          className="input"
        />
        
        <button onClick={saveForm} className="button">Submit</button>
      </div>
    </div>
  );
};

export default Upskilling;
