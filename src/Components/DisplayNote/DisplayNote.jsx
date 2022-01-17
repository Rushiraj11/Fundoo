import React from "react";
import { fetchNotes } from "../../Redux/NotesAction";
import UserService from "../../services/UserService";
import DisplayNote1 from "../DisplayNote1/DisplayNote1";
import "./DisplayNote.css";
import { connect } from 'react-redux';
const userService = new UserService();

 function DisplayNote({ update,color,takeUpdateNote,typeOfNote,dispatch,Notes,loading,error }) {
  const [notes, setNotes] = React.useState([]);
 // const [loading,setLoading] = React.useState(true)
const getAllNotes=(typeOfNote)=>{
   dispatch(fetchNotes())
   userService.displayNotes(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList"
  )
  .then((res) => {
    console.log(res.data.data.data);
    let arr=res.data.data.data;
    let filterArray;
    console.log();
     if (typeOfNote== "Notes"){
     filterArray=arr.filter(note => note.isArchived !== true && note.isDeleted !== true)
      // console.log("Note filtered",filterArray);
     } else if (typeOfNote=="Archive") 
     {  filterArray=arr.filter(note => note.isArchived === true && note.isDeleted !== true)}
      else if (typeOfNote=="Trash") 
     {  filterArray=arr.filter(note =>note.isArchived !== true && note.isDeleted === true)
     }
    
    

    setNotes(filterArray);
  })

  .catch((err) => {
    console.log(err);
  });

}

  React.useEffect(() => {
   
getAllNotes(typeOfNote);

  }, [update,color,typeOfNote]);

const listenToColor=()=>{
  getAllNotes("Notes");
  console.log("color updated");
}

  return (
    <div>
      <div className="display-notes">
       {loading ? <div> loading</div> : 
        Notes.map((notes,index) => (
          <DisplayNote1 key={index} notes={notes} takeUpdateNote={takeUpdateNote}  listenToColor={listenToColor} ></DisplayNote1>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      loading: state.notesApi.loading,
      Notes: state.notesApi.Notes,
      error: state.notesApi.error,

  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//       fetchNotes: () => dispatch(fetchNotes())
//   }
// }
export default connect(mapStateToProps)(DisplayNote)
