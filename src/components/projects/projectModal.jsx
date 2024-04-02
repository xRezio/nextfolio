import React, { useState } from 'react';
import {
    Button,
    Modal,
    Typography,
    Card,
    CardContent,
    Chip,
    Avatar,
    Paper
  } from '@mui/material';
import technologies from './techno.json';
import CloseButton from '../utils/closeButton';
import Dropdown from '../utils/dropdown';


const ProjectModal = ({ project }) => {
  const [open, setOpen] = useState(false); // Modal state
  const [readmeContent, setReadmeContent] = useState(''); // README content state
  const handleClose = () => setOpen(false);

  const handleOpen = async () => {
    setOpen(true);
    // Charger le contenu du README lorsque le modal est ouvert
    try {
      const response = require(`./readme/${project.readme}`);
      const readme = await fetch(response);
      const text = await readme.text();
      setReadmeContent(text);
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        View Project
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
       <Paper sx={{ position: 'absolute',overflowY:'auto', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', p: 4, maxHeight:'calc(100vh - 100px)', borderRadius:'15px', colorScheme:'dark'}}>
          <CloseButton onClick={handleClose} />
          <Typography variant="h5" id="modal-title" component="h2" gutterBottom>
            {project.title}
          </Typography>
          <Card>
            <CardContent>
              <img src={project.image} alt={project.title} style={{ width: '100%', marginBottom: '10px' }} />
              <Typography variant="body1" component="p">
                {project.description}
              </Typography>
              <Typography variant="body2" component="div" sx={{ mt: '10px', display: 'flex', flexWrap: 'wrap', flex:'center'}}>
                {project.techno.map((tech) => (
                  <div key={tech} style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
                    <Avatar src={technologies[tech].favicon} alt={tech + ' favicon'} sx={{ width: 24, height: 24, marginRight: '5px' }} />
                    <Chip label={tech} onClick={() => window.open(technologies[tech].docs)} color="primary" sx={{ fontSize: '14px' }} />
                  </div>
                ))}
              </Typography>
              <Typography variant="body2" component="div" sx={{ mt: '20px', backgroundColor:'white', color:'black', padding:'10px', borderRadius:'20px'}}>
                <b>{project.readme}</b>
                <div style={{ textAlign: 'right'}}>
                    <Dropdown readmeContent={readmeContent} />
                    </div>
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Modal>
    </>
  );
};

export default ProjectModal;
