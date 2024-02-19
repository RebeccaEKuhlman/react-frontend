import React, { FormEvent } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios'


function ResetPassword() {
    const navigate = useNavigate()
    const [password, setPassword] = React.useState("");
    const { token } = useParams<{ token: string }>();

    const handleSubmit = (event: FormEvent) => {
        console.log("ResetPassword submit")
        event.preventDefault() 
        axios.post(`http://localhost:9000/api/password-confirm`, {token, password})
            .then(res => {
                if(res.data.Status === "Success") {
                  console.log(res)
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
          <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            /></div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Update
          </button>
          </form>
        
      </div>
    </div>
    )
}

export default ResetPassword;