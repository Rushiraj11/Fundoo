import React, { Component } from 'react'
import './Forget.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class Forget extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            emailorPhone: "",
            emailorPhoneerror: false,
        };
      }
    
      validation = () => {
        let isError = false;
        const error = this.state;
        error.emailorPhoneerror = this.state.emailorPhone === "" ? true : false;
        this.setState({   //setState method is used for updating the value
          ...error,
        });
        isError = error.emailorPhone ;
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
            <div class="forgot-email-frame">
            <div class="logo"> Fundoo
            </div>
            <h1 class="forgot-email-header">Find your email</h1>
            <span class="forgot-email-text">Enter your phone number or recovery email</span>
            <form>
                <TextField fullWidth label="Phone number or email" id="emailorPhone" size="medium" margin="dense" error={this.state.emailorPhoneerror} helperText={this.state.emailorPhoneerror ? "Enter Email or Phone" : ''} onChange={e=> this.changeHandle(e)} sx={{marginTop:'40px'}}/>
                <div class="login-buttons">
                        <Button variant="contained" onClick={this.next} sx={{width:'70px'}}> Next </Button>
                </div>
            </form>
        </div>
        )
    }
}

export default Forget
