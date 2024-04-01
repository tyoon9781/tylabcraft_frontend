'use client';
import { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { CompWrapper, GroupWrapper } from './common';
type colorType = 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'default';
const Basic = () => {
  return (
    <FormControl>
      <FormLabel id='radiogroup-basic-label'>Gender</FormLabel>
      <RadioGroup defaultValue='female'>
        <FormControlLabel value='female' control={<Radio />} label='Female' />
        <FormControlLabel value='male' control={<Radio />} label='Male' />
        <FormControlLabel value='other' control={<Radio />} label='Other' />
      </RadioGroup>
    </FormControl>
  );
};
const Row = () => {
  return (
    <FormControl>
      <FormLabel id='radiogroup-basic-label'>Gender</FormLabel>
      <RadioGroup row name='radiogroup-basic-label' defaultValue='female'>
        <FormControlLabel value='female' control={<Radio />} label='Female' />
        <FormControlLabel value='male' control={<Radio />} label='Male' />
        <FormControlLabel value='other' control={<Radio />} label='Other' />
        <FormControlLabel value='disabled' disabled control={<Radio />} label='Disable' />
      </RadioGroup>
    </FormControl>
  );
};
const SizeAndColor = () => {
  const [selectedValue, setSelectedValue] = useState('a');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  return (
    <>
      <Radio {...controlProps('a')} size='small' />
      <Radio {...controlProps('b')} size='medium' color='primary' />
      <Radio {...controlProps('c')} size='small' color='secondary' />
      <Radio {...controlProps('a')} size='medium' color='success' />
      <Radio {...controlProps('b')} size='small' color='info' />
      <Radio {...controlProps('c')} size='medium' color='warning' />
      <Radio {...controlProps('a')} size='small' color='error' />
    </>
  );
};
export default function MyRadioGroup() {
  return (
    <>
      <div>
        <GroupWrapper>
          <CompWrapper comp={<Basic />} title='Basic' />
          <CompWrapper comp={<Row />} title='Row' />
          <CompWrapper comp={<SizeAndColor />} title='Size And Color' />
        </GroupWrapper>
      </div>
    </>
  );
}
