'use client';
import { useState } from 'react';
import { Rating, Typography, styled } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CompWrapper, GroupWrapper } from './common';
import styles from './myRating.module.css';
type fontsizeType = 'small' | 'inherit' | 'medium' | 'large';
const Basic = () => {
  const [value, setValue] = useState<number | null>(1);
  return (
    <div className={styles.rowDisplay}>
      <Rating
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      />
      <Rating value={value === null ? 1 : value} readOnly />
      <Rating value={value} disabled /> <Rating defaultValue={3} />
    </div>
  );
};
const Precision = () => {
  const [value_5, setValue_5] = useState<number | null>(2.5);
  const [value_1, setValue_1] = useState<number | null>(2.5);
  return (
    <div className={styles.rowDisplay}>
      <Typography component='legend'>precision : 0.5, current value : {value_5}</Typography>
      <Rating
        defaultValue={2.5}
        precision={0.5}
        value={value_5}
        onChange={(_, newValue) => {
          setValue_5(newValue);
        }}
      />
      <Typography component='legend'>precision : 0.1 current value : {value_1 === null ? 'null' : value_1}</Typography>
      <Rating
        defaultValue={2.5}
        precision={0.1}
        value={value_1}
        onChange={(_, newValue) => {
          setValue_1(newValue);
        }}
      />
    </div>
  );
};
const Feedback = () => {
  const [value, setValue] = useState<number | null>(1);
  const [hover, setHover] = useState<number | null>(1);
  return (
    <>
      <Typography component='legend'>
        Controlled. Hover : {hover}, Value : {value}
      </Typography>
      <Rating
        value={value}
        precision={0.1}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(_, newHover) => {
          setHover(newHover);
        }}
      />
    </>
  );
};
const Size = () => {
  return (
    <div className={styles.rowDisplay}>
      <Rating defaultValue={3} size='small' />
      <Rating defaultValue={3} size='medium' />
      <Rating defaultValue={3} size='large' />
    </div>
  );
};
const Custom = () => {
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': { color: '#ff6d75' },
    '& .MuiRating-iconHover': { color: '#ff3d47' },
  });
  return (
    <div className={styles.rowDisplay}>
      <StyledRating
        defaultValue={2}
        precision={0.5}
        icon={<FavoriteIcon fontSize='large' />}
        emptyIcon={<FavoriteBorderIcon fontSize='large' />}
      />
      <Rating defaultValue={2} max={10} size='small' />
    </div>
  );
};
export default function MyRating() {
  return (
    <>
      <div>
        <GroupWrapper title='Rating'>
          <CompWrapper comp={<Basic />} title='Basic' />
          <CompWrapper comp={<Precision />} title='Precision' />
          <CompWrapper comp={<Feedback />} title='Feedback' />
          <CompWrapper comp={<Size />} title='Size' />
          <CompWrapper comp={<Custom />} title='Custom' />
        </GroupWrapper>
      </div>
    </>
  );
}
