import { drawerClasses } from '@mui/material';
import React from 'react'
import DisplayNote from '../../Components/DisplayNote/DisplayNote'
import DisplayNote1 from '../../Components/DisplayNote1/DisplayNote1';
import MiniDrawer from '../../Components/NavBar/drawer';
import Note from '../../Components/Notes/Note'
import TakeaNote from '../../Components/Notes/TakeaNote';
import { ChangeToArchive, ChangeToNote,ChangeToReminder, ChangeToTrash } from '../../Redux/NotesAction';
import { connect } from 'react-redux';



function Home({opennav,dispatch}) {
  
const[update,setUpdate] = React.useState(true)
const[color,setColor] = React.useState(" ")

const[typeOfNote,settypeOfNote] =React.useState("Notes") 


const listenToTakeNote=(data) =>{
    console.log("Data recieved",data);
    setUpdate(!update);
    setColor(!color)
    
}



const changeToUpdatedNote=(data)=>{
console.log("Note Data updated ",data);
 settypeOfNote(data);
 if(data === "Notes"){
 dispatch(
   ChangeToNote(
   ))}
else if(data === "Reminder"){
    dispatch(
        ChangeToReminder(
        )
    )}
else if(data === "Archive"){
    dispatch(
        ChangeToArchive(
        )
    )}
 else if(data === "Trash"){
        dispatch(
            ChangeToTrash(
            )
        )}
 
}
    return (
        <div>
           <TakeaNote listenToTakeNote={listenToTakeNote} />
           <DisplayNote typeOfNote={typeOfNote} update={update} color={color}/>
           <MiniDrawer  changeToUpdatedNote={changeToUpdatedNote} opennav={opennav} />
           </div>

        
    )
}
export default connect()(Home); 