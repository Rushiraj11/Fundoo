import React, { Component } from 'react'
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class Login extends Component {
    render() {
        return (
            <div class="Login-container">
                <div class="logo"> Fundo
                </div>
                <h1 class="Login-header">Sign in</h1>
                <span class="Login-text">Use your Fundo account</span>
                <form>
                    <TextField fullWidth label="Email or Phone" id="emailorPhone" size="medium" margin="dense" sx={{marginTop:'40px'}}/>
                    <p class="text1">Forgot email?</p>
                    <TextField fullWidth label="Enter Password" id="emailorPhone" size="medium" margin="dense" sx={{marginTop:'40px'}}/>
                    <div class="text2">
                        Not your computer? Use Guest mode to sign in privately.
                        <a href="#">Learn more</a>
                    </div>
                    <div class="Login-buttons">
                            <Button>Create account</Button>
                            <Button variant="contained">Next</Button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Login
