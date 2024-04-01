'use client';
import {
  Grid,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Paper,
  InputBase,
  Divider,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { CompWrapper, GroupWrapper } from './common';
import styles from './myTextField.module.css';
import { useState } from 'react';
import { Lock, LockOpen, Visibility, VisibilityOff } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
type inputAdornmentType = 'start' | 'end';
type variantType = 'filled' | 'outlined' | 'standard' | undefined;
const Basic = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <TextField label='default' fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label='Outlined' fullWidth variant='outlined' />
      </Grid>
      <Grid item xs={6}>
        <TextField label='Filled' fullWidth variant='filled' />
      </Grid>
      <Grid item xs={6}>
        <TextField label='Standard' fullWidth variant='standard' />
      </Grid>
    </Grid>
  );
};
const Options = () => {
  const VariantOptions = ({ variant }: { variant: variantType }) => {
    return (
      <>
        <Grid item xs={6}>
          <TextField variant={variant} fullWidth label='Required' required />
        </Grid>
        <Grid item xs={6}>
          <TextField variant={variant} label='Shrink' InputLabelProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={6}>
          <TextField variant={variant} fullWidth label='Disabled' disabled />
        </Grid>
        <Grid item xs={6}>
          <TextField variant={variant} fullWidth label='Password' type='password' />
        </Grid>
        <Grid item xs={6}>
          <TextField variant={variant} fullWidth label='Read only' InputProps={{ readOnly: true }} />
        </Grid>
        <Grid item xs={6}>
          <TextField variant={variant} fullWidth label='number' type='number' InputLabelProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={6}>
          <TextField variant={variant} fullWidth label='Search' type='search' />
        </Grid>
        <Grid item xs={6}>
          <TextField variant={variant} fullWidth label='Helper' helperText='help text' />
        </Grid>
        <Grid item xs={6}>
          <TextField variant={variant} fullWidth label='Default' defaultValue='Text' />
        </Grid>
        <Grid item xs={6}>
          <TextField variant={variant} fullWidth label='Error' error />
        </Grid>
        <Grid item xs={6}>
          <TextField variant={variant} fullWidth label='Multi line' multiline maxRows={4} />
        </Grid>
        <Grid item xs={6}>
          <TextField variant={variant} fullWidth label='expand' multiline rows={4} />
        </Grid>
      </>
    );
  };
  return (
    <>
      <Grid container spacing={1} sx={{ mb: 3 }}>
        <VariantOptions variant='outlined' />
      </Grid>
      <Grid container spacing={1} sx={{ mb: 3 }}>
        <VariantOptions variant='filled' />
      </Grid>
      <Grid container spacing={1} sx={{ mb: 3 }}>
        <VariantOptions variant='standard' />
      </Grid>
    </>
  );
};
const Icon = () => {
  const IconVariant = ({ variant }: { variant: variantType }): JSX.Element => {
    return (
      <>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={6}>
            <FormControl variant={variant} fullWidth>
              <InputLabel>Form Control</InputLabel>
              <Input
                startAdornment={
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant={variant}
              label='Text Field'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircle /> <TextField variant={variant} label='Box' fullWidth />
            </Box>
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <>
      <IconVariant variant='filled' /> <IconVariant variant='outlined' />
      <IconVariant variant='standard' />
    </>
  );
};
const Control = () => {
  const [context, setContext] = useState('default context');
  return (
    <>
      <TextField
        multiline
        id='control-textfield'
        label='Control'
        value={context}
        onChange={(event) => {
          setContext(event.target.value);
        }}
      />
      <div>{context}</div>
    </>
  );
};
const Color = () => {
  type colorType = 'secondary' | 'primary' | 'error' | 'info' | 'success' | 'warning';
  type variantType = 'filled' | 'outlined' | 'standard';
  const ColorComponent = ({ variant, focus }: { variant: variantType; focus: boolean }) => {
    return (
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={6}>
          <TextField label='Label' fullWidth variant={variant} focused={focus} />
        </Grid>
        <Grid item xs={6}>
          <TextField label='primary' fullWidth variant={variant} color='primary' focused={focus} />
        </Grid>
        <Grid item xs={6}>
          <TextField label='secondary' fullWidth variant={variant} color='secondary' focused={focus} />
        </Grid>
        <Grid item xs={6}>
          <TextField label='success' fullWidth variant={variant} color='success' focused={focus} />
        </Grid>
        <Grid item xs={6}>
          <TextField label='info' fullWidth variant={variant} color='info' focused={focus} />
        </Grid>
        <Grid item xs={6}>
          <TextField label='warning' fullWidth variant={variant} color='warning' focused={focus} />
        </Grid>
        <Grid item xs={6}>
          <TextField label='error' fullWidth variant={variant} color='error' focused={focus} />
        </Grid>
      </Grid>
    );
  };
  return (
    <>
      <ColorComponent variant='filled' focus={true} />
      <ColorComponent variant='outlined' focus={true} />
      <ColorComponent variant='standard' focus={true} />
    </>
  );
};
const Adornments = () => {
  return (
    <>
      <TextField
        sx={{ m: 1 }}
        variant='filled'
        label='with normal TextField'
        InputProps={{
          startAdornment: <InputAdornment position='start'>kg</InputAdornment>,
        }}
      />
      <FormControl sx={{ m: 1 }} variant='filled'>
        <OutlinedInput
          label='with normal TextField'
          endAdornment={<InputAdornment position='end'>kg</InputAdornment>}
        />
      </FormControl>
    </>
  );
};
const Password = () => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [password, setPassword] = useState('');
  return (
    <>
      <FormControl sx={{ m: 1 }} variant='filled'>
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          type={hidePassword ? 'password' : 'text'}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton onClick={() => setHidePassword((show) => !show)}>
                {hidePassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl sx={{ m: 1 }} variant='filled'>
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          type={hidePassword ? 'password' : 'text'}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton onClick={() => setHidePassword((show) => !show)}>
                {hidePassword ? <Lock /> : <LockOpen />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
};
const Size = () => {
  return (
    <>
      <TextField sx={{ m: 2 }} size='small' label='Small' />
      <TextField sx={{ m: 2 }} size='medium' label='medium' />
      <TextField sx={{ m: 2 }} size='small' label='Small' variant='filled' />
      <TextField sx={{ m: 2 }} size='medium' label='medium' variant='filled' />
      <TextField sx={{ m: 2 }} size='small' label='Small' variant='standard' />
      <TextField sx={{ m: 2 }} size='medium' label='medium' variant='standard' />
    </>
  );
};
const GoogleStyle = () => {
  return (
    <Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
      <IconButton sx={{ p: '10px' }} aria-label='menu'>
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search Google Maps'
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <IconButton color='primary' sx={{ p: '10px' }} aria-label='directions'>
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
};
export default function MyTextField() {
  return (
    <>
      <div>
        <GroupWrapper title='TextField'>
          <CompWrapper comp={<Basic />} title='Basic' />
          <CompWrapper comp={<Options />} title='Options' />
          <CompWrapper comp={<Icon />} title='Icon' />
          <CompWrapper comp={<Control />} title='Control' />
          <CompWrapper comp={<Color />} title='Color' />
          <CompWrapper comp={<Adornments />} title='Adornments' />
          <CompWrapper comp={<Password />} title='Password' />
          <CompWrapper comp={<Size />} title='Size' />
          <CompWrapper comp={<GoogleStyle />} title='GoogleStyle' />
        </GroupWrapper>
      </div>
    </>
  );
}
