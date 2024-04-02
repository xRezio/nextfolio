import { Box, Button, TextField, Typography } from '@mui/material';

const ContactBox = () => {
return (

<Box id="contact" display="flex" flexDirection="column" alignItems="center" p={4}>
<Typography variant="h6" component="h2" gutterBottom>
  Me contacter
</Typography>
<form>
  <TextField
    label="Your Email"
    variant="outlined"
    margin="normal"
    required
    fullWidth
    type="email"
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
}

export default ContactBox;
