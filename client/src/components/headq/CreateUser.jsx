import React, { useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import '../../components/createUser.css';

const CreateUser = () => {
  const [form, setForm] = useState({
    name: "", place: "", dateofbirth: "", dateofjoining: "", phoneno: "", email: "", qualification: "",password:""
  });


  const token = localStorage.getItem('token')
  console.log(token)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveForm = async () => {
    
    

    if (form) {
      console.log(form)

     try {
      console.log("jdsfj")

      const res =  await fetch('http://localhost:8000/admin/createuser', {
         method: "POST",
         headers: { "Content-Type": "application/json" ,
          Authorization : `Bearer ${token}`
         },
         body: JSON.stringify(form)
       });
 
       
       const result = await res.json();
   
       if(!res.ok){
         throw new Error(result.message);
       }
 
       console.log('resf',result)
 
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

     } catch (error) {
      toast("Error in create!");
      console.error("Error",error)
     }
    } else {
      toast("Not Saved!");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Create User</h1>

      <div className="form-container">
        <input type="text" placeholder="Employee Name" value={form.name} onChange={handleChange} name="name" className="input" />
        <input type="text" placeholder="Location" value={form.place} onChange={handleChange} name="place" className="input" />
        <input type="date" placeholder="dateofbirth" value={form.dateofbirth} onChange={handleChange} name="dateofbirth" className="input" />
        <input type="date" placeholder="Join Date" value={form.dateofjoining} onChange={handleChange} name="dateofjoining" className="input" />
        <input type="text" placeholder="Phone" value={form.phoneno} onChange={handleChange} name="phoneno" className="input" />
        <input type="email" placeholder="Email" value={form.email} onChange={handleChange} name="email" className="input" />
        <input type="text" placeholder="Qualification" value={form.qualification} onChange={handleChange} name="qualification" className="input" />
        <input type="text" placeholder="PAssword" value={form.password} onChange={handleChange} name="password" className="input" />
        <button onClick={saveForm} className="button">Submit</button>
      </div>

      {/* <div className="entries-container">
        <h2>Your Entries</h2>
        {formArray.length === 0 ? <div>No entries to show</div> : (
          <div className="entries-table-container">
            <table className="entries-table">
              <thead>
                <tr>
                  <th>name</th>
                  <th>Place</th>
                  <th>dateofbirth</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Qualification</th>
                </tr>
              </thead>
              <tbody>
                {formArray.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.place}</td>
                    <td>{item.dateofbirth}</td>
                    <td>{item.phoneno}</td>
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
