import React, { Component } from 'react'
import './Reset.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export class Reset extends Component {
    render() {
        return (
            <div class="reset-frame">
            <div class="logo"> Fundoo </div>
           <h1 class="reset-header">Reset your password</h1>
           <span class="reset-text">Enter your new password and then </span>
           <form>
               <TextField fullWidth label="Enter new password" id="psw" size="small" margin="dense" sx={{marginTop:'40px'}}/>
               <TextField fullWidth label="Confirm the password" id="cpsw" size="small" margin="dense" sx={{marginTop:'20px'}}/>
               <div class="reset-buttons">
                       <Button variant="contained" sx={{width:'80px'}}>Next</Button>
               </div>
           </form>
       </div>
        )
    }
}

export default Reset
