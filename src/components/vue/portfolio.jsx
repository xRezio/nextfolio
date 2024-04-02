import React from 'react';
import {Container,Box,Divider,Typography,ThemeProvider} from '@mui/material';
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

function Portfolio() {

    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <AboutBox />{/* About me */}
            <Box id="education" sx={{ mt: 8 }}>
              <Typography variant="h4" component="h2" gutterBottom>
               Experiences
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