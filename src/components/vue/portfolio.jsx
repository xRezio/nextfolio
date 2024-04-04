import React from 'react';
import {Container,Box,Divider,Typography,ThemeProvider, Button} from '@mui/material';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import theme from '../utils/theme';
import ProjectSwiper from '../projects/projectSwiper';
import AboutBox from '../about/aboutBox';
import ContactBox from '../contact/contactBox';
import EducationBox from '../job/educationBox';
import Notify from '../../api/notify';
import cv from '../CV/edwin_carin.pdf';
import {Downloaded} from '../CV/download';

function Portfolio() {

    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Notify />{/* Notify me */}
          <AboutBox />{/* About me */}
          <Box display="flex" justifyContent="center" mb={2}>
          <Button onClick={Downloaded} variant="contained" color="primary" href={cv} download>
            Télécharger mon CV
          </Button>
        </Box>
            <Box id="education" sx={{ mt: 8 }}>
              <Typography variant="h4" component="h2" gutterBottom>
               Etudes
              </Typography>
              <Divider />
              <EducationBox />{/* Education Section */}
            </Box>
            <Box id="projects" sx={{ mt: 8 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Projets
              </Typography>
              <Divider />
            </Box>
            <ProjectSwiper /> {/* Project Swiper */}
            <Divider />
            <ContactBox /> {/* Contact Section */}
        </Container>
      </ThemeProvider>
    );
  }

  export default Portfolio;