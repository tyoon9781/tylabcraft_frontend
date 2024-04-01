'use client';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
  OutlinedInput,
  Theme,
  Checkbox,
  ListItemText,
  Chip,
  Box,
  Button,
  Stack,
} from '@mui/material';
import { CompWrapper, GroupWrapper } from './common';
import { useState } from 'react';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250 },
  },
};
function getStyles(name: string, people: readonly string[], theme: Theme) {
  return {
    fontWeight: people.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightBold,
  };
}
const Basic = () => {
  const [age, setAge] = useState('');
  return (
    <FormControl fullWidth>
      <InputLabel id='basic-select-label'>Age</InputLabel>
      <Select
        labelId='basic-select-label'
        id='basic-select'
        value={age}
        label='Age'
        onChange={(event) => {
          setAge(event.target.value as string);
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};
const Standard = () => {
  const [age, setAge] = useState('');
  return (
    <FormControl fullWidth variant='standard'>
      <InputLabel id='standard-select-label'>Age</InputLabel>
      <Select
        labelId='standard=select-label'
        id='standard-select'
        value={age}
        onChange={(event) => {
          setAge(event.target.value as string);
        }}
      >
        <MenuItem value=''>null</MenuItem> <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};
const Filled = () => {
  const [age, setAge] = useState('');
  return (
    <FormControl fullWidth variant='filled'>
      <InputLabel id='standard-select-label'>Age</InputLabel>
      <Select
        labelId='standard=select-label'
        id='standard-select'
        value={age}
        onChange={(event) => {
          setAge(event.target.value as string);
        }}
      >
        <MenuItem value=''>null</MenuItem> <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};
const Size = () => {
  const [age, setAge] = useState('');
  return (
    <FormControl fullWidth size='small'>
      <InputLabel id='basic-select-label'>Age</InputLabel>
      <Select
        labelId='basic-select-label'
        id='basic-select'
        value={age}
        label='Age'
        onChange={(event) => {
          setAge(event.target.value as string);
        }}
      >
        <MenuItem value=''>None</MenuItem> <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

const MultiDefault = () => {
  const theme = useTheme();
  const [people, setPeople] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof people>) => {
    const {
      target: { value },
    } = event;
    if (value.includes('')) {
      setPeople([]);
    } else {
      setPeople(typeof value === 'string' ? value.split(',') : value);
    }
  };
  return (
    <FormControl fullWidth>
      <InputLabel id='multiple-select-label'>Name</InputLabel>
      <Select
        multiple
        labelId='multiple-select-label'
        id='multiple-select'
        value={people}
        onChange={handleChange}
        input={<OutlinedInput label='name' />}
        MenuProps={MenuProps}
      >
        <MenuItem key='None' value=''>
          Reset
        </MenuItem>
        {names.map((name) => (
          <MenuItem key={name} value={name} style={getStyles(name, people, theme)}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const MultiCheckmarks = () => {
  const [people, setPeople] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof people>) => {
    const {
      target: { value },
    } = event;
    if (value.includes('')) {
      setPeople([]);
    } else {
      setPeople(typeof value === 'string' ? value.split(',') : value);
    }
  };
  return (
    <FormControl fullWidth>
      <InputLabel id='multiple-checkbox-label'>Tag</InputLabel>
      <Select
        multiple
        value={people}
        onChange={handleChange}
        input={<OutlinedInput label='Tag' />}
        labelId='multiple-checkbox-label'
        id='multiple-checkbox'
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        <MenuItem key='None' value=''>
          Reset
        </MenuItem>
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={people.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const MultiChip = () => {
  /* https://stackoverflow.com/questions/64670624/deletable-chips-in-material-ui-multiple-select */
  const theme = useTheme();
  const [people, setPeople] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof people>) => {
    const {
      target: { value },
    } = event;
    if (value.includes('')) {
      setPeople([]);
    } else {
      setPeople(typeof value === 'string' ? value.split(',') : value);
    }
  };
  return (
    <FormControl fullWidth>
      <InputLabel id='multiple-chip-label'>Chip</InputLabel>
      <Select
        labelId='multiple-chip-label'
        id='multiple-chip'
        multiple
        value={people}
        onChange={handleChange}
        input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name} style={getStyles(name, people, theme)}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
const Control = () => {
  const [age, setAge] = useState<string | number>('');
  const [open, setOpen] = useState(false);
  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Stack direction='row'>
        <FormControl fullWidth>
          <InputLabel id='control-select-label'>Age</InputLabel>
          <Select
            labelId='control-select-label'
            id='control-select'
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            label='Age'
            onChange={handleChange}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button onClick={handleOpen} variant='contained' sx={{ marginLeft: '10px' }}>
          Open
        </Button>
      </Stack>
    </>
  );
};
export default function MySelect() {
  return (
    <>
      <div>
        <GroupWrapper title='Select'>
          <CompWrapper comp={<Basic />} title='Basic' />
          <CompWrapper comp={<Standard />} title='Standard' />
          <CompWrapper comp={<Filled />} title='Filled' />
          <CompWrapper comp={<Size />} title='Size' />
          <CompWrapper comp={<MultiDefault />} title='MultiDefault' />
          <CompWrapper comp={<MultiCheckmarks />} title='MultiCheckmarks' />
          <CompWrapper comp={<MultiChip />} title='MultiChip' />
          <CompWrapper comp={<Control />} title='Control' />
        </GroupWrapper>
      </div>
    </>
  );
}
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
