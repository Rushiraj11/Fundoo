import React from "react";
import UserService from "../../services/UserService";
import "../DisplayNote1/DisplayNote1.css";
import IconsUpdate from "../IconsUpdate/IconsUpdate";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
const userService = new UserService();

function DisplayNote1({ notes, listenToColor}) {
 // console.log(" Notes",notes);
  const [color, setColor] = React.useState(" ");
  const [update, setUpdate] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [titleUpdate, settitleUpdate] = React.useState(notes.title);
  const [descriptionUpdate, setdescriptionUpdate] = React.useState( notes.description);

  const handleNoteColor = (color, id) => {
    setColor(color);
    const obj = {
      noteIdList: [id],
      color: color,
    };

    userService
      .changeColor(
        "http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",
        obj
      )
      .then(() => {
        setColor(color);
        setUpdate();
        listenToColor();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const takeTitle = (e) => {
    settitleUpdate(e.target.value);
    
  };

  const takeDescription = (e) => {
    setdescriptionUpdate(e.target.value);
  };

  const takeUpdateNote = (noteid) => {
    console.log("take update note");
    
    const obj = {
      noteId:noteid,
      title: titleUpdate,
      description:descriptionUpdate,
    };
    userService.updateNotes(
        "http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",obj
      )
      .then(() => {
        setUpdate(update);
        setOpen(false);
        
      })
      .catch((err) => {
        console.log(err);
      });
      
}

  return (
    <div className="container" style={{ backgroundColor: notes.color }}>
      <div className="title" onClick={handleOpen}>
        {notes.title}
      </div>
      <div className="description" onClick={handleOpen}>
        {notes.description}
      </div>
      <div className="icons">
        <IconsUpdate handleNoteColor={handleNoteColor} noteId={notes.id} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" >
        <div className="box">
          <input className="input1" defaultValue={notes.title} onChange={takeTitle}></input>
          <input className="input1" defaultValue={notes.description} onChange={takeDescription}></input>
          <div className="bottom">
            <IconsUpdate />
            <Button onClick={()=>takeUpdateNote(notes.id)}>close</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DisplayNote1;
