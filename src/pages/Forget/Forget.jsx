import React, { Component } from 'react'
import './Forget.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserService from '../../services/UserService';
const userService = new UserService();

export class Forget extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            emailorPhone: " ",
            emailorPhoneerror: false,
        };
      }
    
      validation = () => {
        let isError = false;
        const error = this.state;
        error.emailorPhoneerror = this.state.emailorPhone === " " ? true : false;
        this.setState({   //setState method is used for updating the value
          ...error,
        });
        isError = error.emailorPhoneerror;
        return isError;
      };
    
      next = () => {
        var isValid = this.validation();
        if (!isValid) {
          console.log("successsss validation");
          let data = {
            "email" : this.state.emailorPhone,
        };
        userService.Forget("http://fundoonotes.incubation.bridgelabz.com/api/user/reset", data)
            .then(()=>{
                console.log("Reset mail sent successfully");
            })
            .catch ((err)=> {
                console.log(err);
            });
    }
}
    
      changeHandle =(e)=>{
          this.setState({  //setState method is used for updating the value
            [e.target.name]: e.target.value 
          })
      }
    render() {
        return (
            <div class="forgot-email-frame">
            <div class="logo">
            <span style={{color:'rgb(17, 142, 226)'}}>F</span>
            <span style={{color:'rgb(234, 67, 53)'}}>u</span>
            <span style={{color:'rgb(251, 188, 5)'}}>n</span>
            <span style={{color:'rgb(17, 142, 226)'}}>d</span>
            <span style={{color:'rgb(234, 67, 53)'}}>o</span>
            </div>
            <h1 class="forgot-email-header">Find your email</h1>
            <span class="forgot-email-text">Enter your phone number or recovery email</span>
            <form>
                <TextField fullWidth label="Phone number or email" name="emailorPhone" size="medium" margin="dense" error={this.state.emailorPhoneerror} helperText={this.state.emailorPhoneerror ? "Enter Email or Phone" : ' '} onChange={e=> this.changeHandle(e)} sx={{marginTop:'40px'}}/>
                <div class="login-buttons">
                        <Button variant="contained" onClick={this.next} sx={{width:'70px'}}> Next </Button>
                </div>
            </form>
        </div>
        )
    }
}

export default Forget
