import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import { Box, Grid } from '@mui/material';
import { info } from '../../info/Info';

export default function Portfolio() {
  return (
    <Box sx={{ p: 3 }}>
      {' '}
      {/* Added padding */}
      <Grid container spacing={2} display={'flex'} justifyContent={'center'}>
        {' '}
        {/* Added spacing */}
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            {' '}
            {/* Added more breakpoints */}
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
              description={project.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
