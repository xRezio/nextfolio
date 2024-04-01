import React, {useState} from 'react';
import {Accordion, AccordionSummary, AccordionDetails, BottomNavigation, BottomNavigationAction, Container,Avatar,Box,Divider,Typography,Grid,Card,CardMedia,Button,ThemeProvider,IconButton,TextField, Chip} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import projects from './projects/projects';
import education from './job/education';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import theme from './utils/theme';
import ProjectModal from './projects/projectModal';
import technologies from './projects/techno.json';
import TypedComponent from './utils/TypedComponent';
import { School, Mail, Work, Description, LocationCity, DateRange } from '@mui/icons-material';


function Portfolio() {
  let strings = ["I'm a developer based in Lille", "I'm a student at Epitech", "I'm a Fullstack Developer"];
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNavigation = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* About Me Section */}
        
        <Box id="about" display="flex" flexDirection="column" alignItems="center" mb={4}>
      <Avatar
        alt="Profile picture"
        src="https://via.placeholder.com/150"
        sx={{ width: 150, height: 150, mb: 2}}
      />
      <Typography variant="h4" component="h1" gutterBottom>
        Edwin CARIN
      </Typography>
      {strings && (
        <>
          <Typography variant="h5" component="h2" gutterBottom>
          </Typography>
          <Typography variant="subtitle1" component="p" gutterBottom>
            <span>
            <TypedComponent
              strings={strings}
              typeSpeed={40}
              backSpeed={50}
              loop={false}
              startDelay={1000}
            />
            </span>
          </Typography>
        </>
      )}
    <BottomNavigation value={value} onChange={handleChange} showLabels>
      <BottomNavigationAction label="About Me" icon={<School />} onClick={() => handleNavigation('about')} />
      <BottomNavigationAction label="Projects" icon={<Work />} onClick={() => handleNavigation('projects')} />
      <BottomNavigationAction label="Contact" icon={<Mail />} onClick={() => handleNavigation('contact')} />
    </BottomNavigation>

    <Box id="education" sx={{ mt: 8 }}>
  <Typography variant="h4" component="h2" gutterBottom>
    Experiences
  </Typography>
  <Divider />
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
</Box>
    </Box>
    <Typography variant="h4" component="h2" gutterBottom>
    Projets
  </Typography>
    <Divider />
        {/* Project Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{clickable: true, }}
          autoplay={{delay: 5000, disableOnInteraction: false}}          
          scrollbar={{ dynamicBullets: true, hide: true}}
          id='projects'

        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} >
              <Grid container spacing={2} style={{overflowX:'hidden', marginTop:'15px'}}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ backgroundColor: '#F2F2F2', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={project.image}
                      alt={project.title}
                      sx={{ borderRadius: '10px' }} // Rounded image corners
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box display="flex" flexDirection="column" justifyContent="space-between" p={2} >
                    <Typography variant="h6" component="h2" gutterBottom sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                      <Chip label={project.title} color="primary"/>
                    </Typography>
                    <Typography sx={{ // style de la description
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      textOverflow: 'ellipsis',
                      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2)',
                      borderRadius: '10px',
                      p: 2,
                    }}
                    variant="body1" component="p">
                      {project.description}
                    </Typography>
                    <Box sx={{
                      display:"flex" ,
                      justifyContent:"space-between" ,
                      p:2 ,
                      mt:2,
                      backgroundColor:"F00000" ,
                      borderRadius:"10px",
                      boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.2)"
                    }}>
                    <ProjectModal project={project} />
                      <IconButton onClick={() => window.open('https://www.github.com/xRezio')} color="primary">
                        <FontAwesomeIcon icon={faGithub} />
                      </IconButton>
                      <IconButton onClick={() => window.open('https://www.linkedin.com/in/edwin-carin/')} color="primary">
                        <FontAwesomeIcon icon={faLinkedin} />
                        
                      </IconButton>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" mt={2}>
                    {project.techno.map((tech) => (
                    <div key={tech} style={{ marginRight: '10px', display: 'flex', alignItems: 'center'}}>
                    <Chip label={tech} onClick={() => window.open(technologies[tech].docs)} color='primary' sx={{ fontSize: '15px'}} />
                  </div>
                  ))}
                  </Box>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Contact Section */}
        <Divider />
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
      </Container>
    </ThemeProvider>
  );
}

export default Portfolio;
