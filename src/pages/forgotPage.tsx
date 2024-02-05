import React, { useState, FormEvent } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'


function SetPassword() {
    const [password, setPassword] = React.useState<string | undefined>();
    const navigate = useNavigate()
    const {id, token} = useParams()

    axios.defaults.withCredentials = true;
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault() 
       // axios.post(`http://localhost:3001/reset-password/${id}/${token}`, {password})
        axios.post(`http://localhost:9000/password-reset-link`, {password})
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/login')
               
            }
        }).catch(err => console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h4>Reset Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>New Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Update
          </button>
          </form>
        
      </div>
    </div>
    )
}

export default SetPassword;