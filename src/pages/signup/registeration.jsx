import React, { Component } from 'react'
import './Registeration.css';
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


export class Registeration extends Component {
    render() {
        return (
                <div class="Body-Frame">
                    <div class="Left-side">
                        <div class="Left-side-header1">
                            Fundoo
                        </div>
                        <div class="section-one">
                            <div class="section-one-header">Create your Fundo Account</div>
                            <div id="form">
                        <div class="name">
                            <TextField  label="first name" id="firstName" size="small" margin="dense" sx={{marginRight:"5px"}} />
                            <TextField  label="last name" id="lastName" size="small" margin="dense" sx={{marginLeft:"5px"}}/>
                        </div>
                        <TextField  fullWidth label="user name"  id="user name" size="small" margin="dense" helperText="you can use numbers,letters and periods" />
                        <div><p class="p">Use my current email address instead</p></div>
                        <div class="password">
                            <TextField label="Password" id="password" size="small" margin="dense" sx={{marginRight:"5px"}} />
                            <TextField label="Confirm" id="passwordconfirm" size="small" margin="dense" sx={{marginLeft:"5px"}}/>
                        </div>
                        <p class="passwordpattern">Use 8 or more characters with a mix of letters, numbers and symbols</p>
                        <div class="check">
                            <Checkbox/> Show password
                        </div>
                       <div class="buttons">
                            <Button>Sign in instead</Button>
                            <Button variant="contained">Next</Button> 
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="Right-side">
                    <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" height="244" width="244"/>
                    <div class="main-content-right-caption">
                        <span>One account. All of Fundo</span><br/>
                        <span>working for you.</span>
                    </div>
                </div>
                </div>
        
        )
    }
}

export default Registeration
