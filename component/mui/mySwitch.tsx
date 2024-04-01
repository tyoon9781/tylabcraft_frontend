'use client';
import { Button, FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from '@mui/material';
import { CompWrapper, GroupWrapper } from './common';
import { useState } from 'react';
const Basic = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <>
      <Switch defaultChecked /> <Switch /> <Switch size='small' />
      <Switch disabled /> <Switch defaultChecked disabled />
    </>
  );
};
const Form = () => {
  return (
    <>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label='Label : full width' />
        <FormControlLabel
          sx={{ width: 'fit-content' }}
          control={<Switch defaultChecked />}
          label='Label : only Contents'
        />
        <FormControlLabel
          required
          sx={{ backgroundColor: '#101030', color: 'white' }}
          control={<Switch />}
          label='No settings : Click Area is 100% width'
        />
        <FormControlLabel disabled control={<Switch />} label='Disabled' />
      </FormGroup>
    </>
  );
};
const Color = () => {
  type colorType = 'secondary' | 'primary' | 'error' | 'info' | 'success' | 'warning' | 'default';
  return (
    <>
      <div>
        <Switch color='secondary' /> <Switch color='error' />
        <Switch color='info' /> <Switch color='success' />
        <Switch color='warning' /> <Switch color='default' />
      </div>
      <div>
        <Switch defaultChecked color='secondary' />
        <Switch defaultChecked color='error' />
        <Switch defaultChecked color='info' />
        <Switch defaultChecked color='success' />
        <Switch defaultChecked color='warning' />
        <Switch defaultChecked color='default' />
      </div>
    </>
  );
};
const Control = () => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div>
        <Button
          variant={checked ? 'contained' : 'outlined'}
          color={checked ? 'primary' : 'warning'}
          onClick={handleChecked}
          size='large'
          fullWidth
        >
          {checked ? 'True' : 'False'}
        </Button>
      </div>
      <div>
        <Switch checked={checked} onChange={handleChecked} />
      </div>
    </>
  );
};
const Placement = () => {
  type labelPlacementType = 'top' | 'end' | 'start' | 'bottom' | undefined;
  return (
    <>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Label placement</FormLabel>
        <FormGroup row>
          <FormControlLabel label='Top' control={<Switch />} labelPlacement='top' />
          <FormControlLabel label='Start' control={<Switch />} labelPlacement='start' />
          <FormControlLabel label='Bottom' control={<Switch />} labelPlacement='bottom' />
          <FormControlLabel label='End' control={<Switch />} labelPlacement='end' />
        </FormGroup>
      </FormControl>
    </>
  );
};
export default function MySwitch() {
  return (
    <>
      <div>
        <GroupWrapper title='MySwitch'>
          <CompWrapper comp={<Basic />} title='Basic' />
          <CompWrapper comp={<Form />} title='Form' />
          <CompWrapper comp={<Color />} title='Color' />
          <CompWrapper comp={<Control />} title='Control' />
          <CompWrapper comp={<Placement />} title='Placement' />
        </GroupWrapper>
      </div>
    </>
  );
}
