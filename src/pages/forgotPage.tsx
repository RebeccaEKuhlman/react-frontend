import React, { useState, FormEvent } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import AuthService from '../services/auth';
import {
  Box,
  Button,
  Container,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';



function SetPassword() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [email, setEmail] = React.useState("");
  //  const apiUrl = "https://sde-backend-40b2c0bbfd8e.herokuapp.com/api/password-reset-link"
    const { token } = useParams<{ token: string }>();

    // axios.defaults.withCredentials = true;
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault() 
      console.log("forgot page in submit")
      const response = AuthService.forgotPassword(email)
      console.log('Response:', Response);

   /*   axios.post(apiUrl, {email})
        .then(res => {
            if(res.data.Status === "Successfully reset password") {
                //navigate('/login')
                console.log(Response)
            }
        }).catch(err => console.log(err))

       // axios.post(`http://localhost:3001/reset-password/${id}/${token}`, {password})
       /*axios.post("https://sde-backend-40b2c0bbfd8e.herokuapp.com/api/password-reset-link", {email})
       axios.post(`http://localhost:9000/password-reset-link`, {email})
        .then(res => {
            if(res.data.Status === "Successfully reset password") {
                navigate('/login')
            }
        }).catch(err => console.log(err))*/
       // axios.post("https://sde-backend-40b2c0bbfd8e.herokuapp.com/api/password-reset-link", {
         // email: email
      //})
    /*  .then(response => {
          console.log('Response:', response.data);
          navigate("/login");
      })
      .catch(error => {
          console.error('Error:', error);
      });*/
    }


    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h4>Reset Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
          <TextField label="Email Address" margin="normal" required fullWidth autoComplete="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Send reset email
          </button>
          </form>
        
      </div>
    </div>
    )
}

export default SetPassword;