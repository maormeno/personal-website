import React from 'react';
import IconLink from './IconLink';
import { Box, Typography, Button } from '@mui/material';

function PortfolioBlock(props: any) {
  const { image, live, source, title, description } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ maxWidth: 345, m: 2, boxShadow: 3, borderRadius: 2 }} // Adjusted for better presentation
    >
      {image && (
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: '100%', borderRadius: 2, objectFit: 'cover' }}
        />
      )}
      <Typography variant="h5" component="h2" sx={{ my: 2 }}>
        {title}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        alignItems="center"
        sx={{ fontSize: '1rem', p: 2 }}
      >
        {live && (
          <Button
            variant="contained"
            color="primary"
            href={live}
            startIcon={<i className="fa fa-safari" />}
            sx={{ mb: 1 }}
          >
            Live Demo
          </Button>
        )}
        {source && (
          <Button
            variant="contained"
            color="secondary"
            href={source}
            startIcon={<i className="fa fa-code" />}
          >
            Source Code
          </Button>
        )}
        {description && (
          <Typography sx={{ mt: 2, textAlign: 'center' }}>
            {description}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
