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
    const [email, setEmail] = React.useState("");

    const handleSubmit = (event: FormEvent) => {
      event.preventDefault() 
      console.log("forgot page in submit")
      const response = AuthService.forgotPassword(email)
      console.log('Response:', Response);
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