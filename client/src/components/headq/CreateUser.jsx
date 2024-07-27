import React, { useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import '../../components/createUser.css';

const CreateUser = () => {
  const [form, setForm] = useState({
    empname: "", place: "", DOB: "", joindate: "", phn: "", email: "", qualification: ""
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
        empname: "", place: "", DOB: "", joindate: "", phn: "", email: "", qualification: ""
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
      <h1 className="title">Create User</h1>

      <div className="form-container">
        <input type="text" placeholder="Employee Name" value={form.empname} onChange={handleChange} name="empname" className="input" />
        <input type="text" placeholder="Location" value={form.place} onChange={handleChange} name="place" className="input" />
        <input type="text" placeholder="DOB" value={form.DOB} onChange={handleChange} name="DOB" className="input" />
        <input type="text" placeholder="Join Date" value={form.joindate} onChange={handleChange} name="joindate" className="input" />
        <input type="text" placeholder="Phone" value={form.phn} onChange={handleChange} name="phn" className="input" />
        <input type="text" placeholder="Email" value={form.email} onChange={handleChange} name="email" className="input" />
        <input type="text" placeholder="Qualification" value={form.qualification} onChange={handleChange} name="qualification" className="input" />
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
