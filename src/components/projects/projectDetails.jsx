import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";

const Project = ({ title, image, description, technologies }) => {
    return (
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom>
            {title}
          </Typography>
          <img src={image} alt={title} style={{ width: '100%', marginBottom: '10px' }} />
          <Typography variant="body1" component="p">
            {description}
          </Typography>
          <Typography variant="body2" component="div" sx={{ mt: '10px' }}>
            <b>Technologies Used:</b> {technologies.map(tech => (
              <Chip key={tech} label={tech} sx={{ mr: 1, mb: 1 }} />
            ))}
          </Typography>
        </CardContent>
      </Card>
      );
  };

export default Project;