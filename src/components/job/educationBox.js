import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Grid } from '@mui/material';
import { ExpandMore, School, Work, Description, LocationCity, DateRange } from '@mui/icons-material';
import education from './education.js';

const EducationBox = () => {
return (
<Grid container spacing={2} sx={{ mt: 2 }}>
{education.map((item) => (
  <Grid item xs={12} md={6} key={item.id}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <School/>
      <Typography variant="h6" component="h3" gutterBottom sx={{ flexGrow: 1, margin:'5px' }}>
        {item.degree}
      </Typography>
      {item.logo && 
        <Box component="img" 
            src={item.logo} 
            alt={item.school} 
            sx={{ 
              height: '75px', 
              width: '30%', 
              ml: '15px', 
              objectFit: 'contain',
              borderRadius: '10px',
              boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.2)'}} 
        />
      }
    </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="subtitle1" component="p" gutterBottom>
          <Work /> {item.title}
        </Typography>
        <Typography variant="subtitle1" component="p" gutterBottom>
          <LocationCity /> {item.school} - {item.location}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          <Description /> {item.description}
        </Typography>
        <Typography variant="caption" component="p" gutterBottom>
          <DateRange /> {item.startYear} - {item.endYear}
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Grid>
))}
</Grid>
);
}

export default EducationBox;