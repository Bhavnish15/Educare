import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { fileUploadCss } from '../Auth/Register';

const categories = [
  'Web Development',
  'BlockChain',
  'App Developement',
  'DevOps',
  'Machine Learning',
  'Data Science',
  'Full Stack Developent',
  'Data Structures and Algorithms',
];

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [description, setDescription] = useState('');

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container py={'16'}>
        <form>
          <Heading
            children="Create Course"
            my={'16'}
            textAlign={['center', 'left']}
            textTransform={'uppercase'}
          />
          <VStack m={'auto'} spacing={'8'}>
            <Input
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              focusBorderColor="purple.300"
              type="text"
            />
            <Input
              required
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              focusBorderColor="purple.300"
              type="text"
            />

            <Input
              required
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder="Creator Name"
              focusBorderColor="purple.300"
              type="text"
            />
            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option>Category</option>

              {categories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              accept="image/*"
              required
              type={'file'}
              focusBorderColor="purple.300"
              css={{
                '&::file-selector-button': {
                  ...fileUploadCss,
                  color: 'purple',
                },
              }}
              onChange={changeImageHandler}
            />
            {imagePrev && (
              <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
            )}
            <Button w="full" colorScheme="purple" type="submit">
              Create
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
