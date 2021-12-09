import React from 'react'
import Icons from '../Icons/Icons';
import Button from '@mui/material/Button';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';


export default function TakeaNote() {
    const [open, setopen] = React.useState(true);

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
                        <input type="text" placeholder="Title" />
                        <input type="text" placeholder="Take a note" />
                        <div class="Bottom" style={{display:'flex'}}><Icons />
                        <Button onClick= {()=>setopen(true)}>close</Button></div>
                        
                    </div>
            }
        </div>
        
        <div className="display-notes">
                <div class="container">
                    
            <Icons/>
            </div>
                           
        </div>
        </div>
    )
}
