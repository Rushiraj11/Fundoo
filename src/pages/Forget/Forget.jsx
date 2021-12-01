import React, { Component } from 'react'
import './Forget.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class Forget extends Component {
    render() {
        return (
            <div class="forgot-email-frame">
            <div class="logo"> Fundoo
            </div>
            <h1 class="forgot-email-header">Find your email</h1>
            <span class="forgot-email-text">Enter your phone number or recovery email</span>
            <form>
                <TextField fullWidth label="Phone number or email" id="emailorPhone" size="medium" margin="dense" sx={{marginTop:'40px'}}/>
                <div class="login-buttons">
                        <Button variant="contained" sx={{width:'70px'}}> Next </Button>
                </div>
            </form>
        </div>
        )
    }
}

export default Forget
