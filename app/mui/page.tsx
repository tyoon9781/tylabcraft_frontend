import styles from './page.module.css';
import MyAutoComplete from '@/component/mui/myAutoComplete';
import MyButton from '@/component/mui/myButton';
import MyCheckBox from '@/component/mui/myCheckbox';
import MyFloatingActionButton from '@/component/mui/myFloatingActionButton';
import MyRadioGroup from '@/component/mui/myRadioGroup';
import MyRating from '@/component/mui/myRating';
import MySelect from '@/component/mui/mySelect';
import MySlider from '@/component/mui/mySlider';
import MySwitch from '@/component/mui/mySwitch';
import MyTextField from '@/component/mui/myTextField';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function MaterialUI() {
  return (
    <>
      <Link href='/'>
        <Button variant='contained' color='primary' size='large'>
          Go to Home
        </Button>
      </Link>
      <div className={styles.materialui}>
        <MyTextField />
        <MySwitch />
        <MySlider />
        <MySelect />
        <MyRating />
        <MyRadioGroup />
        <MyFloatingActionButton /> <MyCheckBox /> <MyButton />
        <MyAutoComplete />
      </div>
    </>
  );
}
