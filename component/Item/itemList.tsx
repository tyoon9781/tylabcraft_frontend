'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Container, Typography, Button, Box } from '@mui/material';

const Index = (): JSX.Element => {
  type itemsType = {
    id: number;
    create_at: string;
    title?: string;
    description?: string;
  };

  const [items, setItems] = useState<itemsType[]>([]);

  useEffect(() => {
    const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/items`;
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [items]);

  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Items
      </Typography>
      {items.map((item) => (
        <Box key={item.id} sx={{ display: 'flex' }}>
          <Typography variant='h6'>{item.title}</Typography>
          <Typography>{item.description}</Typography>
          <Link href={`/editItem/${item.id}`}>
            <Button variant='contained' color='primary' size='small'>
              Edit
            </Button>
          </Link>
        </Box>
      ))}
      <Link href='/addItem'>
        <Button variant='contained' color='primary' size='large'>
          Add Item
        </Button>
      </Link>
    </Container>
  );
};

export default Index;
