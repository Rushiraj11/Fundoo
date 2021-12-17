import React from 'react'
import Icons from '../Icons/Icons';
import Button from '@mui/material/Button';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import IconButton from "@mui/material/IconButton";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import './TakeaNote.css';
import UserService from '../../services/UserService';
const userService = new UserService();


export default function TakeaNote() {
    const [open, setopen] = React.useState(true);
    const [title, settitle] = React.useState(" ");
    const [description, setdescription] = React.useState(" ");

    
    const addNote = () => {
        let data = {
            "title":title,
            "description": description,
            
        };
        console.log(data);
        userService.AddNote("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes", data)
            .then(()=>{
                setopen(true);
                settitle(" ");
                setdescription(" ");
               
            })
            .catch ((err)=> {
                console.log(err);
            });
    
    
    }
    
    
  

    
    return (
        <div>
        <div>
            {
                open ?
                    <div className="note-container" onClick= {()=>setopen(false)}>
                        <input type="text" placeholder="Take a note" />
                        <div>
                            <IconButton><CheckBoxOutlinedIcon/></IconButton>
                            <IconButton><BrushOutlinedIcon/></IconButton>
                            <IconButton><ImageOutlinedIcon/></IconButton>
                        
                        </div>
                    </div>
                    :
                    < div className="note-container notes">
                     {/* <IconButton ><PushPinOutlinedIcon /> </IconButton>  */}
                        <input type="text"  placeholder="Title"  onChange={e=>settitle(e.target.value)} />
                        <input type="text"  placeholder="Take a note"  onChange={e=>setdescription(e.target.value)} />
                        <div class="Bottom" style={{display:'flex'}}><Icons />
                        <Button onClick= {()=>addNote()}>close</Button></div>
                        
                    </div>
            }
        </div>
        </div>
    )
}
