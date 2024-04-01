'use client';

/* reference : https://mui.com/material-ui/react-autocomplete/ */

import { Fragment, useEffect, useState } from 'react';
import { Autocomplete, TextField, CircularProgress, Chip, Checkbox } from '@mui/material';
import { styled, lighten, darken } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { CompWrapper, GroupWrapper } from './common';
type Film = { label: string; year: number };
const Basic = () => {
  return (
    <Autocomplete
      disablePortal
      id='autocomplete-basic'
      options={top100Films}
      renderInput={(params) => <TextField {...params} label='movie' />}
    />
  );
};
const Standard = () => {
  return (
    <Autocomplete
      disablePortal
      id='autocomplete-standard'
      options={top100Films}
      renderInput={(params) => <TextField {...params} variant='standard' label='movie' placeholder='placeholder' />}
    />
  );
};
const Filled = () => {
  return (
    <Autocomplete
      disablePortal
      id='autocomplete-standard'
      options={top100Films}
      renderInput={(params) => <TextField {...params} variant='filled' label='movie' placeholder='placeholder' />}
    />
  );
};
const Group = () => {
  const theme = useTheme();
  const GroupHeader = styled('div')({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === 'light'
        ? lighten(theme.palette.primary.light, 0.9)
        : darken(theme.palette.primary.dark, 0.8),
  });
  const GroupItem = styled('ul')({ padding: 0 });
  const options = top100Films.map((option) => {
    const firstLetter = option.label[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });
  return (
    <Autocomplete
      disablePortal
      id='autocomplete-group'
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => <TextField {...params} label='with category' />}
      renderGroup={(params) => (
        <li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItem>{params.children}</GroupItem>
        </li>
      )}
    />
  );
};
const Async = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly Film[]>([]);
  const loading = open && options.length === 0;
  const sleep = (duration: number): Promise<void> => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  };
  useEffect(() => {
    let active = true;
    if (!loading) return;
    (async () => {
      await sleep(3000);
      if (active) setOptions([...top100Films]);
    })();
    return () => {
      active = false;
    };
  }, [loading]);
  useEffect(() => {
    if (!open) setOptions([]);
  }, [open]);
  return (
    <Autocomplete
      id='autocomplete-async'
      options={options}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      getOptionLabel={(option) => option.label}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Asynchronous'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? <CircularProgress color='inherit' size={20} /> : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
  );
};
const Multi = () => {
  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      id='autocomplete-multi'
      options={top100Films}
      getOptionLabel={(option) => option.label}
      defaultValue={[top100Films[10]]}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option.label}>
            {option.label}
          </li>
        );
      }}
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option, index) => (
          <Chip {...getTagProps({ index })} key={option.label} label={option.label} />
        ));
      }}
      renderInput={(params) => <TextField {...params} label='filterSelectedOptions' placeholder='Favorite' />}
    />
  );
};
export default function MyAutoComplete() {
  return (
    <div>
      <GroupWrapper title='AutoComplete'>
        <CompWrapper comp={<Basic />} title='Basic' />
        <CompWrapper comp={<Standard />} title='Standard' />
        <CompWrapper comp={<Filled />} title='Filled' />
        <CompWrapper comp={<Group />} title='Group' />
        <CompWrapper comp={<Async />} title='Async' />
        <CompWrapper comp={<Multi />} title='Multiple' />
      </GroupWrapper>
    </div>
  );
}

const top100Films: Film[] = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  { label: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { label: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  { label: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  { label: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  { label: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  { label: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];
