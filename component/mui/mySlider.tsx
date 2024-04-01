'use client';
import { CompWrapper, GroupWrapper } from './common';
import { Box, Grid, Input, Slider, SliderThumb, Typography, styled } from '@mui/material';
import { VolumeUp, VolumeDown, VolumeMute } from '@mui/icons-material';
import React, { useState } from 'react';
type markType = { value: number; label: string };
const marks: markType[] = [
  { value: 0, label: '0℃' },
  { value: 20, label: '20℃' },
  { value: 36.5, label: '36.5℃' },
  { value: 100, label: '100℃' },
];
const Basic = () => {
  return (
    <>
      <Slider /> <Slider disabled /> <Slider size='small' />
      <Slider value={70} /> <Slider defaultValue={70} track='inverted' />
      <Slider value={[20, 37]} valueLabelDisplay='on' />
      <Slider defaultValue={[20, 37]} valueLabelDisplay='auto' />
      <Slider shiftStep={30} defaultValue={30} step={10} marks min={0} max={300} />
      <Slider defaultValue={50} track={false} />
    </>
  );
};
const Volume = () => {
  const [volume, setVolume] = useState(50);
  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(event.target.value === '' ? 0 : Number(event.target.value));
  };
  const handleBlur = () => {
    if (volume < 0) {
      setVolume(0);
    } else if (volume > 100) {
      setVolume(100);
    }
  };
  const VolumeIcon = (volume: number): JSX.Element => {
    if (volume < 20) {
      return <VolumeMute />;
    } else if (volume < 80) {
      return <VolumeDown />;
    } else {
      return <VolumeUp />;
    }
  };
  const VolumeSlider = (volume: number) => {
    return <Slider value={typeof volume === 'number' ? volume : 0} onChange={handleSliderChange} />;
  };
  const VolumeInput = (volume: number) => {
    return (
      <Input
        value={volume}
        size='small'
        onChange={handleInputChange}
        onBlur={handleBlur}
        inputProps={{ step: 10, min: 0, max: 100, type: 'number' }}
      />
    );
  };
  return (
    <>
      <Typography gutterBottom>Volume</Typography>
      <Grid container spacing={2} alignItems='center'>
        <Grid item>{VolumeIcon(volume)}</Grid>
        <Grid item xs>
          {VolumeSlider(volume)}
        </Grid>
        <Grid item>{VolumeInput(volume)}</Grid>
      </Grid>
    </>
  );
};
const Marks = () => {
  return (
    <>
      <Slider defaultValue={30} step={10} marks={marks} valueLabelDisplay='on' />
      <Slider defaultValue={30} step={10} marks={marks} valueLabelDisplay='auto' />
      <Slider defaultValue={30} step={10} marks={marks} valueLabelDisplay='off' />
    </>
  );
};
const Restric = () => {
  const valueLabelFormat = (value: number) => {
    return marks.findIndex((mark) => mark.value === value) + 1;
  };
  return (
    <>
      <Slider marks={marks} step={null} valueLabelDisplay='auto' />
      <Slider marks={marks} valueLabelFormat={valueLabelFormat} step={null} valueLabelDisplay='auto' />
    </>
  );
};
const Color = () => {
  type colorType = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  return (
    <>
      <Slider color='primary' defaultValue={10} />
      <Slider color='secondary' defaultValue={70} />
      <Slider color='error' defaultValue={20} />
      <Slider color='info' defaultValue={45} />
      <Slider color='success' defaultValue={50} />
      <Slider color='warning' defaultValue={80} />
    </>
  );
};

// must component outside
const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#3a8589',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': { boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)' },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': { height: 3 },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children} <span className='airbnb-bar' /> <span className='airbnb-bar' />
      <span className='airbnb-bar' />
    </SliderThumb>
  );
}
const CustomSlider = styled(Slider)(({ theme }) => ({
  color: '#3a8589',
  height: 1,
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#633754',
    opacity: theme.palette.mode === 'dark' ? undefined : 0,
    height: 10,
  },
  '& .MuiSlider-thumb[data-index="0"]': { color: 'green', opacity: 0.5 },
  '& .MuiSlider-thumb[data-index="1"]': { color: 'purple' },
}));
const MultiCustom = () => {
  /**
   * https://stackoverflow.com/questions/66666691/setting-different-color-for-material-ui-range-sliders-thumbs
   * https://stackoverflow.com/questions/73372434/onchange-does-not-work-on-styled-mui-slider
   */

  const [values, setValues] = useState<number[]>([40, 60]);
  const handleChange = (_: Event, newValues: number | number[]) => {
    setValues(newValues as number[]);
  };
  return (
    <>
      <CustomSlider value={values} onChange={handleChange} disableSwap />
      <AirbnbSlider
        slots={{ thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        value={values}
        onChange={handleChange}
      />
    </>
  );
};
const Vertical = () => {
  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }
  return (
    <>
      <Box sx={{ height: 300, textAlign: 'center' }}>
        <Slider
          sx={{
            '& input[type="range"]': { WebkitAppearance: 'slider-vertical' },
          }}
          orientation='vertical'
          defaultValue={30}
          aria-label='Temperature'
          valueLabelDisplay='auto'
          onKeyDown={preventHorizontalKeyboardNavigation}
        />
      </Box>
    </>
  );
};
export default function MySlider() {
  return (
    <>
      <GroupWrapper title='Slider1'>
        <CompWrapper comp={<Basic />} title='Basic' />
        <CompWrapper comp={<Color />} title='Color' />
        <CompWrapper comp={<MultiCustom />} title='MultiCustom' />
      </GroupWrapper>
      <GroupWrapper title='Slider2'>
        <CompWrapper comp={<Vertical />} title='Vertical' />
        <CompWrapper comp={<Volume />} title='Volume' />
        <CompWrapper comp={<Marks />} title='Marks' />
        <CompWrapper comp={<Restric />} title='Restric' />
      </GroupWrapper>
    </>
  );
}
