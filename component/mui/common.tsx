import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import styles from './common.module.css';
export const CompWrapper = ({ comp, title = 'component' }: { comp?: ReactNode; title?: string }): JSX.Element => {
  return (
    <Box className={styles.compwrapper}>
      <h3>{title}</h3> {comp}
    </Box>
  );
};
export const GroupWrapper = ({ children, title = 'Group' }: { children?: ReactNode; title?: string }): JSX.Element => {
  return (
    <Box className={styles.groupwrapper}>
      <h2>{title}</h2> {children}
    </Box>
  );
};
