import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../components/createUser.css'

const Order = () => {
  const [form, setForm] = useState({
    name: "", type: "", quantity: "", customization: "", time: ""
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

      await fetch('http://localhost:3000/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newForm)
      });

      setForm({
        name: "", type: "", quantity: "", customization: "", time: ""
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
      <h1 className="title">Enter Orders</h1>

      <div className="form-container">
        <input type="text" placeholder="Order Name" value={form.name} onChange={handleChange} name="name" className="input" />
        <input type="text" placeholder="Type" value={form.type} onChange={handleChange} name="type" className="input" />
        <input type="text" placeholder="quantity" value={form.quantity} onChange={handleChange} name="quantity" className="input" />
        <input type="text" placeholder="customization" value={form.customization} onChange={handleChange} name="customization" className="input" />
        <input type="text" placeholder="time" value={form.time} onChange={handleChange} name="time" className="input" />
        <button onClick={saveForm} className="button">Submit</button>
      </div>

      {/* <div className="entries-container">
        <h2>Your Entries</h2>
        {formArray.length === 0 ? <div>No entries to show</div> : (
          <div className="entries-table-container">
            <table className="entries-table">
              <thead>
                <tr>
                  <th>Empname</th>
                  <th>Place</th>
                  <th>DOB</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Qualification</th>
                </tr>
              </thead>
              <tbody>
                {formArray.map((item, index) => (
                  <tr key={index}>
                    <td>{item.empname}</td>
                    <td>{item.place}</td>
                    <td>{item.DOB}</td>
                    <td>{item.phn}</td>
                    <td>{item.email}</td>
                    <td>{item.qualification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        {/* )} */}
      {/* </div> */}
    </div>
  );
};

export default Order;
