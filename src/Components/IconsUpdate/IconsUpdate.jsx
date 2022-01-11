import React from "react";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import IconButton from "@mui/material/IconButton";
import SimplePopperUpdate from "../ColorPopperUpdate/ColorPopperUpdate";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import UserService from "../../services/UserService";
const userService = new UserService();

export default function IconsUpdate({ handleNoteColor, noteId }) {
  const takeANote = () => {
    let obj = {
      isArchived: true,
      noteIdList: [noteId],
    };
    userService
      .addArchive(
        "http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",
        obj
      )
      .then((res) => {
        console.log("respnse", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const takeDeletedNote = () => {
    let obj = {
      isDeleted: true,
      noteIdList: [noteId],
    };
    userService
      .deleteNotes(
        "http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",
        obj
      )
      .then((res) => {
        console.log("Deleted note", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div class="icons">
      <IconButton>
        <AddAlertOutlinedIcon />
      </IconButton>
      <IconButton>
        <PersonAddAlt1OutlinedIcon />
      </IconButton>
      <IconButton>
        <SimplePopperUpdate handleNoteColor={handleNoteColor} noteId={noteId} />
      </IconButton>
      <IconButton>
        <ImageOutlinedIcon />
      </IconButton>
      <IconButton>
        <ArchiveOutlinedIcon onClick={takeANote} />
      </IconButton>
      <IconButton>
        <DeleteOutlineOutlinedIcon onClick={takeDeletedNote} />
      </IconButton>
      <IconButton>
        <MoreVertOutlinedIcon />
      </IconButton>
    </div>
  );
}
