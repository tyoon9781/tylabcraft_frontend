'use client';
import { Fab, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { CompWrapper, GroupWrapper } from './common';
import styles from './myFloatingActionButton.module.css';
type variantType = 'extended' | 'circular';
type colorType = 'success' | 'error' | 'info' | 'warning';
const Basic = () => {
  return (
    <>
      <Fab variant='circular'>FAB</Fab>
      <Fab variant='extended'>Floating Action Button</Fab>
      <Fab color='primary' aria-label='add'>
        <AddIcon />
      </Fab>
      <Fab color='secondary' variant='extended' aria-label='edit'>
        <EditIcon />
      </Fab>
      <Fab variant='extended'>
        <NavigationIcon />
      </Fab>
      <Fab disabled aria-label='like'>
        <FavoriteIcon />
      </Fab>
    </>
  );
};
const Color = () => {
  return (
    <>
      <Fab color='success' variant='extended' aria-label='add'>
        <AddIcon /> success
      </Fab>
      <Fab color='error' variant='extended' aria-label='add'>
        <AddIcon /> error
      </Fab>
      <Fab color='info' variant='extended' aria-label='add'>
        <AddIcon /> info
      </Fab>
      <Fab color='warning' variant='extended' aria-label='add'>
        <AddIcon /> warning
      </Fab>
    </>
  );
};
const Size = () => {
  return (
    <>
      <div>
        <Fab size='small' color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
        <Fab size='medium' color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
        <Fab size='large' color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </div>
      <div>
        <Fab size='small' variant='extended' color='primary' aria-label='add'>
          <AddIcon /> Extended
        </Fab>
        <Fab size='medium' variant='extended' color='primary' aria-label='add'>
          <AddIcon /> Extended
        </Fab>
        <Fab size='large' variant='extended' color='primary' aria-label='add'>
          <AddIcon /> Extended
        </Fab>
      </div>
    </>
  );
};
export default function MyFloatingActionButton() {
  return (
    <Box className={styles.buttonMargin}>
      <GroupWrapper title='Floating Action Button'>
        <CompWrapper comp={<Basic />} title='Basic' />
        <CompWrapper comp={<Color />} title='Color' />
        <CompWrapper comp={<Size />} title='Size' />
      </GroupWrapper>
    </Box>
  );
}
