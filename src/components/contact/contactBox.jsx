import { Box, Button, TextField, Typography, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const ContactBox = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      embeds: [{
        title: 'Nouveau mail ! 📧',
        color: 0x0099ff,
        fields: [
          {
            name: 'Email',
            value: email,
            inline: false,
          },
          {
            name: 'Message',
            value: message,
            inline: false,
          },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: 'Contact Form Submission',
          icon_url: 'https://sqs109c.com.br/site/images/mail-ico.png/image', 
        },
      }]
    };
  
    try {
      await axios.post(`${process.env.REACT_APP_DISCORD_WEBHOOK_URL}`, payload);
      setEmail('');
      setMessage('');
      setOpen(true);
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box id="contact" display="flex" flexDirection="column" alignItems="center" p={4}>
      <Typography variant="h6" component="h2" gutterBottom>
        Me contacter
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Email"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          label="Your Message"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={handleMessageChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: '10px' }}
        >
          Submit
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Message sent
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactBox;