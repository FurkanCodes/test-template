import React from 'react'
import { Container, Title, Text, Button, Flex } from '@mantine/core';
import classes from './Homepage.module.scss';
import HeadingTextComponent from 'src/components/CardComponent';
function Homepage() {
  return (
    <div className={classes.root}>


       <Flex>
       <HeadingTextComponent heading={"STS Başvurusu Hk."} text={"STS Başvurusundan çıkmak için Anasayfa'ya tıklayın"}  ></HeadingTextComponent>
       <HeadingTextComponent heading={"Duyurular"} text={"Lorem"} ></HeadingTextComponent>
       <HeadingTextComponent heading={"Duyurular"} text={"Lorem"} ></HeadingTextComponent>
       </Flex>
 
       </div>
  );
}

export default Homepage
