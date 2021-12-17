import React from 'react'
import './Note.css'
import Icons from '../Icons/Icons';
import Button from '@mui/material/Button';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { getCardContentUtilityClass } from '@mui/material';
import UserService from '../../services/UserService';
import { Notes } from '@mui/icons-material';
const userService = new UserService();


export function Note() {
    const [open, setopen] = React.useState(true);
    const [title, settitle] = React.useState(" ");
    const [description, setdescription] = React.useState(" ");
    const [Notearr, setNotearr] = React.useState([]);

React.useEffect(() => {
displayNotes()
}, [])


  

const addNote = () => {
    let data = {
        "title":title,
        "description": description,
        
    };
    console.log(data);
    userService.AddNote("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes", data)
        .then(()=>{
            setopen(true);
            settitle(" ")
            setdescription(" ")
           
        })
        .catch ((err)=> {
            console.log(err);
        });


}


const displayNotes = () => {
   
  
    userService.displayNotes("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList")
        .then((res)=>{
           // console.log(res.data.data.data);
         setNotearr([res.data.data.data])
        
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
                        <Box sx={{display:'flex'}}>
                            <IconButton><CheckBoxOutlinedIcon/></IconButton>
                            <IconButton><BrushOutlinedIcon/></IconButton>
                            <IconButton><ImageOutlinedIcon/></IconButton>
                        </Box>
                        </div>
                    </div>
                    :
                    < div className="note-container notes">
                        {/* <IconButton ><PushPinOutlinedIcon /> </IconButton> */}
                        <input type="text" value={title} placeholder="Title"  onChange={e=>settitle(e.target.value)}/>
                        <input type="text" value={description} placeholder="Take a note" onChange={e=>setdescription(e.target.value)} />
                        <div class="Bottom" style={{display:'flex'}}><Icons />
                        <Button onClick= {()=>addNote()}>close</Button></div>
                        
                    </div>
            }
        </div>
        
        <div className="display-notes">
        <div class="container"> 
            <div>title</div><br/>
            <div>description</div>
             <br/> 
            <Icons/>
            </div>
                           
        </div>
        </div>
    )
}

export default Note