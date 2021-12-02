import React, { Component } from 'react'
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            emailorPhone: "",
            password:"",
            emailorPhoneerror: false,
            passworderror: false,
        };
      }
    
      validation = () => {
        let isError = false;
        const error = this.state;
        error.emailorPhoneerror = this.state.emailorPhone === "" ? true : false;
        error.passworderror = this.state.password === "" ? true : false;
        this.setState({   //setState method is used for updating the value
          ...error,
        });
        isError = error.emailorPhone ;
        isError = error.password ;
        return isError;
      };
    
      next = () => {
        var isValid = this.validation();
        if (!isValid) {
          console.log("successsss validation");
        }
      };
    
      changeHandle =(e)=>{
          this.setState({  //setState method is used for updating the value
            [e.target.name]: e.target.value 
          })
      }

    render() {
        return (
            <div class="Login-frame">
                <div class="logo"> Fundoo
                </div>
                <h1 class="Login-header">Sign in</h1>
                <span class="Login-text">Use your Fundo account</span>
                <form>
                    <TextField fullWidth label="Email or Phone" name="emailorPhone" size="medium" margin="dense" error={this.state.emailorPhoneerror} helperText={this.state.emailorPhoneerror ? "Enter Email or Phone" : ''} onChange={e=> this.changeHandle(e)} sx={{marginTop:'20px'}}/>
                    <p class="text1">Forgot email?</p>
                    <TextField fullWidth label="Enter Password" name="password" size="medium" margin="dense" error={this.state.passworderror} helperText={this.state.passworderror ? "Enter Password" : ''} onChange={e=> this.changeHandle(e)} sx={{marginTop:'20px'}}/>
                    <div class="text2">
                        Not your computer? Use Guest mode to sign in privately.
                        <a href="#">Learn more</a>
                    </div>
                    <div class="Login-buttons">
                            <Button>Create account</Button>
                            <Button variant="contained"  onClick={this.next}>Next</Button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Login
