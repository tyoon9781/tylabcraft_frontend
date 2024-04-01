'use client';
import React, { useState } from 'react';
import { CompWrapper, GroupWrapper } from './common';
import { Box, Checkbox, FormGroup, FormLabel, FormControl, FormControlLabel } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
type placementType = 'top' | 'bottom' | 'end' | 'start' | undefined;
const Basic = () => {
  return (
    <>
      <Checkbox /> <Checkbox defaultChecked /> <Checkbox disabled />
      <Checkbox disabled defaultChecked />
    </>
  );
};
const Form = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label='Required' required />
      <FormControlLabel control={<Checkbox />} label='Disable' disabled />
    </FormGroup>
  );
};
const Color = () => {
  return (
    <>
      <Checkbox defaultChecked color='primary' />
      <Checkbox defaultChecked color='secondary' />
      <Checkbox defaultChecked color='success' />
      <Checkbox defaultChecked color='error' />
      <Checkbox defaultChecked color='info' />
      <Checkbox defaultChecked color='warning' />
    </>
  );
};
const Size = () => {
  return (
    <>
      <Checkbox defaultChecked size='small' />
      <Checkbox defaultChecked size='medium' />
      <Checkbox defaultChecked size='large' />
    </>
  );
};
const Icon = () => {
  return (
    <>
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} size='large' color='success' />
      <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
    </>
  );
};
const Indeterminate = () => {
  const [checked, setChecked] = useState([true, false]);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel label='Child 1' control={<Checkbox checked={checked[0]} onChange={handleChange2} />} />
      <FormControlLabel label='Child 2' control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />
    </Box>
  );
  return (
    <div>
      <FormControlLabel
        label='Parent'
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
};
const LabelPosition = () => {
  return (
    <FormControl component='fieldset'>
      {/* <FormLabel>Label Placement</FormLabel> */}
      <FormGroup row>
        <FormControlLabel value='top' control={<Checkbox />} label='Top' labelPlacement='top' />
        <FormControlLabel value='start' control={<Checkbox />} label='Start' labelPlacement='start' />
        <FormControlLabel value='bottom' control={<Checkbox />} label='Bottom' labelPlacement='bottom' />
        <FormControlLabel value='end' control={<Checkbox />} label='End' labelPlacement='end' />
      </FormGroup>
    </FormControl>
  );
};
export default function MyCheckBox() {
  return (
    <div>
      <GroupWrapper>
        <CompWrapper comp={<Basic />} title='Basic' />
        <CompWrapper comp={<Form />} title='Form' />
        <CompWrapper comp={<Color />} title='Color' />
        <CompWrapper comp={<Size />} title='Size' />
        <CompWrapper comp={<Icon />} title='Icon' />
        <CompWrapper comp={<Indeterminate />} title='Indeterminate' />
        <CompWrapper comp={<LabelPosition />} title='Label Position' />
      </GroupWrapper>
    </div>
  );
}
