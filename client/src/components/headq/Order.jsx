import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../components/createUser.css'
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const [form, setForm] = useState({
    name: "", orderType: "", quantity: "", customization: "", tentative: "",location:""
  });

  const [formArray, setFormArray] = useState([]);

  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveForm = async () => {
    
   try {
     if (form) {
      
 
 console.log(JSON.stringify(form))

       const res = await fetch("http://localhost:8000/admin/takeorder",{
               method:'post',
               headers:{
                'Content-Type':'application/json',
                Authorization : `Bearer ${token}`
               } ,
               body:JSON.stringify(form)
            })
 
       setForm({
         name: "", orderType: "", quantity: "", customization: "", tentative: ""
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
 
       navigate('/headq')
      }
   } catch (error) {
    console.error(error)
   }
     
  };

  return (
    <div className="container">
      <h1 className="title">Enter Orders</h1>

      <div className="form-container">
        <input type="text" placeholder="Order Name" value={form.name} onChange={handleChange} name="name" className="input" />
        <input type="text" placeholder="orderType" value={form.orderType} onChange={handleChange} name="orderType" className="input" />
        <input type="number" placeholder="quantity" value={form.quantity} onChange={handleChange} name="quantity" className="input" />
        <input type="text" placeholder="customization" value={form.customization} onChange={handleChange} name="customization" className="input" />
        <input type="date" placeholder="tentative" value={form.tentative} onChange={handleChange} name="tentative" className="input" />
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
