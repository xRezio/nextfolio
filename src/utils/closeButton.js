import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CloseButton = ({ onClick }) => {
    return (
        <IconButton aria-label="close" onClick={onClick} sx={{ position: 'absolute', top: 10, right: 10 }}> 
         <CloseIcon />
        </IconButton>
    )
};

export default CloseButton;