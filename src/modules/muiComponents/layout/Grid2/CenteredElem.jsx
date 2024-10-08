import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function CenteredElementGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} minHeight={160}>
        <Grid xs display='flex' justifyContent='center' alignItems='center'>
          <Avatar src='/assets/images/avatar/A1.jpg' />
        </Grid>
        <Grid display='flex' justifyContent='center' alignItems='center'>
          <Avatar src='/assets/images/avatar/A2.jpg' />
        </Grid>
        <Grid xs display='flex' justifyContent='center' alignItems='center'>
          <Avatar src='/assets/images/avatar/A3.jpg' />
        </Grid>
      </Grid>
    </Box>
  );
}
