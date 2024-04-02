import React, {useState} from 'react';
import { Box, Avatar, Typography, BottomNavigation, BottomNavigationAction} from '@mui/material';
import { School, Work, Mail } from '@mui/icons-material';
import profile from '../../imgs/profile.jpg';
import TypedComponent from '../utils/TypedComponent';

const AboutBox = () => {

    const [value, setValue] = useState(0);
    const strings = ["I'm a developer based in Lille", "I'm a student at Epitech", "I'm a Fullstack Developer"];
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

<Box id="about" display="flex" flexDirection="column" alignItems="center" mb={4}>
<Avatar
  alt="Profile picture"
  src={profile}
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
</Box>

);
}

export default AboutBox;