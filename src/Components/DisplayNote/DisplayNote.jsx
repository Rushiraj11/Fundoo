import { Notes } from '@mui/icons-material';
import React from 'react'
import UserService from '../../services/UserService';
import DisplayNote1 from '../DisplayNote1/DisplayNote1';
import Icons from '../Icons/Icons';
import './DisplayNote.css'
const userService = new UserService();

export default function DisplayNote() {
    const[title,setTitle]=React.useState()
    const[notes,setNotes]=React.useState([])

    React.useEffect(()=>{
        
        userService.displayNotes("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList")
        .then((res)=>{
            console.log(res.data.data.data);
          setNotes(res.data.data.data)
        
        })
        .catch ((err)=> {
            console.log(err);
        });
 


    },[])
    


    return (
        <div>
             <div className="display-notes"> 
                 
        {

       notes.map( notes => 
      <DisplayNote1 notes= {notes}></DisplayNote1>
       
       )
        } 
        
       
       
       
           </div>
           </div>
           
       
    )
}
