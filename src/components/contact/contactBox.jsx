import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const ContactBox = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    

  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
    </Box>
  );
};

export default ContactBox;