import React, { Component } from 'react'
import './Reset.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserService from '../../services/UserService';
import {BrowserRouter, Route } from 'react-router-dom';
const userService = new UserService();


export class Reset extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
            password:" ",
            confirmPsw:" ",
            passworderror:false,
            confirmPswerror:false,
        };
      }
    
      validation = () => {
        let isError = false;
        const error = this.state;
        error.passworderror = this.state.password === "" ? true : false;
        error.confirmPswerror = this.state.confirmPsw === "" ? true : false;
        this.setState({   //setState method is used for updating the value
          ...error,
        });
        isError = error.password ;
        isError = error.confirmPswerror;
        return isError;
      };
    
      next = () => {
        var isValid = this.validation();
        if (!isValid) {
          console.log("successsss validation");
         let data = {

          "password" : this.state.password,
          // "confirmPsw": this.state.confirmPsw
           
        };
        userService.Reset("http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password", data)
        .then(()=>{
            console.log("Changed password");
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
            <div class="reset-frame">
            <div class="logo"> 
             <span style={{color:'rgb(17, 142, 226)'}}>F</span>
             <span style={{color:'rgb(234, 67, 53)'}}>u</span>
             <span style={{color:'rgb(251, 188, 5)'}}>n</span>
            <span style={{color:'rgb(17, 142, 226)'}}>d</span>
            <span style={{color:'rgb(234, 67, 53)'}}>o</span>
             </div>
           <h1 class="reset-header">Reset your password</h1>
           <span class="reset-text">Enter your new password </span>
           <form>
               <TextField fullWidth label="Enter new password" name="password" size="small" margin="dense" error={this.state.passworderror} helperText={this.state.passworderror ? "Enter Password" : ' '} onChange={e=> this.changeHandle(e)} sx={{marginTop:'20px'}}/>
               <TextField fullWidth label="Confirm the password" name="confirmPsw" size="small" margin="dense"error={this.state.confirmPswerror} helperText={this.state.confirmPswerror ? "Enter Password Again" : ' '} onChange={e=> this.changeHandle(e)} sx={{marginTop:'20px'}}/>
               <div class="reset-buttons">
                       <Button variant="contained"  onClick={this.next} sx={{width:'80px'}}>Next</Button>
               </div>
           </form>
       </div>
        )
    }
}

export default Reset
