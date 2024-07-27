import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('email:', email);
    console.log('Password:', password);
    
    try {
      const res = await fetch('http://localhost:8000/admin/login',{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password})
      })
  
      const result = await res.json();
  
      if(!res.ok){
        throw new Error(result.message);
      }

      console.log(result)
  
      localStorage.setItem('user',result.data)
        localStorage.setItem('role',result.role)
        localStorage.setItem('token',result.token)

      console.log("result data",result)

      navigate('/headq')

    } catch (error) {
      
     console.error("Error in logIn",error)
      setError("Credentials wrong")
    }

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="label">email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <button
            type="submit"
            className="submit-button"
          >
            Login
          </button>
          {error && 
          <p style={"color:red"} >{error}</p>
          }
        </form>
      </div>
    </div>
  );
}

export default Login;
