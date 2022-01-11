import React from "react";
import Icons from "../Icons/Icons";
import Button from "@mui/material/Button";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import IconButton from "@mui/material/IconButton";
import "./TakeaNote.css";
import UserService from "../../services/UserService";
const userService = new UserService();

export default function TakeaNote({ listenToTakeNote }) {
  const [open, setOpen] = React.useState(true);
  const [title, settitle] = React.useState(" ");
  const [description, setdescription] = React.useState(" ");
  const [archive, setArchive] = React.useState(false);
  const [color, setColor] = React.useState("");

  const addNote = () => {
    let data = {
      title: title,
      description: description,
      isArchived: archive,
      color: color,
    };
    console.log(data);
    userService
      .AddNote(
        "http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",
        data
      )
      .then(() => {
        setOpen(true);
        settitle("");
        setdescription("");
      })
      .catch((err) => {
        console.log(err);
      });

    listenToTakeNote(true);
  };

  const listenToArchive = (data) => {
    console.log("Archive data",data);
    setArchive(!archive);
  };

 

  const handleNoteColor = (color) => {
    console.log("color", color);
    setColor(color);
  };

  return (
    <div>
      <div>
        {open ? (
          <div className="note-container" onClick={() => setOpen(false)}>
            <input
              type="text"
              placeholder="Take a note"
              onChange={(e) => setOpen(e.target.value)}
            />
            <div>
              <IconButton>
                <CheckBoxOutlinedIcon />
              </IconButton>
              <IconButton>
                <BrushOutlinedIcon />
              </IconButton>
              <IconButton>
                <ImageOutlinedIcon />
              </IconButton>
            </div>
          </div>
        ) : (
          <div
            className="note-container notes"
            style={{ backgroundColor: color }}
          >
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => settitle(e.target.value)}
              style={{ backgroundColor: color }}
            />
            <input
              type="text"
              placeholder="Take a note"
              onChange={(e) => setdescription(e.target.value)}
              style={{ backgroundColor: color }}
            />
            <div class="Bottom" style={{ display: "flex" }}>
              <Icons
                listenToArchive={listenToArchive}
                handleNoteColor={handleNoteColor}
                style={{ backgroundColor: color }}
              />
              <Button onClick={() => addNote()}>close</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
