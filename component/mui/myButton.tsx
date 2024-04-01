'use client';
import { Box, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import { CompWrapper, GroupWrapper } from './common';
import styles from './myButton.module.css';
type VariantType = 'text' | 'contained' | 'outlined';
type ColorType = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
type SizeType = 'small' | 'medium' | 'large';
const Basic = () => {
  return (
    <>
      <Button variant='text'>Default</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
    </>
  );
};
const Disabled = () => {
  return (
    <>
      <Button disabled>Disabled</Button>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <Button variant='outlined' disabled>
        Disabled
      </Button>
    </>
  );
};
const Colors = () => {
  const ColorButton = ({ color }: { color: ColorType }): JSX.Element => (
    <Button variant='contained' color={color}>
      {color}
    </Button>
  );
  return (
    <>
      <ColorButton color='inherit' /> <ColorButton color='primary' />
      <ColorButton color='secondary' /> <ColorButton color='success' />
      <ColorButton color='error' /> <ColorButton color='info' />
      <ColorButton color='warning' />
    </>
  );
};
const Sizes = () => {
  const SizeButton = ({ size, variant }: { size: SizeType; variant: VariantType }): JSX.Element => (
    <Button variant={variant} size={size}>
      {size}
    </Button>
  );
  return (
    <>
      <div>
        <SizeButton variant='outlined' size='small' />
        <SizeButton variant='outlined' size='medium' />
        <SizeButton variant='outlined' size='large' />
      </div>
      <div>
        <SizeButton variant='contained' size='small' />
        <SizeButton variant='contained' size='medium' />
        <SizeButton variant='contained' size='large' />
      </div>
    </>
  );
};
const Icons = () => {
  return (
    <>
      <IconButton>
        <DeleteIcon />
      </IconButton>
      <Button variant='outlined' startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <IconButton>
        <SendIcon />
      </IconButton>
      <Button variant='contained' endIcon={<SendIcon />}>
        Send
      </Button>
      <IconButton size='small'>
        <AlarmIcon /> alarm
      </IconButton>
      <IconButton size='large'>
        <AlarmIcon /> alarm
      </IconButton>
      <IconButton color='primary' size='small' aria-label='Alarm'>
        <AlarmIcon fontSize='large' /> alarm
      </IconButton>
      <IconButton color='success' size='large' aria-label='Alarm'>
        <AlarmIcon fontSize='large' /> alarm
      </IconButton>
    </>
  );
};
export default function MyButton() {
  return (
    <Box className={styles.buttonMargin}>
      <GroupWrapper title='Button'>
        <CompWrapper comp={<Basic />} title='Basic' />
        <CompWrapper comp={<Disabled />} title='Disabled' />
        <CompWrapper comp={<Colors />} title='color' />
        <CompWrapper comp={<Sizes />} title='size' />
        <CompWrapper comp={<Icons />} title='icon' />
      </GroupWrapper>
    </Box>
  );
}
