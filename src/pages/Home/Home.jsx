import { drawerClasses } from '@mui/material';
import React from 'react'
import DisplayNote from '../../Components/DisplayNote/DisplayNote'
import DisplayNote1 from '../../Components/DisplayNote1/DisplayNote1';
import MiniDrawer from '../../Components/NavBar/drawer';
import Note from '../../Components/Notes/Note'
import TakeaNote from '../../Components/Notes/TakeaNote';
import UserService from '../../services/UserService';



const userService = new UserService();

export default function Home({opennav}) {
  
 const [Notearr, setNotearr] = React.useState([]);
    

 React.useEffect(() => {
        displayNotes()
        }, [])


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
           <TakeaNote />
           <DisplayNote/>
           <MiniDrawer opennav={opennav}/>
           <div>hello</div></div>

        
    )
}
