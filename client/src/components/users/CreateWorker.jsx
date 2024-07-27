import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../components/createUser.css'

const CreateUser = () => {
  const [form, setForm] = useState({
    name: "", phone: "", location: "", age: "", type: ""
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
        Name: "", phone: "", location: "", age: "", type: ""
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
      <h1 className="title">Create Workerbase</h1>

      <div className="form-container">
        <input type="text" placeholder="Worker Name" value={form.name} onChange={handleChange} name="name" className="input" />
        <input type="text" placeholder="phone" value={form.phone} onChange={handleChange} name="phone" className="input" />
        <input type="text" placeholder="location" value={form.location} onChange={handleChange} name="location" className="input" />
        <input type="text" placeholder="age" value={form.age} onChange={handleChange} name="age" className="input" />
        <input type="text" placeholder="type" value={form.phn} onChange={handleChange} name="type" className="input" />
        
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

export default CreateUser;
