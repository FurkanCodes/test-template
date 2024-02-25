import React from 'react';
import { Text, Title, Paper, Card } from '@mantine/core';
import "./HeadingTextComponent.module.scss"
const HeadingTextComponent = ({ heading, text }) => (
    
  <Paper  shadow="xl" style={{ width: '300px', padding: '20px', margin: '10px' }}>
    <Title order={2}>{heading}</Title>
  
    <Text pt={20} >{text}</Text>
 
  </Paper>
);

export default HeadingTextComponent;
