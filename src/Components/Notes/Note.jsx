import React from 'react'
import './Note.css'
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

function Note() {
    const [checked ,setChecked] = React.useState(false);
    const [content, setContent] =React.useState("");
   
    const Open = () => {
        setChecked(true);
        setContent()
    }
    const close = () => {
        setChecked(false);
    }
    const icons = (
        <Box sx={{display:'flex'}}>
            <IconButton><CheckBoxOutlinedIcon/></IconButton>
            <IconButton><BrushOutlinedIcon/></IconButton>
            <IconButton><ImageOutlinedIcon/></IconButton>
        </Box>
    );    
    
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column',padding:" 20px", width: '50%', margin: '10vw', justifyContent: 'space-between' }}>
        <Paper sx={{ padding: '10px', border: '1px solid lightgray', borderRadius: '10px',}}>
                 <Collapse in={checked}>
                      <Box sx={{ display: 'flex' }}>
                       <InputBase
                         value={content}
                         name="title"
                         sx={{ flexGrow: '1' }} /> {icons} 
        </Box>
        </Collapse>
                 <InputBase
                            value = " take a note"
                            name ="notes"
                            onClick ={Open}
                            fullWidth
                            sx={{ flexGrow: 1, padding: '10px 0' }}
                        />
            <Collapse in={checked}>
                        <Box sx={{ display: 'flex', justifyContent:"space-between"}}> 
                        <ColorLensOutlinedIcon />
                            <Button onClick={close} size="small" sx={{ color: '#5f6368', textTransform: 'none', fontSize: '15px' }}>Close</Button>
                        </Box>         
                    </Collapse>
         </Paper>
        </Box>
        );
   
    
}


export default Note