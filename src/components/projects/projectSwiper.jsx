import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Grid, Card, CardMedia, Typography, Box, Chip, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import projects from './projects';
import ProjectModal from './projectModal';
import technologies from './techno.json';

const ProjectSwiper = () => {

return (
    
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

);
}

export default ProjectSwiper;