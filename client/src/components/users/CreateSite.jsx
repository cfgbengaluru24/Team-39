import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../components/createUser.css'

const CreateSite = () => {
  const [form, setForm] = useState({
    name: "", type: "", quantity: ""
  });

  const [formArray, setFormArray] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveForm = async () => {
    const currentDate = new Date().toLocaleString();
    if (form) {
      const newForm = { ...form, id: uuidv4(), date: currentDate };
      setFormArray([...formArray, newForm]);

      await fetch('http://localhost:3000/admin/createuser', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newForm)
      });

      setForm({
        name: "", type: "", quantity: ""
      });

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
      <h1 className="title">Machinery Details</h1>

      <div className="form-container">
        <input type="text" placeholder="Machine" value={form.name} onChange={handleChange} name="name" className="input" />
        <input type="text" placeholder="type" value={form.type} onChange={handleChange} name="type" className="input" />
        <input type="text" placeholder="Quantity" value={form.quantity} onChange={handleChange} name="quantity" className="input" />
        
        <button onClick={saveForm} className="button">Submit</button>
      </div>

      
    </div>
  );
};

export default CreateSite;
