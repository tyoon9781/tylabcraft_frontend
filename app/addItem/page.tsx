'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const AddItem = () => {
  const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/items`;
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(baseURL, {
        title,
        description,
      });
      router.push('/');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Add Item
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label='Title' value={title} onChange={(e) => setTitle(e.target.value)} fullWidth margin='normal' />
        <TextField
          multiline
          label='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin='normal'
        />
        <Button type='submit' variant='contained' color='primary'>
          Add
        </Button>
      </form>
    </Container>
  );
};

export default AddItem;
